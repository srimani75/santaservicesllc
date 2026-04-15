import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ContactForm } from "@/components/contact-form";
import { CONTACT_EMAIL } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact | Santa Services LLC",
  description:
    "Reach Santa Services LLC—tell us about your goals and we will respond promptly.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section
          className="border-b border-ink-200 bg-gradient-to-b from-brand-50/80 to-white"
          aria-labelledby="contact-hero-heading"
        >
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-800">
              Contact
            </p>
            <h1
              id="contact-hero-heading"
              className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight text-ink-950 sm:text-5xl"
            >
              Ready to talk about your next project?
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-600">
              Tell us more about your needs. We typically respond within two
              business days, then schedule a short kickoff conversation to align
              on scope and next steps.
            </p>
          </div>
        </section>

        <section
          className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8"
          aria-labelledby="form-heading"
        >
          <h2 id="form-heading" className="sr-only">
            Contact form
          </h2>
          <div className="mx-auto max-w-3xl rounded-3xl bg-brand-950 px-6 py-12 sm:px-12 sm:py-14">
            <ContactForm contactEmail={CONTACT_EMAIL} compact />
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-ink-500">
            Prefer email directly?{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-medium text-brand-700 hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
