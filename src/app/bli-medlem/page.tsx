import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bli medlem - Norsk Førstehjelpsråd",
  description: "Bli støttemedlem av Norsk Førstehjelpsråd og støtt arbeidet for bedre førstehjelpsopplæring i Norge.",
};

export default function BliMedlem() {
  return (
    <>
      <section className="bg-nfr-red pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Bli støttemedlem
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Støtt arbeidet for bedre førstehjelpsopplæring i Norge
          </p>
        </div>
      </section>

      {/* Value proposition */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                title: "Redder liv",
                description: "Din støtte bidrar direkte til at flere nordmenn får førstehjelpsopplæring og kan redde liv.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.502-4.688-4.502-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.748 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>
                ),
              },
              {
                title: "Styrker beredskap",
                description: "Vi arbeider for bedre førstehjelpsberedskap i hele Norge - fra skole til arbeidsplass.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                ),
              },
              {
                title: "1 kr = 12 kr tilbake",
                description: "Samfunnsøkonomisk analyse viser at hver krone investert i førstehjelp gir 12 kroner tilbake.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-16 h-16 rounded-full bg-nfr-red/10 text-nfr-red flex items-center justify-center mx-auto mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-nfr-muted leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <SectionHeading title="Medlemskap" centered />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl border-2 border-nfr-navy/10 p-8 hover:border-nfr-navy/30 transition-colors">
              <h3 className="text-2xl font-bold mb-2">Privatperson</h3>
              <p className="text-nfr-muted mb-8">
                Støtt med et valgfritt beløp og bidra til bedre
                førstehjelpsopplæring i Norge.
              </p>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 rounded-full bg-nfr-red px-8 py-4 font-bold text-white hover:bg-nfr-red-dark transition-colors w-full justify-center"
              >
                Bli medlem
              </Link>
            </div>
            <div className="bg-white rounded-2xl border-2 border-nfr-navy/10 p-8 hover:border-nfr-navy/30 transition-colors">
              <h3 className="text-2xl font-bold mb-2">Organisasjon</h3>
              <p className="text-nfr-muted mb-8">
                Bli partnerorganisasjon og styrk førstehjelpskompetansen i din
                sektor.
              </p>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 rounded-full border-2 border-nfr-navy px-8 py-4 font-bold text-nfr-navy hover:bg-nfr-navy hover:text-white transition-colors w-full justify-center"
              >
                Kontakt oss
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
