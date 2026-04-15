import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { caseStudies, getCaseStudy } from "@/content/case-studies";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

function formatDate(iso: string) {
  const d = new Date(iso + "T12:00:00");
  return d.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return { title: "Case study | Santa Services LLC" };
  return {
    title: `${study.title} | Santa Services LLC`,
    description: study.excerpt,
  };
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <>
      <SiteHeader />
      <main>
        <article>
          <header className="border-b border-ink-200 bg-gradient-to-b from-brand-50/80 to-white">
            <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
              <p className="text-sm font-medium text-ink-500">
                <Link href="/case-studies" className="text-brand-800 hover:underline">
                  Case studies
                </Link>
                <span className="mx-2" aria-hidden>
                  /
                </span>
                <time dateTime={study.date}>{formatDate(study.date)}</time>
              </p>
              <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl lg:text-5xl">
                {study.title}
              </h1>
              <ul className="mt-6 flex flex-wrap gap-2">
                {study.tags.map((tag) => (
                  <li key={tag}>
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-ink-700 ring-1 ring-ink-200">
                      {tag}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </header>
          <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
            <p className="text-lg leading-relaxed text-ink-700">{study.excerpt}</p>
            <div className="mt-10 space-y-6 text-ink-600 leading-relaxed">
              {study.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            <div className="mt-12 flex flex-wrap gap-4 border-t border-ink-200 pt-10">
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-800"
              >
                Discuss a similar engagement
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex rounded-full border border-ink-300 bg-white px-6 py-3 text-sm font-semibold text-ink-800 transition hover:border-ink-400"
              >
                All case studies
              </Link>
            </div>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
