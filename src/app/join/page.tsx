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
    } catch (err: any) {
      setError(err?.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        {/* Your existing join page content (form, headings, etc.) */}
        {/* Keep everything as-is; just wrapped with padding to avoid navbar overlap */}
        {/* Existing JSX follows */}
        <div className="pt-24 pb-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-4xl font-bold text-[var(--foreground)]">Join ANAYANEX</h1>
              <p className="text-[var(--foreground)]/80 mt-3">
                Apply to join our team. We&apos;re looking for passionate people who love building great products.
              </p>
            </div>

            {submitted && (
              <div className="mb-8 rounded-xl border border-[var(--foreground)]/20 bg-[var(--background)]/70 p-4 text-[var(--foreground)]">
                <p className="font-semibold">Thank you for applying!</p>
                <p className="text-[var(--foreground)]/80">
                  Your application has been received. Our team will reach out to you if your profile matches our requirements.
                </p>
              </div>
            )}
            {error && (
              <div className="mb-8 rounded-xl border border-red-500/40 bg-red-500/10 p-4 text-red-600 dark:text-red-400">
                {error}
              </div>
            )}
            <form
              onSubmit={handleSubmit}
              encType="multipart/form-data"
              className="rounded-2xl border border-[var(--foreground)]/20 bg-[var(--background)]/60 p-6 shadow-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[var(--foreground)]">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-2 w-full rounded-lg border border-[var(--foreground)]/20 bg-[var(--background)]/80 px-3 py-2 text-[var(--foreground)] placeholder-[var(--foreground)]/40 focus:outline-none focus:ring-2 focus:ring-[var(--foreground)]/30"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--foreground)]">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-2 w-full rounded-lg border border-[var(--foreground)]/20 bg-[var(--background)]/80 px-3 py-2 text-[var(--foreground)] placeholder-[var(--foreground)]/40 focus:outline-none focus:ring-2 focus:ring-[var(--foreground)]/30"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[var(--foreground)]">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="mt-2 w-full rounded-lg border border-[var(--foreground)]/20 bg-[var(--background)]/80 px-3 py-2 text-[var(--foreground)] placeholder-[var(--foreground)]/40 focus:outline-none focus:ring-2 focus:ring-[var(--foreground)]/30"
                    placeholder="+92 555 000 123"
                  />
                </div>

                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-[var(--foreground)]">
                    Position
                  </label>
                  <select
                    id="position"
                    name="position"
                    required
                    className="mt-2 w-full rounded-lg border border-[var(--foreground)]/20 bg-[var(--background)]/80 px-3 py-2 text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--foreground)]/30"
                  >
                    <option value="">Select a role</option>
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
                  <label htmlFor="linkedin" className="block text-sm font-medium text-[var(--foreground)]">
                    LinkedIn URL
                  </label>
                  <input
                    id="linkedin"
                    name="linkedin"
                    type="url"
                    className="mt-2 w-full rounded-lg border border-[var(--foreground)]/20 bg-[var(--background)]/80 px-3 py-2 text-[var(--foreground)] placeholder-[var(--foreground)]/40 focus:outline-none focus:ring-2 focus:ring-[var(--foreground)]/30"
                    placeholder="https://linkedin.com/in/your-profile"
                  />
                </div>

                <div>
                  <label htmlFor="portfolio" className="block text-sm font-medium text-[var(--foreground)]">
                    Portfolio URL 
                  </label>
                  <input
                    id="portfolio"
                    name="portfolio"
                    type="url"
                    className="mt-2 w-full rounded-lg border border-[var(--foreground)]/20 bg-[var(--background)]/80 px-3 py-2 text-[var(--foreground)] placeholder-[var(--foreground)]/40 focus:outline-none focus:ring-2 focus:ring-[var(--foreground)]/30"
                    placeholder="https://your-portfolio.com"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="resume" className="block text-sm font-medium text-[var(--foreground)]">
                    Resume (PDF, DOC, DOCX)
                  </label>
                  <input
                    id="resume"
                    name="resume"
                    type="file"
                    required
                    accept=".pdf,.doc,.docx"
                    className="mt-2 w-full rounded-lg border border-[var(--foreground)]/20 bg-[var(--background)]/80 px-3 py-2 text-[var(--foreground)] file:bg-[var(--foreground)] file:text-[var(--background)] file:border-0 file:px-4 file:py-2 file:rounded-md"
                  />
                </div>

                <div className="md:col-span-2">
                  <label htmlFor="coverLetter" className="block text-sm font-medium text-[var(--foreground)]">
                    Cover Letter (optional)
                  </label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    rows={6}
                    className="mt-2 w-full rounded-lg border border-[var(--foreground)]/20 bg-[var(--background)]/80 px-3 py-2 text-[var(--foreground)] placeholder-[var(--foreground)]/40 focus:outline-none focus:ring-2 focus:ring-[var(--foreground)]/30"
                    placeholder="Tell us why you'd be a great fit at ANAYANEX..."
                  />
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between">
                <p className="text-[var(--foreground)]/70 text-sm">
                  By submitting, you agree to our processing of your data for recruitment purposes.
                </p>
                <button
                  type="submit"
                  disabled={submitting}
                  className="bg-[var(--foreground)] text-[var(--background)] px-6 py-2 rounded-full font-semibold hover:opacity-90 transition-colors disabled:opacity-60"
                >
                  {submitting ? "Submitting..." : "Submit Application"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="pt-20">
        <FooterSection />
      </div>
    </div>
  );
}