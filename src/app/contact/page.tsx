// Top-level imports and metadata remain
import React from "react";

export const metadata = {
  title: "Contact | AnayaNex",
  description:
    "Get in touch with AnayaNex. Send us a message or reach out via email or phone.",
};

import Navigation from "../components/Navigation";
import FooterSection from "../components/FooterSection";

// ContactPage component
export default async function ContactPage({
  searchParams,
}: {
  searchParams?: Promise<{ success?: string }>;
}) {
  const params = (await searchParams) ?? {};
  const success = params.success === "1";

  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <Navigation />

      {/* Main content */}
      <main className="flex-1 bg-[var(--background)] pt-30">
        {/* Success banner */}
        {success && (
          <div className="mx-auto mb-6 max-w-4xl rounded-lg border border-[var(--foreground)]/30 bg-[var(--foreground)]/10 px-4 py-3 text-center text-[var(--foreground)]">
            ✅ Thanks! Your message has been sent. We’ll get back to you soon.
          </div>
        )}

        <section className="py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Heading */}
            <div className="mb-8 sm:mb-10">
              <h1 className="text-3xl font-bold tracking-tight text-[var(--foreground)] sm:text-4xl">
                Contact Us
              </h1>
              <p className="mt-2 text-[var(--foreground)]/80">
                Have questions or want to work together? Send us a message and
                we’ll get back to you.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {/* Contact info */}
              <div className="rounded-2xl border border-[var(--foreground)]/20 bg-[var(--background)]/60 p-6 sm:p-8">
                <h2 className="text-xl font-semibold text-[var(--foreground)]">
                  Reach us directly
                </h2>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--background)]/40 text-[var(--foreground)]">
                      ✉️
                    </span>
                    <a
                      href="mailto:contact@anayanex.com"
                      className="text-[var(--foreground)] underline-offset-2 hover:opacity-80"
                    >
                      contact@anayanex.com
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--background)]/40 text-[var(--foreground)]">
                      📞
                    </span>
                    <a
                      href="tel:+10000000000"
                      className="text-[var(--foreground)] underline-offset-2 hover:opacity-80"
                    >
                      +1 (000) 000-0000
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--background)]/40 text-[var(--foreground)]">
                      📍
                    </span>
                    <span className="text-[var(--foreground)]/80">
                      Worldwide (Remote-friendly)
                    </span>
                  </li>
                </ul>

                <div className="mt-6 rounded-xl border border-[var(--foreground)]/10 bg-[var(--background)]/40 p-4 text-sm text-[var(--foreground)]/80">
                  We typically respond within 1–2 business days.
                </div>
              </div>

              {/* Contact form */}
              <div className="lg:col-span-2">
                <div className="rounded-2xl border border-[var(--foreground)]/20 bg-[var(--background)]/60 p-6 sm:p-8">
                  <h2 className="text-xl font-semibold text-[var(--foreground)]">
                    Send a message
                  </h2>
                  <p className="mt-1 text-sm text-[var(--foreground)]/80">
                    Fill in the form and we’ll get back to you shortly.
                  </p>

                  <form
                    className="mt-6 space-y-6"
                    action="/api/contact"
                    method="post"
                    noValidate
                  >
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {/* Full name */}
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-[var(--foreground)]"
                        >
                          Full name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          className="mt-2 w-full rounded-lg border border-[var(--foreground)]/20 bg-[var(--background)]/80 px-3 py-2 text-[var(--foreground)] placeholder-[var(--foreground)]/40 outline-none ring-2 ring-transparent focus:border-[var(--foreground)]/30 focus:ring-[var(--foreground)]/20"
                          placeholder="Jane Doe"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-[var(--foreground)]"
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          className="mt-2 w-full rounded-lg border border-[var(--foreground)]/20 bg-[var(--background)]/80 px-3 py-2 text-[var(--foreground)] placeholder-[var(--foreground)]/40 outline-none ring-2 ring-transparent focus:border-[var(--foreground)]/30 focus:ring-[var(--foreground)]/20"
                          placeholder="jane@example.com"
                        />
                      </div>

                      {/* Subject */}
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="subject"
                          className="block text-sm font-medium text-[var(--foreground)]"
                        >
                          Subject
                        </label>
                        <input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          className="mt-2 w-full rounded-lg border border-[var(--foreground)]/20 bg-[var(--background)]/80 px-3 py-2 text-[var(--foreground)] placeholder-[var(--foreground)]/40 outline-none ring-2 ring-transparent focus:border-[var(--foreground)]/30 focus:ring-[var(--foreground)]/20"
                          placeholder="How can we help?"
                        />
                      </div>

                      {/* Message */}
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-[var(--foreground)]"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={6}
                          required
                          className="mt-2 w-full resize-y rounded-lg border border-[var(--foreground)]/20 bg-[var(--background)]/80 px-3 py-2 text-[var(--foreground)] placeholder-[var(--foreground)]/40 outline-none ring-2 ring-transparent focus:border-[var(--foreground)]/30 focus:ring-[var(--foreground)]/20"
                          placeholder="Type your message here..."
                        />
                      </div>
                    </div>

                    {/* Submit */}
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                      <button
                        type="submit"
                        className="inline-flex w-full items-center justify-center rounded-lg bg-[var(--foreground)] px-4 py-2.5 text-sm font-semibold text-[var(--background)] shadow-sm transition hover:opacity-90 sm:w-auto"
                      >
                        Send message
                      </button>
                      <p className="text-sm text-[var(--foreground)]/60">
                        We’ll never share your information with anyone.
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <FooterSection />
      <div className="border-t border-[var(--foreground)]/20 px-12 py-4">
        <div className="flex flex-col items-center justify-between space-y-4 text-sm text-[var(--foreground)]/60 md:flex-row md:space-y-0">
          <div>© 2024 ANAYANEX. All Rights Reserved</div>
          <div className="flex items-center space-x-6">
            <a
              href="#"
              className="transition-colors duration-300 hover:text-[var(--foreground)]"
            >
              Terms & Conditions
            </a>
            <span className="text-[var(--foreground)]/40">|</span>
            <a
              href="#"
              className="transition-colors duration-300 hover:text-[var(--foreground)]"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
