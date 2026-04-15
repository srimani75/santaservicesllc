import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ServicesCategoryNav } from "@/components/services-category-nav";

export const metadata: Metadata = {
  title: "Services | Santa Services LLC",
  description:
    "Boutique consulting across data, cloud, AI, and security—structured like your roadmap, delivered with hands-on execution.",
};

type Offering = {
  title: string;
  description: string;
};

type Pillar = {
  id: "genai" | "data" | "cloud" | "security";
  heading: string;
  intro: string;
  spotlight?: { title: string; body: string };
  offerings: Offering[];
};

const pillars: Pillar[] = [
  {
    id: "genai",
    heading: "Generative AI / Machine Learning",
    intro:
      "Machine learning and generative AI both learn from data, but their purposes differ. We help you choose the right path: predictive models and MLOps where accuracy matters, and GenAI where creation, summarization, or copilots unlock new workflows—without skipping governance.",
    spotlight: {
      title: "Machine learning operations (MLOps)",
      body: "Sustainable AI depends on reliable data and repeatable pipelines. We help you automate training, evaluation, and deployment so models stay trustworthy in production.",
    },
    offerings: [
      {
        title: "GenAI quickstart",
        description:
          "A focused engagement to move from idea to a working pilot: use-case framing, data readiness, guardrails, and a concrete implementation plan.",
      },
      {
        title: "Generative AI workshops",
        description:
          "One- to two-day working sessions that take a business problem from brainstorm to prioritized backlog with success metrics and owners.",
      },
      {
        title: "Agent-assisted engineering",
        description:
          "Practical patterns for your team: code review, testing, and delivery workflows that treat AI as a multiplier—not a shortcut around quality.",
      },
    ],
  },
  {
    id: "data",
    heading: "Data",
    intro:
      "Our data services are designed to be comprehensive and adaptable—so you get what fits your stack, your compliance posture, and how your teams actually work.",
    spotlight: {
      title: "Data migration & curation",
      body: "Moving and curating data is more than ETL: it is preserving meaning, quality, and lineage so analytics and AI stay credible over time.",
    },
    offerings: [
      {
        title: "Data platform foundation",
        description:
          "Reference architectures and implementation support for ingestion, storage, processing, and observability—built for operational effectiveness.",
      },
      {
        title: "Governance & catalog readiness",
        description:
          "Policies, ownership models, and tooling alignment so discovery, access, and auditability scale with your catalog—not against it.",
      },
      {
        title: "Data collaboration & sharing",
        description:
          "Design patterns for sharing with partners and internal teams: security, privacy, contracts, and utility balanced for real use cases.",
      },
    ],
  },
  {
    id: "cloud",
    heading: "Cloud",
    intro:
      "Cloud platforms are the foundation for fast, secure delivery at scale. We help you navigate platform decisions, migration, and engineering practices so teams ship with confidence.",
    spotlight: {
      title: "Platform engineering",
      body: "A well-designed internal platform reduces toil and standardizes the golden paths your engineers need—without stifling innovation.",
    },
    offerings: [
      {
        title: "Cloud migration",
        description:
          "Planning and execution for workloads, applications, and data—prioritized by risk, cost, and business value.",
      },
      {
        title: "Application modernization",
        description:
          "From strangler patterns to containerization: pragmatic steps off legacy constraints toward maintainable, observable systems.",
      },
      {
        title: "Software architecture & engineering",
        description:
          "Hands-on design and build support for services, APIs, and integration patterns aligned to your reliability and security targets.",
      },
    ],
  },
  {
    id: "security",
    heading: "Security",
    intro:
      "Security belongs in the lifecycle—not as a late gate. We help you embed controls, visibility, and culture alongside cloud and data programs.",
    spotlight: {
      title: "SDLC hardening",
      body: "Shift-left practices, pipeline checks, and accountability so security is part of everyday delivery—not an emergency at release time.",
    },
    offerings: [
      {
        title: "Cloud security posture",
        description:
          "CSPM-aligned assessments, control mapping, and remediation planning across accounts, identities, and data paths.",
      },
      {
        title: "Runtime & application security",
        description:
          "Threat modeling support, hardening patterns, and monitoring strategy for workloads and APIs in production.",
      },
      {
        title: "Governance, risk & compliance",
        description:
          "Lightweight governance that scales: standards, guardrails, and evidence collection that teams can actually follow.",
      },
    ],
  },
];

function ServiceCard({ offering }: { offering: Offering }) {
  return (
    <article className="flex flex-col rounded-2xl border border-ink-200 bg-white p-6 shadow-sm transition hover:border-brand-200 hover:shadow-md">
      <h3 className="font-display text-lg font-semibold text-ink-950">
        {offering.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-600">
        {offering.description}
      </p>
      <Link
        href="/contact"
        className="mt-6 inline-flex text-sm font-semibold text-brand-700 transition hover:text-brand-900"
      >
        Read more
        <span className="sr-only"> about {offering.title}</span>
      </Link>
    </article>
  );
}

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section
          className="relative overflow-hidden border-b border-ink-200 bg-gradient-to-b from-brand-50/80 to-white"
          aria-labelledby="services-hero-heading"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(12,138,233,0.12),transparent)]" />
          <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-800">
              Services
            </p>
            <h1
              id="services-hero-heading"
              className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight text-ink-950 sm:text-5xl"
            >
              Supporting your cloud, data, and AI journey
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-600">
              We offer services for both enterprises and growing teams—centered on
              clear outcomes, pragmatic delivery, and the flexibility to adapt as
              your priorities shift.
            </p>
          </div>
        </section>

        <ServicesCategoryNav />

        {pillars.map((pillar, index) => (
          <section
            key={pillar.id}
            id={pillar.id}
            className={`scroll-mt-36 border-b border-ink-200 ${
              index % 2 === 1 ? "bg-ink-50/50" : "bg-white"
            }`}
            aria-labelledby={`${pillar.id}-heading`}
          >
            <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
              <h2
                id={`${pillar.id}-heading`}
                className="font-display text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl"
              >
                {pillar.heading}
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ink-600">
                {pillar.intro}
              </p>

              <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {pillar.offerings.map((o) => (
                  <ServiceCard key={o.title} offering={o} />
                ))}
              </div>

              {pillar.spotlight && (
                <div className="mt-14 rounded-2xl border border-ink-200 bg-white/80 p-8 shadow-sm">
                  <h3 className="font-display text-xl font-semibold text-ink-950">
                    {pillar.spotlight.title}
                  </h3>
                  <p className="mt-3 max-w-3xl text-ink-600 leading-relaxed">
                    {pillar.spotlight.body}
                  </p>
                </div>
              )}
            </div>
          </section>
        ))}

        <section
          className="border-b border-ink-200 bg-white"
          aria-labelledby="custom-heading"
        >
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-ink-200 bg-gradient-to-br from-brand-50 to-white px-8 py-12 text-center sm:px-12">
              <h2
                id="custom-heading"
                className="font-display text-2xl font-semibold text-ink-950 sm:text-3xl"
              >
                Need a custom solution?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-ink-600">
                You are not limited to packaged offerings. We design engagements
                around your constraints, timeline, and stakeholders.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-brand-700 px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
              >
                Contact us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
