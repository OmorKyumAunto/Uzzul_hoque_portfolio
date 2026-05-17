import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import portrait from "@/assets/uzzul-hoque.png";
import { absoluteSiteUrl, buildPortfolioStructuredData, siteMetadata } from "@/lib/site-metadata";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Zap,
  Factory,
  Gauge,
  Leaf,
  Award,
  ArrowRight,
  Calendar,
  Check,
  Quote,
  GraduationCap,
  BookOpen,
  ShieldCheck,
  Wrench,
  BarChart3,
  Users,
  Droplets,
  Recycle,
} from "lucide-react";

const wikimediaFile = (fileName: string) =>
  `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(fileName)}`;

export const Route = createFileRoute("/")({
  head: () => {
    const canonicalUrl = absoluteSiteUrl("/");
    const imageUrl = absoluteSiteUrl(siteMetadata.imagePath);

    return {
      meta: [
        { title: siteMetadata.title },
        { name: "description", content: siteMetadata.description },
        { property: "og:title", content: siteMetadata.title },
        { property: "og:description", content: siteMetadata.shortDescription },
        ...(canonicalUrl ? [{ property: "og:url", content: canonicalUrl }] : []),
        ...(imageUrl
          ? [
              { property: "og:image", content: imageUrl },
              {
                property: "og:image:alt",
                content: "Portrait of Engr. Uzzul Hoque, Head of Utility at DBL Group",
              },
              { name: "twitter:image", content: imageUrl },
            ]
          : []),
        { name: "twitter:title", content: siteMetadata.title },
        { name: "twitter:description", content: siteMetadata.shortDescription },
        { "script:ld+json": buildPortfolioStructuredData() },
      ],
      links: canonicalUrl ? [{ rel: "canonical", href: canonicalUrl }] : [],
    };
  },
  component: Portfolio,
});

const nav = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Leadership", href: "#leadership" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Impact", href: "#impact" },
  { label: "Sustainability", href: "#sustainability" },
  { label: "Contact", href: "#contact" },
];

const contact = {
  email: "uzzul.hoque@dbl-group.com",
  emailHref:
    "https://mail.google.com/mail/?view=cm&fs=1&to=uzzul.hoque%40dbl-group.com&su=Portfolio%20Inquiry",
  linkedin: "https://www.linkedin.com/in/uzzul-hoque-950869409/",
};

const expertise = [
  {
    icon: Zap,
    title: "Power & Energy Systems",
    desc: "Co-generation, gas & diesel gensets, grid integration and load management for industrial parks.",
  },
  {
    icon: Factory,
    title: "Steam & Boiler Operations",
    desc: "High-pressure steam generation, distribution networks, and process integration.",
  },
  {
    icon: Gauge,
    title: "HVAC & Compressed Air",
    desc: "Chillers, AHUs, humidification and compressed air systems for textile and apparel facilities.",
  },
  {
    icon: Leaf,
    title: "Sustainability & ETP",
    desc: "Effluent treatment, water recovery, and energy efficiency programs aligned with LEED standards.",
  },
];

const utilityScope = [
  "Power generation & electrical distribution",
  "Steam, boiler and thermal systems",
  "HVAC, chillers and humidification",
  "Compressed air networks",
  "Water treatment and ETP operations",
  "Gas distribution and process utilities",
  "Preventive and predictive maintenance",
  "Energy audits, reporting and optimization",
];

const leadershipPillars = [
  {
    icon: ShieldCheck,
    title: "Safety & Compliance",
    desc: "Builds operating discipline around electrical safety, boiler compliance, environmental standards, SOPs and audit readiness.",
  },
  {
    icon: Wrench,
    title: "Reliability & Maintenance",
    desc: "Drives uptime through preventive maintenance, condition monitoring, spares planning and rapid response for critical utility assets.",
  },
  {
    icon: BarChart3,
    title: "Energy KPI & Cost Control",
    desc: "Tracks load, fuel, steam, water, compressed air and chiller performance to reduce waste and improve cost per unit of production.",
  },
  {
    icon: Users,
    title: "Team & Vendor Leadership",
    desc: "Leads multidisciplinary engineers, operators, contractors and OEM partners through projects, shutdowns and capacity expansions.",
  },
];

const sustainabilityFocus = [
  {
    icon: Leaf,
    title: "Energy Efficiency",
    desc: "Utility load monitoring, fuel-use awareness, compressor leakage control, chiller optimization and practical energy-saving initiatives.",
  },
  {
    icon: Droplets,
    title: "Water & ETP Stewardship",
    desc: "Responsible operation around water treatment, effluent treatment, recovery opportunities and environmental compliance discipline.",
  },
  {
    icon: Recycle,
    title: "Waste & Resource Reduction",
    desc: "Improvement mindset for reducing utility losses, recovering usable resources and keeping process utilities aligned with lean operations.",
  },
  {
    icon: ShieldCheck,
    title: "Green Compliance Support",
    desc: "Utility-side support for audit readiness, LEED-aligned facilities, safety standards and sustainable manufacturing expectations.",
  },
];

const sdgGoals = [
  {
    number: "01",
    name: "No Poverty",
    src: wikimediaFile("Sustainable Development Goal 01NoPoverty.svg"),
  },
  {
    number: "02",
    name: "Zero Hunger",
    src: wikimediaFile("Sustainable Development Goal 02ZeroHunger.svg"),
  },
  {
    number: "03",
    name: "Good Health & Well-being",
    src: wikimediaFile("Sustainable Development Goal 03GoodHealth.svg"),
  },
  {
    number: "04",
    name: "Quality Education",
    src: wikimediaFile("Sustainable Development Goal 04QualityEducation.svg"),
  },
  {
    number: "05",
    name: "Gender Equality",
    src: wikimediaFile("Sustainable Development Goal 05GenderEquality.svg"),
  },
  {
    number: "06",
    name: "Clean Water & Sanitation",
    src: wikimediaFile("Sustainable Development Goal 06CleanWaterSanitation.svg"),
  },
  {
    number: "07",
    name: "Affordable & Clean Energy",
    src: wikimediaFile("Sustainable Development Goal 07CleanEnergy.svg"),
  },
  {
    number: "08",
    name: "Decent Work & Economic Growth",
    src: wikimediaFile("Sustainable Development Goal 08DecentWork.svg"),
  },
  {
    number: "09",
    name: "Industry, Innovation & Infrastructure",
    src: wikimediaFile("Sustainable Development Goal 09Industry.svg"),
  },
  {
    number: "10",
    name: "Reduced Inequalities",
    src: wikimediaFile("Sustainable Development Goal 10ReducedInequalities.svg"),
  },
  {
    number: "11",
    name: "Sustainable Cities & Communities",
    src: wikimediaFile("Sustainable Development Goal 11SustainableCities.svg"),
  },
  {
    number: "12",
    name: "Responsible Consumption & Production",
    src: wikimediaFile("Sustainable Development Goal 12ResponsibleConsumption.svg"),
  },
  {
    number: "13",
    name: "Climate Action",
    src: wikimediaFile("Sustainable Development Goal 13Climate.svg"),
  },
  {
    number: "14",
    name: "Life Below Water",
    src: wikimediaFile("Sustainable Development Goal 14LifeBelowWater.svg"),
  },
  {
    number: "15",
    name: "Life on Land",
    src: wikimediaFile("Sustainable Development Goal 15LifeOnLand.svg"),
  },
  {
    number: "16",
    name: "Peace, Justice & Strong Institutions",
    src: wikimediaFile("Sustainable Development Goal 16PeaceJusticeInstitutions.svg"),
  },
  {
    number: "17",
    name: "Partnerships for the Goals",
    src: wikimediaFile("Sustainable Development Goal 17Partnerships.svg"),
  },
];

const milestones = [
  {
    year: "Present",
    role: "Head of Utility",
    org: "DBL Industrial Park Ltd — DBL Group",
    desc: "Leading utility operations across the integrated industrial park — power, steam, water, HVAC and sustainability systems.",
    responsibilities: [
      "Strategic leadership of the entire utility division across the industrial park",
      "Oversee power generation, gas & steam distribution, chiller, compressor and ETP plants",
      "Drive energy efficiency, cost reduction and carbon-footprint initiatives",
      "Capex planning, vendor management and capacity expansion projects",
      "Lead, mentor and develop a multidisciplinary engineering team",
    ],
  },
  {
    year: "Previously",
    role: "AGM — Engineering & Utility",
    org: "Unitex Group",
    desc: "Managed engineering and utility operations across composite textile and apparel facilities.",
    responsibilities: [
      "End-to-end utility operations: power plant, boiler, chiller, compressor and WTP/ETP",
      "Preventive and predictive maintenance strategy across plants",
      "Energy audits, optimization and reliability improvement programs",
      "Cross-functional coordination with production, projects and EHS teams",
    ],
  },
  {
    year: "Earlier",
    role: "Head of EEE (Electrical, Electronics & Engineering)",
    org: "Badsha Group of Industries",
    desc: "Headed electrical, electronics and engineering functions across spinning, weaving and finishing units.",
    responsibilities: [
      "Owned high-voltage distribution, substations and electrical safety compliance",
      "Automation, instrumentation and control systems for production lines",
      "Project execution for new installations, upgrades and expansions",
      "Built SOPs, training programs and a strong maintenance culture",
    ],
  },
  {
    year: "Foundation",
    role: "B.Sc. in Engineering",
    org: "Engineering discipline",
    desc: "Technical foundation backed by years of hands-on industrial leadership across Bangladesh's largest manufacturing groups.",
    responsibilities: [],
  },
];

const quotes = [
  {
    text: "A plant runs on people first, machines second. Get the team right and the megawatts follow.",
  },
  {
    text: "Utility is invisible when it works — and that is exactly the standard I hold my teams to.",
  },
  {
    text: "Every kilowatt saved is a promise kept to the next generation.",
  },
];

const impact = [
  { value: "15+", label: "Years of industrial experience" },
  { value: "100MW+", label: "Utility capacity managed" },
  { value: "24/7", label: "Reliability across operations" },
  { value: "LEED", label: "Sustainability aligned facilities" },
];

function SdgGoalCard({
  goal,
}: {
  goal: {
    number: string;
    name: string;
    src: string;
  };
}) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div className="group overflow-hidden rounded-lg border border-border bg-card shadow-soft transition-smooth hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant">
      <div className="aspect-square bg-white">
        {!imageFailed ? (
          <img
            src={goal.src}
            alt={`UN Sustainable Development Goal ${goal.number}: ${goal.name}`}
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => setImageFailed(true)}
            className="h-full w-full object-contain transition-smooth group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full flex-col justify-between bg-gradient-primary p-4 text-primary-foreground">
            <span className="text-3xl font-bold">{goal.number}</span>
            <span className="text-sm font-semibold leading-tight">{goal.name}</span>
          </div>
        )}
      </div>
    </div>
  );
}

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/60">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#top" className="font-display text-lg font-bold tracking-tight">
            Uzzul<span className="text-gradient-primary">.</span>
          </a>
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-sm text-muted-foreground">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-foreground transition-smooth">
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden lg:inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-gradient-primary text-primary-foreground shadow-soft hover:shadow-elegant transition-smooth"
          >
            Get in touch <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section id="top" className="relative overflow-hidden bg-gradient-hero">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(0.45_0.05_185/0.09)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.45_0.05_185/0.09)_1px,transparent_1px)] bg-[size:48px_48px]" />
          <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-background/90 to-transparent" />

          <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-32 grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-3 animate-fade-up">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card/60 text-xs font-medium text-muted-foreground mb-6">
                <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                Head of Utility · DBL Industrial Park Ltd
              </div>
              <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.05] mb-6">
                Engr. Uzzul <br />
                <span className="text-gradient-primary">Hoque</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-8">
                Engineering leader powering one of South Asia's most integrated industrial parks —
                from energy and steam to water, air and sustainability.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#experience"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-soft hover:shadow-elegant transition-smooth"
                >
                  View experience <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card/60 text-foreground font-medium hover:bg-card transition-smooth"
                >
                  Contact Uzzul Hoque
                </a>
              </div>
            </div>

            <div className="md:col-span-2 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-2xl rounded-3xl" />
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-elegant border border-border/60">
                  <img
                    src={portrait}
                    alt="Engr. Uzzul Hoque, Head of Utility at DBL Industrial Park Ltd"
                    width={1088}
                    height={1445}
                    decoding="async"
                    fetchPriority="high"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-card/90 backdrop-blur border border-border rounded-2xl px-5 py-3 shadow-soft">
                  <p className="text-xs text-muted-foreground">Currently leading</p>
                  <p className="font-semibold text-sm">DBL Group · Utility Division</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <p className="text-sm font-medium text-primary mb-3 uppercase tracking-widest">
                About
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
                A practical engineer with a strategic lens.
              </h2>
            </div>
            <div className="md:col-span-7 md:col-start-6 space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm <span className="text-foreground font-semibold">Engr. Uzzul Hoque</span>, Head
                of Utility at DBL Industrial Park Ltd — part of{" "}
                <span className="text-foreground font-semibold">DBL Group</span>, one of
                Bangladesh's leading textile and apparel conglomerates.
              </p>
              <p>
                My work sits at the intersection of{" "}
                <span className="text-foreground">heavy engineering</span> and{" "}
                <span className="text-foreground">operational excellence</span>: keeping a complex
                industrial ecosystem running reliably while pushing it toward measurable energy and
                sustainability gains.
              </p>
              <p>
                I lead multidisciplinary teams across power generation, steam and thermal systems,
                HVAC, compressed air, water and effluent treatment — translating engineering
                decisions into business outcomes.
              </p>
            </div>
          </div>
        </section>

        {/* EXPERTISE */}
        <section id="expertise" className="py-24 md:py-32 bg-secondary/40 border-y border-border">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-2xl mb-16">
              <p className="text-sm font-medium text-primary mb-3 uppercase tracking-widest">
                Expertise
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
                Industrial utility, end to end.
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {expertise.map((e) => (
                <div
                  key={e.title}
                  className="group p-8 rounded-3xl bg-card border border-border hover:border-primary/40 hover:shadow-elegant transition-smooth"
                >
                  <div className="h-12 w-12 rounded-2xl bg-gradient-primary text-primary-foreground flex items-center justify-center mb-5 shadow-soft group-hover:scale-110 transition-smooth">
                    <e.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{e.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{e.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LEADERSHIP */}
        <section id="leadership" className="py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5 lg:sticky lg:top-28">
                <p className="text-sm font-medium text-primary mb-3 uppercase tracking-widest">
                  Utility Leadership
                </p>
                <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
                  What a utility head must keep under control.
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The role is more than running machines. It means balancing safety, uptime, energy
                  cost, regulatory discipline, people and future capacity while production depends
                  on every decision.
                </p>
              </div>

              <div className="lg:col-span-7 space-y-8">
                <div className="grid sm:grid-cols-2 gap-4">
                  {leadershipPillars.map((pillar) => (
                    <div
                      key={pillar.title}
                      className="group p-6 rounded-2xl bg-card border border-border shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-smooth"
                    >
                      <div className="h-11 w-11 rounded-2xl bg-gradient-primary text-primary-foreground flex items-center justify-center mb-4 shadow-soft group-hover:scale-110 transition-smooth">
                        <pillar.icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{pillar.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{pillar.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="p-6 md:p-8 rounded-3xl bg-secondary/50 border border-border">
                  <h3 className="font-display text-2xl font-bold mb-5">
                    Utility systems under leadership
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {utilityScope.map((item) => (
                      <div key={item} className="flex gap-3 text-sm text-foreground/80">
                        <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-2xl mb-16">
              <p className="text-sm font-medium text-primary mb-3 uppercase tracking-widest">
                Experience
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
                A career built on the plant floor.
              </h2>
            </div>
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
              <div className="space-y-12">
                {milestones.map((m, i) => (
                  <div
                    key={i}
                    className={`relative grid md:grid-cols-2 gap-8 ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}
                  >
                    <div className="md:text-right md:pr-12">
                      <div className="inline-flex items-center gap-2 text-sm font-medium text-primary mb-2">
                        <Calendar className="h-4 w-4" /> {m.year}
                      </div>
                      <h3 className="font-display text-2xl font-bold">{m.role}</h3>
                      <p className="text-muted-foreground">{m.org}</p>
                    </div>
                    <div className="md:pl-12 relative">
                      <div className="absolute left-4 md:-left-2 top-2 h-4 w-4 rounded-full bg-gradient-primary ring-4 ring-background animate-pulse" />
                      <div className="ml-12 md:ml-0 p-6 rounded-2xl bg-card border border-border shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-smooth">
                        <p className="text-muted-foreground leading-relaxed mb-4">{m.desc}</p>
                        {m.responsibilities.length > 0 && (
                          <ul className="space-y-2">
                            {m.responsibilities.map((r) => (
                              <li key={r} className="flex gap-2 text-sm text-foreground/80">
                                <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                <span>{r}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* QUOTES — marquee */}
        <section className="py-20 md:py-28 bg-secondary/40 border-y border-border overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 mb-10">
            <p className="text-sm font-medium text-primary mb-3 uppercase tracking-widest">
              In my words
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight max-w-3xl">
              Lessons from the <span className="text-gradient-primary">plant floor</span>.
            </h2>
          </div>
          <div className="relative group">
            <div className="flex gap-6 animate-marquee">
              {[...quotes, ...quotes, ...quotes].map((q, i) => (
                <figure
                  key={i}
                  className="shrink-0 w-[360px] md:w-[460px] p-8 rounded-3xl bg-card border border-border shadow-soft hover:shadow-elegant transition-smooth"
                >
                  <Quote className="h-8 w-8 text-primary/40 mb-4" />
                  <blockquote className="font-display text-xl md:text-2xl leading-snug text-foreground">
                    "{q.text}"
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center text-sm font-semibold">
                      UH
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Engr. Uzzul Hoque</p>
                      <p className="text-xs text-muted-foreground">Head of Utility · DBL Group</p>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-2xl mb-16">
              <p className="text-sm font-medium text-primary mb-3 uppercase tracking-widest">
                Education
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
                Academic <span className="text-gradient-primary">foundation</span>.
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="group relative p-8 md:p-10 rounded-3xl bg-card border border-border shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-smooth overflow-hidden">
                <div className="absolute top-0 right-0 h-40 w-40 bg-gradient-primary opacity-10 blur-3xl rounded-full" />
                <div className="relative">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-primary text-primary-foreground flex items-center justify-center mb-6 shadow-soft group-hover:scale-110 transition-smooth">
                    <GraduationCap className="h-7 w-7" />
                  </div>
                  <p className="text-xs font-medium text-primary uppercase tracking-widest mb-2">
                    Master's Degree
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">
                    MBA — Master of Business Administration
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Jatiya Kabi Kazi Nazrul Islam University
                  </p>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    Strategic management training that complements decades of plant-floor
                    engineering experience — bridging technical leadership with business outcomes.
                  </p>
                </div>
              </div>

              <div className="group relative p-8 md:p-10 rounded-3xl bg-card border border-border shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-smooth overflow-hidden">
                <div className="absolute top-0 right-0 h-40 w-40 bg-gradient-primary opacity-10 blur-3xl rounded-full" />
                <div className="relative">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-primary text-primary-foreground flex items-center justify-center mb-6 shadow-soft group-hover:scale-110 transition-smooth">
                    <Award className="h-7 w-7" />
                  </div>
                  <p className="text-xs font-medium text-primary uppercase tracking-widest mb-2">
                    Professional Certification
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">
                    PMP — Project Management Professional
                  </h3>
                  <p className="text-muted-foreground mb-4">Project Management Institute (PMI)</p>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    Formal project leadership credential supporting planning, execution, risk
                    management and cross-functional delivery across complex engineering initiatives.
                  </p>
                </div>
              </div>

              <div className="group relative p-8 md:p-10 rounded-3xl bg-card border border-border shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-smooth overflow-hidden">
                <div className="absolute top-0 right-0 h-40 w-40 bg-gradient-accent opacity-10 blur-3xl rounded-full" />
                <div className="relative">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-accent text-accent-foreground flex items-center justify-center mb-6 shadow-soft group-hover:scale-110 transition-smooth">
                    <BookOpen className="h-7 w-7" />
                  </div>
                  <p className="text-xs font-medium text-primary uppercase tracking-widest mb-2">
                    Bachelor's Degree
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">B.Sc. in EEE</h3>
                  <p className="text-muted-foreground mb-4">Electrical & Electronic Engineering</p>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    Core technical foundation for a career spent leading utility, power and
                    electrical operations across major industrial groups.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IMPACT */}
        <section id="impact" className="py-24 md:py-32 bg-gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(0.65_0.18_240/0.15),transparent_50%)]" />
          <div className="relative max-w-6xl mx-auto px-6">
            <div className="max-w-2xl mb-16">
              <p className="text-sm font-medium text-primary mb-3 uppercase tracking-widest">
                Impact
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
                Numbers that reflect the work.
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {impact.map((s) => (
                <div
                  key={s.label}
                  className="p-8 rounded-3xl bg-card/80 backdrop-blur border border-border shadow-soft"
                >
                  <div className="font-display text-4xl md:text-5xl font-bold text-gradient-primary mb-2">
                    {s.value}
                  </div>
                  <div className="text-sm text-muted-foreground leading-snug">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-16 p-8 md:p-12 rounded-3xl bg-card border border-border shadow-elegant flex flex-col md:flex-row gap-6 items-start md:items-center">
              <div className="h-14 w-14 rounded-2xl bg-gradient-accent flex items-center justify-center shrink-0">
                <Award className="h-7 w-7 text-accent-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-2xl font-bold mb-1">
                  Trusted with mission-critical operations
                </h3>
                <p className="text-muted-foreground">
                  Responsible for keeping production lines, lighting, climate and process utilities
                  live across one of DBL Group's flagship industrial parks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SUSTAINABILITY */}
        <section
          id="sustainability"
          className="py-24 md:py-32 bg-secondary/40 border-y border-border"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <p className="text-sm font-medium text-primary mb-3 uppercase tracking-widest">
                  Sustainability
                </p>
                <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
                  Utility decisions that reduce waste at scale.
                </h2>
                <p className="max-w-3xl text-lg text-muted-foreground leading-relaxed">
                  Sustainable utility leadership means making energy, water, air, steam and
                  environmental systems measurable, reliable and continuously improved for global
                  buyer, audit and compliance expectations.
                </p>
              </div>

              <div className="lg:col-span-5">
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-lg border border-border bg-card p-5 shadow-soft">
                    <p className="font-display text-4xl font-bold text-gradient-primary">17</p>
                    <p className="mt-1 text-sm text-muted-foreground">UN goals in one wide view</p>
                  </div>
                  <div className="rounded-lg border border-border bg-card p-5 shadow-soft">
                    <p className="font-display text-4xl font-bold text-gradient-primary">360°</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Energy, water and compliance
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {sustainabilityFocus.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-lg border border-border bg-card p-6 shadow-soft transition-smooth hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-accent text-accent-foreground shadow-soft transition-smooth group-hover:scale-110">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-14 border-y border-border py-10">
              <div className="grid gap-8 xl:grid-cols-[280px_1fr] xl:items-start">
                <div>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-accent text-accent-foreground shadow-soft">
                    <Leaf className="h-6 w-6" />
                  </div>
                  <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
                    Global Goals
                  </p>
                  <h3 className="font-display text-3xl font-bold leading-tight md:text-4xl">
                    Sustainable Development Goals
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    Utility leadership contributes most directly through clean energy, water
                    stewardship, responsible production and climate-conscious manufacturing.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-9">
                  {sdgGoals.map((goal) => (
                    <SdgGoalCard key={goal.number} goal={goal} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-medium text-primary mb-3 uppercase tracking-widest">
                Contact
              </p>
              <h2 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-6">
                Let's talk <span className="text-gradient-primary">engineering</span>.
              </h2>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Available for professional inquiries, utility leadership discussions, energy
                efficiency conversations and sustainable manufacturing collaborations.
              </p>
            </div>

            <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-[minmax(320px,1.35fr)_repeat(3,minmax(0,1fr))]">
              <a
                href={contact.emailHref}
                target="_blank"
                rel="noreferrer"
                aria-label={`Email ${contact.email}`}
                className="group flex min-h-[150px] flex-col items-center justify-center rounded-2xl border border-primary/20 bg-card px-5 py-7 text-center shadow-soft transition-smooth hover:-translate-y-1 hover:border-primary/50 hover:shadow-elegant focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              >
                <Mail className="h-5 w-5 text-primary mb-3 mx-auto group-hover:scale-110 transition-smooth" />
                <p className="text-xs text-muted-foreground">Work Email</p>
                <p className="mt-1 break-all text-base font-semibold text-foreground underline decoration-primary/30 underline-offset-4">
                  {contact.email}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                  Open compose <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </a>
              <div className="flex min-h-[150px] flex-col items-center justify-center rounded-2xl border border-border bg-card px-5 py-7 text-center shadow-soft">
                <Phone className="h-5 w-5 text-primary mb-3 mx-auto" />
                <p className="text-xs text-muted-foreground">Phone</p>
                <p className="font-medium text-sm">By request</p>
              </div>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="Open Uzzul Hoque's LinkedIn profile"
                className="group flex min-h-[150px] flex-col items-center justify-center rounded-2xl border border-border bg-card px-5 py-7 text-center shadow-soft transition-smooth hover:-translate-y-1 hover:border-primary/40 hover:shadow-elegant focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              >
                <Linkedin className="h-5 w-5 text-primary mb-3 mx-auto group-hover:scale-110 transition-smooth" />
                <p className="text-xs text-muted-foreground">LinkedIn</p>
                <p className="font-medium text-sm">LinkedIn profile</p>
              </a>
              <address className="flex min-h-[150px] flex-col items-center justify-center rounded-2xl border border-border bg-card px-5 py-7 text-center not-italic shadow-soft">
                <MapPin className="h-5 w-5 text-primary mb-3 mx-auto" />
                <p className="text-xs text-muted-foreground">Permanent Address</p>
                <p className="max-w-[18ch] text-sm font-medium leading-snug">
                  Purbachal City, Rupgonj, Narayanganj
                </p>
              </address>
            </div>

            <div className="mt-10 flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" /> DBL Industrial Park Ltd · Bangladesh
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Engr. Uzzul Hoque</p>
          <p>Head of Utility · DBL Group</p>
        </div>
      </footer>
    </div>
  );
}
