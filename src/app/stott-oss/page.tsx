import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Støtt oss - Norsk Førstehjelpsråd",
  description:
    "Støtt Norsk Førstehjelpsråd — bli støttemedlem, samarbeid med oss, eller bidra til at flere lærer å redde liv.",
};

export default function StottOss() {
  return (
    <>
      <section className="bg-nfr-accent pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl text-nfr-primary mb-6">
            Støtt oss
          </h1>
          <p className="text-xl text-nfr-primary/70 max-w-2xl mx-auto">
            Bidra til at flere nordmenn kan redde liv — støtt arbeidet for
            bedre førstehjelpsopplæring
          </p>
        </div>
      </section>

      {/* Why support */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                title: "Redder liv",
                description:
                  "Din støtte bidrar direkte til at flere nordmenn får førstehjelpsopplæring og kan redde liv.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.502-4.688-4.502-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.748 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>
                ),
              },
              {
                title: "Styrker beredskap",
                description:
                  "Vi arbeider for bedre førstehjelpsberedskap i hele Norge — fra skole til arbeidsplass.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                ),
              },
              {
                title: "1 kr = 12 kr tilbake",
                description:
                  "Samfunnsøkonomisk analyse viser at hver krone investert i førstehjelp gir 12 kroner tilbake.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-16 h-16 rounded-full bg-nfr-primary/10 text-nfr-primary flex items-center justify-center mx-auto mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-nfr-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Support options */}
          <SectionHeading title="Hvordan støtte NFR" centered />
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
            <div className="bg-white rounded-2xl border-2 border-nfr-primary/10 p-8 hover:border-nfr-primary/30 transition-colors">
              <h3 className="text-2xl font-bold mb-2">Bli støttemedlem</h3>
              <p className="text-nfr-muted mb-8">
                Støtt med et valgfritt beløp og bidra til bedre
                førstehjelpsopplæring i Norge.
              </p>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 rounded-full bg-nfr-primary px-8 py-4 font-semibold text-white hover:bg-nfr-primary-mid transition-colors w-full justify-center"
              >
                Bli støttemedlem
              </Link>
            </div>
            <div className="bg-white rounded-2xl border-2 border-nfr-primary/10 p-8 hover:border-nfr-primary/30 transition-colors">
              <h3 className="text-2xl font-bold mb-2">Samarbeid</h3>
              <p className="text-nfr-muted mb-8">
                Bli samarbeidspartner og styrk førstehjelpskompetansen i din
                sektor eller organisasjon.
              </p>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 rounded-full border-2 border-nfr-primary px-8 py-4 font-bold text-nfr-primary hover:bg-nfr-primary hover:text-white transition-colors w-full justify-center"
              >
                Ta kontakt
              </Link>
            </div>
          </div>

          {/* For politicians — link to dedicated page */}
          <div className="bg-nfr-midnight rounded-2xl p-10 lg:p-16 max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 nordlys-glow pointer-events-none" />
            <div className="relative text-center">
              <p className="text-nfr-gold font-medium tracking-wide uppercase text-sm mb-4">
                For beslutningstakere
              </p>
              <h2 className="text-2xl lg:text-3xl text-white mb-4">
                Dokumentasjonsgrunnlag for politikere og departementer
              </h2>
              <p className="text-white/60 leading-relaxed max-w-2xl mx-auto mb-8">
                Samfunnsøkonomisk analyse (12:1 avkastning), politisk
                forankring i Stortingsmeldinger, og NFRs forespørsel om
                nasjonalt mandat — samlet på én side.
              </p>
              <Link
                href="/for-beslutningstakere"
                className="inline-flex items-center gap-2 rounded-full bg-nfr-gold px-8 py-4 font-semibold text-nfr-midnight hover:bg-nfr-gold-soft transition-colors"
              >
                Se dokumentasjonsgrunnlaget
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
