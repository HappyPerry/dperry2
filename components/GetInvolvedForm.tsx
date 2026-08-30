"use client";

import { FormEvent, useState } from "react";

export default function GetInvolvedForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const payload = Object.fromEntries(form.entries());

    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      if (!response.ok) throw new Error(result.error || "Unable to submit inquiry.");

      formElement.reset();
      setStatus({
        type: "success",
        message: "Thank you. Your inquiry has been received by the D’Sean Perry Foundation.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Unable to submit inquiry.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const fieldClass =
    "w-full border border-white/15 bg-white/[0.04] px-4 py-3.5 text-white outline-none transition-colors placeholder:text-white/30 focus:border-uva-orange";

  return (
    <form onSubmit={handleSubmit} className="border border-white/10 bg-navy-800/60 p-6 sm:p-8 lg:p-10">
      <div className="mb-8">
        <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.25em] text-uva-orange">
          Start a conversation
        </span>
        <h2 className="font-serif text-3xl text-white sm:text-4xl">Tell us how you want to help</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/55">
          Submit your information securely and the foundation team can review it in their Sanity portal.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm text-white/70">
          <span className="mb-2 block">Name *</span>
          <input className={fieldClass} name="name" autoComplete="name" required />
        </label>
        <label className="text-sm text-white/70">
          <span className="mb-2 block">Email *</span>
          <input className={fieldClass} name="email" type="email" autoComplete="email" required />
        </label>
        <label className="text-sm text-white/70">
          <span className="mb-2 block">Phone</span>
          <input className={fieldClass} name="phone" type="tel" autoComplete="tel" />
        </label>
        <label className="text-sm text-white/70">
          <span className="mb-2 block">I&apos;m interested in *</span>
          <select className={fieldClass} name="interest" defaultValue="" required>
            <option value="" disabled className="text-navy-900">Choose an opportunity</option>
            <option className="text-navy-900">Volunteering</option>
            <option className="text-navy-900">Sponsorship or partnership</option>
            <option className="text-navy-900">Youth athletics and mentorship</option>
            <option className="text-navy-900">Events and community drives</option>
            <option className="text-navy-900">Scholarships and education</option>
            <option className="text-navy-900">Something else</option>
          </select>
        </label>
      </div>

      <label className="mt-5 block text-sm text-white/70">
        <span className="mb-2 block">How would you like to help? *</span>
        <textarea className={`${fieldClass} min-h-36 resize-y`} name="message" required />
      </label>

      <label className="mt-5 flex items-start gap-3 text-xs leading-relaxed text-white/50">
        <input type="checkbox" required className="mt-1 accent-uva-orange" />
        <span>I consent to the foundation storing this information so its team can respond to my inquiry.</span>
      </label>

      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
        <button type="submit" disabled={isSubmitting} className="btn-primary min-w-48 px-8 py-4 disabled:opacity-60">
          <span>{isSubmitting ? "Sending…" : "Send Inquiry"}</span>
        </button>
        <p className="text-xs leading-relaxed text-white/40">Your information is used only to respond to this inquiry.</p>
      </div>

      {status && (
        <p
          role="status"
          className={`mt-5 border px-4 py-3 text-sm ${
            status.type === "success"
              ? "border-green-400/30 bg-green-400/10 text-green-200"
              : "border-red-400/30 bg-red-400/10 text-red-200"
          }`}
        >
          {status.message}
        </p>
      )}
    </form>
  );
}
