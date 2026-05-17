import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";
import { configuredSiteOrigin, normalizeSiteOrigin, siteMetadata } from "./lib/site-metadata";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

const INDEXING_DIRECTIVES =
  "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1";
const SEO_CACHE_CONTROL = "public, max-age=3600, s-maxage=86400";

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m as { default?: ServerEntry }).default ?? (m as unknown as ServerEntry),
    );
  }
  return serverEntryPromise;
}

function brandedErrorResponse(): Response {
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function runtimeSiteOrigin(env: unknown): string | undefined {
  if (!env || typeof env !== "object") return undefined;

  const record = env as Record<string, unknown>;
  return normalizeSiteOrigin(record.SITE_URL) ?? normalizeSiteOrigin(record.VITE_SITE_URL);
}

function publicSiteOrigin(request: Request, env: unknown): string {
  return runtimeSiteOrigin(env) ?? configuredSiteOrigin ?? new URL(request.url).origin;
}

function absolutePublicUrl(request: Request, env: unknown, path = "/"): string {
  return new URL(path, `${publicSiteOrigin(request, env)}/`).toString();
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function robotsResponse(request: Request, env: unknown): Response {
  const sitemapUrl = absolutePublicUrl(request, env, "/sitemap.xml");
  const body = `User-agent: *
Allow: /

Sitemap: ${sitemapUrl}
`;

  return new Response(request.method === "HEAD" ? null : body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": SEO_CACHE_CONTROL,
      "x-content-type-options": "nosniff",
    },
  });
}

function sitemapResponse(request: Request, env: unknown): Response {
  const pageUrl = absolutePublicUrl(request, env, "/");
  const imageUrl = absolutePublicUrl(request, env, siteMetadata.imagePath);
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${escapeXml(pageUrl)}</loc>
    <lastmod>${siteMetadata.lastModified}</lastmod>
    <image:image>
      <image:loc>${escapeXml(imageUrl)}</image:loc>
      <image:title>${escapeXml(siteMetadata.name)}</image:title>
    </image:image>
  </url>
</urlset>
`;

  return new Response(request.method === "HEAD" ? null : body, {
    headers: {
      "content-type": "application/xml; charset=utf-8",
      "cache-control": SEO_CACHE_CONTROL,
      "x-content-type-options": "nosniff",
    },
  });
}

function seoAssetResponse(request: Request, env: unknown): Response | undefined {
  if (request.method !== "GET" && request.method !== "HEAD") return undefined;

  const { pathname } = new URL(request.url);
  if (pathname === "/robots.txt") return robotsResponse(request, env);
  if (pathname === "/sitemap.xml") return sitemapResponse(request, env);
  return undefined;
}

function withSearchIndexingHeaders(request: Request, env: unknown, response: Response): Response {
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("text/html")) return response;

  const headers = new Headers(response.headers);
  if (response.status === 200) {
    const canonicalUrl = absolutePublicUrl(request, env, new URL(request.url).pathname || "/");
    headers.append("link", `<${canonicalUrl}>; rel="canonical"`);
    headers.set("x-robots-tag", INDEXING_DIRECTIVES);
  } else if (response.status >= 400) {
    headers.set("x-robots-tag", "noindex, nofollow");
  }

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

function isCatastrophicSsrErrorBody(body: string, responseStatus: number): boolean {
  let payload: unknown;
  try {
    payload = JSON.parse(body);
  } catch {
    return false;
  }

  if (!payload || Array.isArray(payload) || typeof payload !== "object") {
    return false;
  }

  const fields = payload as Record<string, unknown>;
  const expectedKeys = new Set(["message", "status", "unhandled"]);
  if (!Object.keys(fields).every((key) => expectedKeys.has(key))) {
    return false;
  }

  return (
    fields.unhandled === true &&
    fields.message === "HTTPError" &&
    (fields.status === undefined || fields.status === responseStatus)
  );
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isCatastrophicSsrErrorBody(body, response.status)) {
    return response;
  }

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return brandedErrorResponse();
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const crawlerAssetResponse = seoAssetResponse(request, env);
      if (crawlerAssetResponse) return crawlerAssetResponse;

      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      const normalizedResponse = await normalizeCatastrophicSsrResponse(response);
      return withSearchIndexingHeaders(request, env, normalizedResponse);
    } catch (error) {
      console.error(error);
      return withSearchIndexingHeaders(request, env, brandedErrorResponse());
    }
  },
};
