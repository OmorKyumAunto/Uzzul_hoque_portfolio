export const siteMetadata = {
  name: "Engr. Uzzul Hoque",
  title: "Engr. Uzzul Hoque | Head of Utility at DBL Group",
  description:
    "Professional portfolio of Engr. Uzzul Hoque, Head of Utility at DBL Industrial Park Ltd, DBL Group, with expertise in industrial utilities, energy efficiency, power, steam, HVAC, water and sustainable manufacturing.",
  shortDescription:
    "Industrial utility leadership across power, steam, HVAC, water, ETP, energy efficiency and sustainable manufacturing.",
  locale: "en_BD",
  language: "en-BD",
  themeColor: "#0f766e",
  author: "Engr. Uzzul Hoque",
  role: "Head of Utility",
  organization: "DBL Industrial Park Ltd, DBL Group",
  email: "uzzul.hoque@dbl-group.com",
  linkedin: "https://www.linkedin.com/in/uzzul-hoque-950869409/",
  imagePath: "/uzzul-hoque.png",
  lastModified: "2026-05-17",
  keywords: [
    "Engr. Uzzul Hoque",
    "Uzzul Hoque",
    "Head of Utility",
    "DBL Group",
    "DBL Industrial Park Ltd",
    "industrial utilities",
    "energy efficiency",
    "power generation",
    "steam systems",
    "HVAC",
    "ETP",
    "sustainable manufacturing",
  ],
  expertise: [
    "Industrial utility leadership",
    "Power generation and electrical distribution",
    "Steam and boiler operations",
    "HVAC and compressed air systems",
    "Water treatment and ETP operations",
    "Energy audits and efficiency programs",
    "Sustainable manufacturing",
  ],
} as const;

export function normalizeSiteOrigin(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined;

  const trimmed = value.trim();
  if (!trimmed) return undefined;

  try {
    const url = new URL(trimmed.startsWith("http") ? trimmed : `https://${trimmed}`);
    url.pathname = "";
    url.search = "";
    url.hash = "";
    return url.toString().replace(/\/$/, "");
  } catch {
    return undefined;
  }
}

export const configuredSiteOrigin = normalizeSiteOrigin(import.meta.env.VITE_SITE_URL);
export const googleSiteVerification =
  import.meta.env.VITE_GOOGLE_SITE_VERIFICATION?.trim() || undefined;

export function absoluteSiteUrl(path = "/", origin = configuredSiteOrigin): string | undefined {
  if (!origin) return undefined;
  return new URL(path, `${origin}/`).toString();
}

export function buildPortfolioStructuredData(origin = configuredSiteOrigin) {
  const canonicalUrl = absoluteSiteUrl("/", origin);
  const imageUrl = absoluteSiteUrl(siteMetadata.imagePath, origin);
  const personId = canonicalUrl ? `${canonicalUrl}#person` : "#person";
  const websiteId = canonicalUrl ? `${canonicalUrl}#website` : "#website";
  const profilePageId = canonicalUrl ? `${canonicalUrl}#profile` : "#profile";

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: siteMetadata.name,
        alternateName: "Uzzul Hoque",
        honorificPrefix: "Engr.",
        jobTitle: siteMetadata.role,
        description: siteMetadata.description,
        email: `mailto:${siteMetadata.email}`,
        image: imageUrl,
        url: canonicalUrl,
        sameAs: [siteMetadata.linkedin],
        worksFor: {
          "@type": "Organization",
          name: siteMetadata.organization,
        },
        alumniOf: [
          {
            "@type": "CollegeOrUniversity",
            name: "Jatiya Kabi Kazi Nazrul Islam University",
          },
        ],
        knowsAbout: siteMetadata.expertise,
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: siteMetadata.name,
        url: canonicalUrl,
        inLanguage: siteMetadata.language,
        publisher: {
          "@id": personId,
        },
      },
      {
        "@type": "ProfilePage",
        "@id": profilePageId,
        name: siteMetadata.title,
        description: siteMetadata.description,
        url: canonicalUrl,
        inLanguage: siteMetadata.language,
        isPartOf: {
          "@id": websiteId,
        },
        mainEntity: {
          "@id": personId,
        },
      },
    ],
  };
}
