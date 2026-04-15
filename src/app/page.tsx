import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { approachSteps } from "@/content/approach";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section
          className="relative overflow-hidden border-b border-ink-200 bg-gradient-to-b from-brand-50/80 to-white"
          aria-labelledby="hero-heading"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(12,138,233,0.15),transparent)]" />
          <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-800">
              Professional services & consulting
            </p>
            <h1
              id="hero-heading"
              className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight text-ink-950 sm:text-5xl lg:text-6xl"
            >
              Clarity, execution, and outcomes for your next chapter.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-600">
              Santa Services LLC partners with leaders to solve complex problems
              with structured thinking, disciplined delivery, and a focus on what
              matters most to your organization.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
              >
                Schedule a conversation
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-ink-300 bg-white px-6 py-3 text-sm font-semibold text-ink-800 transition hover:border-ink-400 hover:bg-ink-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
              >
                Explore services
              </Link>
            </div>
          </div>
        </section>

        <section
          className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
          aria-labelledby="services-heading"
        >
          <div className="max-w-2xl">
            <h2
              id="services-heading"
              className="font-display text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl"
            >
              What we help you deliver
            </h2>
            <p className="mt-4 text-lg text-ink-600">
              Engagements across GenAI/ML, data, cloud, and security—scoped to your
              goals on the dedicated services pages.
            </p>
          </div>
          <ul className="mt-8 flex flex-wrap gap-3 text-sm font-semibold">
            <li>
              <Link
                href="/services#genai"
                className="inline-flex rounded-full border border-ink-200 bg-white px-4 py-2 text-ink-700 transition hover:border-brand-300 hover:bg-brand-50 hover:text-brand-900"
              >
                GenAI / ML
              </Link>
            </li>
            <li>
              <Link
                href="/services#data"
                className="inline-flex rounded-full border border-ink-200 bg-white px-4 py-2 text-ink-700 transition hover:border-brand-300 hover:bg-brand-50 hover:text-brand-900"
              >
                Data
              </Link>
            </li>
            <li>
              <Link
                href="/services#cloud"
                className="inline-flex rounded-full border border-ink-200 bg-white px-4 py-2 text-ink-700 transition hover:border-brand-300 hover:bg-brand-50 hover:text-brand-900"
              >
                Cloud
              </Link>
            </li>
            <li>
              <Link
                href="/services#security"
                className="inline-flex rounded-full border border-ink-200 bg-white px-4 py-2 text-ink-700 transition hover:border-brand-300 hover:bg-brand-50 hover:text-brand-900"
              >
                Security
              </Link>
            </li>
          </ul>
          <p className="mt-10">
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
            >
              View all services
            </Link>
          </p>
        </section>

        <section
          className="border-y border-ink-200 bg-ink-50/80"
          aria-labelledby="approach-heading"
        >
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
            <h2
              id="approach-heading"
              className="font-display text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl"
            >
              How we work
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-ink-600">
              A consistent methodology—see the full approach on its own page.
            </p>
            <ol className="mt-10 grid gap-6 sm:grid-cols-3">
              {approachSteps.map((step, i) => (
                <li
                  key={step.title}
                  className="rounded-2xl border border-ink-200 bg-white p-6 shadow-sm"
                >
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-700 text-sm font-bold text-white"
                    aria-hidden
                  >
                    {i + 1}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold text-ink-950">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-600 leading-relaxed">
                    {step.body}
                  </p>
                </li>
              ))}
            </ol>
            <p className="mt-10">
              <Link
                href="/approach"
                className="text-sm font-semibold text-brand-800 hover:underline"
              >
                Read more about our approach →
              </Link>
            </p>
          </div>
        </section>

        <section
          className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8"
          aria-labelledby="case-studies-teaser-heading"
        >
          <h2
            id="case-studies-teaser-heading"
            className="font-display text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl"
          >
            Case studies
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-ink-600">
            Explore how we have helped organizations with cloud, data, AI, and
            security programs—each with context, tags, and deeper write-ups.
          </p>
          <p className="mt-8">
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center rounded-full border border-ink-300 bg-white px-6 py-3 text-sm font-semibold text-ink-800 transition hover:border-ink-400 hover:bg-ink-50"
            >
              Browse case studies
            </Link>
          </p>
        </section>

        <section className="border-t border-ink-200 bg-ink-50/80">
          <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-semibold text-ink-950 sm:text-3xl">
              Ready to talk?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-ink-600">
              Use the contact page to send a message or reach us by email.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-brand-700 px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-800"
            >
              Get in touch
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
