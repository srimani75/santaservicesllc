import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { caseStudies } from "@/content/case-studies";

export const metadata: Metadata = {
  title: "Case Studies | Santa Services LLC",
  description:
    "Stories from client work—cloud, data, AI, and security engagements with tangible outcomes.",
};

function formatDate(iso: string) {
  const d = new Date(iso + "T12:00:00");
  return d.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function CaseStudiesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section
          className="border-b border-ink-200 bg-gradient-to-b from-brand-50/80 to-white"
          aria-labelledby="case-studies-heading"
        >
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-800">
              Case studies
            </p>
            <h1
              id="case-studies-heading"
              className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight text-ink-950 sm:text-5xl"
            >
              Case studies
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-600">
              Dive into these stories to see how we have partnered with clients to
              overcome obstacles, implement pragmatic strategies, and achieve
              measurable results—patterned after the depth you see on leading
              boutique firms such as{" "}
              <a
                href="https://rearc.io/case-studies"
                className="font-medium text-brand-800 underline-offset-2 hover:underline"
              >
                Rearc&apos;s case studies
              </a>
              .
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {caseStudies.map((study) => (
              <li key={study.slug}>
                <article className="flex h-full flex-col rounded-2xl border border-ink-200 bg-white p-6 shadow-sm transition hover:border-brand-200 hover:shadow-md sm:p-8">
                  <div className="flex flex-wrap gap-2">
                    {study.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-ink-100 px-2.5 py-0.5 text-xs font-medium text-ink-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="mt-4 text-xs font-medium uppercase tracking-wide text-ink-500">
                    {formatDate(study.date)}
                    <span className="mx-1.5" aria-hidden>
                      ·
                    </span>
                    Santa Services
                  </p>
                  <h2 className="mt-2 font-display text-xl font-semibold tracking-tight text-ink-950 sm:text-2xl">
                    <Link
                      href={`/case-studies/${study.slug}`}
                      className="transition hover:text-brand-800"
                    >
                      {study.title}
                    </Link>
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-600">
                    {study.excerpt}
                  </p>
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="mt-6 inline-flex text-sm font-semibold text-brand-700 hover:text-brand-900"
                  >
                    Read more
                    <span className="sr-only"> about {study.title}</span>
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        </section>

        <section className="border-t border-ink-200 bg-ink-50/80">
          <div className="mx-auto max-w-6xl px-4 py-14 text-center sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-semibold text-ink-950 sm:text-3xl">
              Ready to talk about your next project?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-ink-600">
              Share your context—we will evaluate and respond within two business
              days.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-brand-700 px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-800"
            >
              Let&apos;s talk
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
