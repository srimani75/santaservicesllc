"use client";

import { useCallback, useState } from "react";

type Props = {
  contactEmail: string;
  /** Omit top margin when form sits inside a padded hero/panel */
  compact?: boolean;
};

function buildMailto(contactEmail: string, subject: string, body: string) {
  const params = new URLSearchParams({
    subject: subject.trim() || "(no subject)",
    body: body.trim(),
  });
  return `mailto:${contactEmail}?${params.toString()}`;
}

export function ContactForm({ contactEmail, compact }: Props) {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [replyTo, setReplyTo] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const openMailto = useCallback(() => {
    const url = buildMailto(contactEmail, subject, message);
    window.location.href = url;
  }, [contactEmail, subject, message]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage(null);
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subject,
          body: message,
          replyTo: replyTo.trim(),
          website: honeypot,
        }),
      });

      const data = (await res.json().catch(() => ({}))) as {
        error?: string;
        message?: string;
      };

      if (res.status === 503 && data.error === "email_not_configured") {
        openMailto();
        setStatus("idle");
        return;
      }

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(
          data.error || data.message || "Something went wrong. Please try again.",
        );
        return;
      }

      setStatus("success");
      setSubject("");
      setMessage("");
      setReplyTo("");
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Check your connection or use email below.");
    }
  }

  return (
    <div
      className={`mx-auto w-full max-w-lg text-left ${compact ? "" : "mt-10"}`}
    >
      {status === "success" ? (
        <div
          className="rounded-2xl border border-brand-300 bg-brand-900/40 px-6 py-5 text-center text-brand-50"
          role="status"
        >
          <p className="font-semibold text-white">Message sent</p>
          <p className="mt-2 text-sm text-brand-100">
            Thank you—we will get back to you soon.
          </p>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-4 text-sm font-semibold text-white underline underline-offset-2 hover:text-brand-100"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website">Company website</label>
            <input
              id="website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              className="hidden"
            />
          </div>

          <div>
            <label
              htmlFor="replyTo"
              className="mb-1.5 block text-sm font-medium text-brand-100"
            >
              Your email <span className="text-brand-300">(optional)</span>
            </label>
            <input
              id="replyTo"
              name="replyTo"
              type="email"
              autoComplete="email"
              value={replyTo}
              onChange={(e) => setReplyTo(e.target.value)}
              placeholder="you@company.com"
              className="w-full rounded-xl border border-brand-700/80 bg-brand-900/30 px-4 py-3 text-sm text-white placeholder:text-brand-400 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-400/40"
            />
            <p className="mt-1 text-xs text-brand-300">
              So we can reply directly. Leave blank if you prefer.
            </p>
          </div>

          <div>
            <label
              htmlFor="subject"
              className="mb-1.5 block text-sm font-medium text-brand-100"
            >
              Subject <span className="text-red-300">*</span>
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              required
              maxLength={200}
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="What is this about?"
              className="w-full rounded-xl border border-brand-700/80 bg-brand-900/30 px-4 py-3 text-sm text-white placeholder:text-brand-400 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-400/40"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-1.5 block text-sm font-medium text-brand-100"
            >
              Message <span className="text-red-300">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              maxLength={12000}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us about your goals, timeline, and anything else that helps."
              className="w-full resize-y rounded-xl border border-brand-700/80 bg-brand-900/30 px-4 py-3 text-sm text-white placeholder:text-brand-400 focus:border-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-400/40"
            />
          </div>

          {status === "error" && errorMessage && (
            <p className="text-sm text-red-300" role="alert">
              {errorMessage}
            </p>
          )}

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-brand-950 shadow-sm transition hover:bg-brand-50 disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {status === "loading" ? "Sending…" : "Send message"}
            </button>
            <button
              type="button"
              onClick={openMailto}
              className="text-center text-sm font-medium text-brand-200 underline-offset-2 hover:text-white hover:underline"
            >
              Open in email app instead
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
