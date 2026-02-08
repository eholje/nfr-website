"use client";

import { PageHero } from "@/components/PageHero";
import { useState } from "react";
import type { FormEvent } from "react";

export default function Kontakt() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <PageHero
        title="Kontakt oss"
        subtitle="Ta gjerne kontakt med spørsmål eller henvendelser"
        breadcrumb={[{ label: "Kontakt", href: "/kontakt" }]}
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact form */}
            <div>
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <svg className="w-12 h-12 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <h2 className="text-2xl font-bold mb-2">Takk for din henvendelse!</h2>
                  <p className="text-nfr-muted">Vi tar kontakt med deg så snart som mulig.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-nfr-dark mb-2">
                      Navn
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-nfr-body focus:border-nfr-navy focus:ring-2 focus:ring-nfr-navy/20 outline-none transition-all"
                      placeholder="Ditt fulle navn"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-nfr-dark mb-2">
                      E-post
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-nfr-body focus:border-nfr-navy focus:ring-2 focus:ring-nfr-navy/20 outline-none transition-all"
                      placeholder="din@epost.no"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-nfr-dark mb-2">
                      Emne
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-nfr-body focus:border-nfr-navy focus:ring-2 focus:ring-nfr-navy/20 outline-none transition-all"
                      placeholder="Hva gjelder henvendelsen?"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-nfr-dark mb-2">
                      Melding
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 text-nfr-body focus:border-nfr-navy focus:ring-2 focus:ring-nfr-navy/20 outline-none transition-all resize-none"
                      placeholder="Skriv din melding her..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-full bg-nfr-red px-8 py-4 font-bold text-white hover:bg-nfr-red-dark transition-colors"
                  >
                    Send melding
                  </button>
                </form>
              )}
            </div>

            {/* Contact info */}
            <div>
              <div className="bg-nfr-offwhite rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6">Kontaktinformasjon</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-nfr-red mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                    <div>
                      <h3 className="font-semibold">E-post</h3>
                      <p className="text-nfr-muted">post@norskforstehjelpsrad.no</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-nfr-red mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                    <div>
                      <h3 className="font-semibold">Nettside</h3>
                      <p className="text-nfr-muted">norskforstehjelpsrad.no</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-nfr-offwhite rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-4">Om Norsk Førstehjelpsråd</h2>
                <p className="text-nfr-muted leading-relaxed">
                  Norsk Førstehjelpsråd er paraplyorganisasjonen for førstehjelp
                  i Norge. Vi samler 28 medlemsorganisasjoner med til sammen 2,2
                  millioner indirekte medlemmer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
