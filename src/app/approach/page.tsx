import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { approachSteps } from "@/content/approach";

export const metadata: Metadata = {
  title: "Approach | Santa Services LLC",
  description:
    "How we work with clients: listen first, practical plans, and measured progress—from discovery through delivery.",
};

export default function ApproachPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section
          className="border-b border-ink-200 bg-gradient-to-b from-brand-50/80 to-white"
          aria-labelledby="approach-hero-heading"
        >
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-800">
              Approach
            </p>
            <h1
              id="approach-hero-heading"
              className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight text-ink-950 sm:text-5xl"
            >
              How we work with you
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-600">
              A consistent methodology—flexible enough for your industry and stage
              of growth. We combine structured thinking with pragmatic delivery so
              you see progress early and often.
            </p>
          </div>
        </section>

        <section
          className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
          aria-labelledby="principles-heading"
        >
          <h2
            id="principles-heading"
            className="sr-only"
          >
            Operating principles
          </h2>
          <ol className="grid gap-10 sm:grid-cols-3">
            {approachSteps.map((step, i) => (
              <li key={step.title} className="relative rounded-2xl border border-ink-200 bg-white p-8 shadow-sm">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-700 text-sm font-bold text-white"
                  aria-hidden
                >
                  {i + 1}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-ink-950">
                  {step.title}
                </h3>
                <p className="mt-3 text-ink-600 leading-relaxed">{step.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="border-t border-ink-200 bg-ink-50/80">
          <div className="mx-auto max-w-6xl px-4 py-14 text-center sm:px-6 lg:px-8">
            <p className="text-lg font-medium text-ink-800">
              Want to go deeper on a specific engagement model?
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/services"
                className="inline-flex rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-800"
              >
                View services
              </Link>
              <Link
                href="/contact"
                className="inline-flex rounded-full border border-ink-300 bg-white px-6 py-3 text-sm font-semibold text-ink-800 transition hover:border-ink-400"
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
