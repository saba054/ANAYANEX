"use client";

import { useState } from "react";
import Navigation from "../components/Navigation";
import FooterSection from "../components/FooterSection";

export default function JoinPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitted(false);
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const position = String(data.get("position") || "").trim();
    const resume = data.get("resume") as File | null;
    const phone = String(data.get("phone") || "").trim();
    const linkedin = String(data.get("linkedin") || "").trim();
    const portfolio = String(data.get("portfolio") || "").trim();

    if (!name || !email || !position || !resume || !phone || !linkedin || !portfolio) {
      setError("Please fill in all required fields.");
      setSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/join", {
        method: "POST",
        body: data,
      });
      const json = await res.json();

      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Submission failed");
      }

      setSubmitted(true);
      form.reset();
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setError(message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Navigation />
      <div className="pt-20">
        <div className="px-4 sm:px-6 lg:px-8 pt-10 pb-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-10">
              <h1 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)]">Join ANAYANEX</h1>
              <p className="text-[var(--foreground)]/80 mt-3 text-sm sm:text-base">
                Apply to join our team. We&apos;re looking for passionate people who love building great products.
              </p>
            </div>

            {submitted && (
              <div className="mb-6 sm:mb-8 rounded-xl border border-[var(--foreground)]/20 bg-[var(--background)]/70 p-4 sm:p-5 text-[var(--foreground)]">
                <p className="font-semibold">Thank you for applying!</p>
                <p className="text-[var(--foreground)]/80 text-sm sm:text-base">
                  Your application has been received. Our team will reach out to you if your profile matches our requirements.
                </p>
              </div>
            )}

            {error && (
              <div className="mb-6 sm:mb-8 rounded-xl border border-red-500/40 bg-red-500/10 p-4 sm:p-5 text-red-600 dark:text-red-400 text-sm sm:text-base">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[var(--foreground)]">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-2 block w-full rounded-lg border border-[var(--foreground)]/20 bg-[var(--background)] px-3 py-2 text-[var(--foreground)] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[var(--foreground)]/30"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--foreground)]">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-2 block w-full rounded-lg border border-[var(--foreground)]/20 bg-[var(--background)] px-3 py-2 text-[var(--foreground)] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[var(--foreground)]/30"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[var(--foreground)]">Phone</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    className="mt-2 block w-full rounded-lg border border-[var(--foreground)]/20 bg-[var(--background)] px-3 py-2 text-[var(--foreground)] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[var(--foreground)]/30"
                  />
                </div>

                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-[var(--foreground)]">Position</label>
                  <select
                    id="position"
                    name="position"
                    required
                    className="mt-2 block w-full rounded-lg border border-[var(--foreground)]/20 bg-[var(--background)] px-3 py-2 text-[var(--foreground)] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[var(--foreground)]/30"
                  >
                    <option value="">Select a position</option>
                    <option>Frontend Developer</option>
                    <option>Backend Developer</option>
                    <option>Full Stack Developer</option>
                    <option>UI/UX Designer</option>
                    <option>Project Manager</option>
                    <option>QA Engineer</option>
                    <option>DevOps Engineer</option>
                    <option>Data Analyst</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="linkedin" className="block text-sm font-medium text-[var(--foreground)]">LinkedIn URL</label>
                  <input
                    id="linkedin"
                    name="linkedin"
                    type="url"
                    required
                    className="mt-2 block w-full rounded-lg border border-[var(--foreground)]/20 bg-[var(--background)] px-3 py-2 text-[var(--foreground)] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[var(--foreground)]/30"
                  />
                </div>

                <div>
                  <label htmlFor="portfolio" className="block text-sm font-medium text-[var(--foreground)]">Portfolio URL</label>
                  <input
                    id="portfolio"
                    name="portfolio"
                    type="url"
                    required
                    className="mt-2 block w-full rounded-lg border border-[var(--foreground)]/20 bg-[var(--background)] px-3 py-2 text-[var(--foreground)] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[var(--foreground)]/30"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="resume" className="block text-sm font-medium text-[var(--foreground)]">Resume</label>
                  <input
                    id="resume"
                    name="resume"
                    type="file"
                    required
                    accept=".pdf,.doc,.docx"
                    className="mt-2 block w-full rounded-lg border border-[var(--foreground)]/20 bg-[var(--background)] px-3 py-2 text-[var(--foreground)] text-sm sm:text-base file:mr-4 file:rounded-md file:border-0 file:bg-[var(--foreground)] file:px-3 file:py-2 file:text-[var(--background)] hover:file:bg-[var(--foreground)]/90"
                  />
                </div>

                <div>
                  <label htmlFor="coverLetter" className="block text-sm font-medium text-[var(--foreground)]">Cover Letter (optional)</label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    rows={4}
                    className="mt-2 block w-full rounded-lg border border-[var(--foreground)]/20 bg-[var(--background)] px-3 py-2 text-[var(--foreground)] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[var(--foreground)]/30"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <button
                  type="submit"
                  disabled={submitting}
                  aria-busy={submitting}
                  className="inline-flex justify-center rounded-full bg-[var(--foreground)] px-5 py-2.5 text-[var(--background)] text-sm sm:text-base font-semibold transition-colors hover:bg-[var(--foreground)]/90 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? "Submitting..." : "Submit Application"}
                </button>
                {/* Removed misplaced FooterSection inside button row */}
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Footer placed inside the root container to avoid parse errors */}
      <div className="pt-20">
        <FooterSection />
      </div>
    </div>
  );
}