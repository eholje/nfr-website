import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";
import { organization } from "@/data/organization";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Støtt oss - Norsk Førstehjelpsråd",
  description:
    "Støtt Norsk Førstehjelpsråd — bli samarbeidspartner, støttemedlem, eller bidra til at flere lærer å redde liv.",
};

export default function StottOss() {
  return (
    <>
      <section className="bg-nfr-accent pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl text-nfr-primary mb-6">
            Støtt Norges førstehjelparbeid
          </h1>
          <p className="text-xl text-nfr-primary/70 max-w-2xl mx-auto">
            Fra bedriftssamarbeid til privat støtte — det finnes flere måter å
            bidra til bedre førstehjelpsopplæring i Norge
          </p>
        </div>
      </section>

      {/* Bedriftssamarbeid — primary track */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-nfr-accent-text font-medium tracking-wide uppercase text-sm mb-4">
              For bedrifter og organisasjoner
            </p>
            <SectionHeading
              title="Bli samarbeidspartner"
              subtitle="Knytt din virksomhet til Norges ledende fagmiljø for førstehjelp"
            />
            <p className="text-nfr-body leading-relaxed">
              Som samarbeidspartner med NFR kobler du virksomheten din til en
              nasjonal autoritet med dokumentert samfunnseffekt. Vi tilbyr
              skreddersydde partnerskap tilpasset din sektors behov.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Rekkevidde og synlighet",
                desc: "Tilgang til NFRs nettverk av 28 organisasjoner og 2,2 millioner indirekte medlemmer. Synlighet på Førstehjelpskonferansen og i faglige publikasjoner.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                  </svg>
                ),
              },
              {
                title: "Faglig troverdighet",
                desc: "Assosiasjon med Norges fremste fagmiljø for førstehjelp. Dokumentert av Fagrådet med landets ledende eksperter innen akuttmedisin.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                ),
              },
              {
                title: "Samfunnseffekt og ESG",
                desc: "Bidra til dokumentert samfunnsnytte (12:1 avkastning, BI-studie). Verdifull rapportering til ESG- og bærekraftsrapporter.",
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.title} className="bg-nfr-cream rounded-2xl p-8">
                <div className="w-14 h-14 rounded-xl bg-nfr-primary/10 text-nfr-primary flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-nfr-muted leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl border-2 border-nfr-primary/10 p-8 lg:p-12 max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-3">
              Interessert i samarbeid?
            </h3>
            <p className="text-nfr-muted leading-relaxed mb-8 max-w-xl mx-auto">
              Vi tilpasser partnerskap etter din virksomhets behov — fra
              konferansesponsing til langsiktige strategiske samarbeid. Ta
              kontakt for en uforpliktende samtale.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 rounded-full bg-nfr-primary px-8 py-4 font-semibold text-white hover:bg-nfr-primary-mid transition-colors"
            >
              Ta kontakt om samarbeid
            </Link>
          </div>
        </div>
      </section>

      {/* Privat støtte — secondary track */}
      <section className="py-20 bg-nfr-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-nfr-accent-text font-medium tracking-wide uppercase text-sm mb-4">
              For privatpersoner
            </p>
            <SectionHeading
              title="Støtt med en gave"
              subtitle="Du kan også bidra som privatperson — hver krone teller"
            />
            <p className="text-nfr-body leading-relaxed mb-12">
              Norsk Førstehjelpsråd er en ideell organisasjon. Din støtte bidrar
              direkte til bedre førstehjelpsopplæring, fagutvikling og
              beredskapsarbeid i hele Norge.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {/* Vipps */}
              <div className="bg-white rounded-2xl p-8 text-center">
                <div className="w-14 h-14 rounded-xl bg-[#FF5B24]/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#FF5B24] font-bold text-lg">V</span>
                </div>
                <p className="text-sm text-nfr-muted mb-1">Vipps til NFR</p>
                <p className="text-2xl font-bold text-nfr-dark">
                  {organization.vipps}
                </p>
              </div>

              {/* Konto */}
              <div className="bg-white rounded-2xl p-8 text-center">
                <div className="w-14 h-14 rounded-xl bg-nfr-primary/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-nfr-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                  </svg>
                </div>
                <p className="text-sm text-nfr-muted mb-1">Kontonummer</p>
                <p className="text-2xl font-bold text-nfr-dark">
                  {organization.bankAccount}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border-2 border-nfr-primary/10 p-8 text-center">
              <h3 className="text-xl font-bold mb-2">Bli støttemedlem</h3>
              <p className="text-nfr-muted mb-6">
                Støtt med et valgfritt beløp og bli en del av arbeidet for
                bedre førstehjelpsopplæring i Norge.
              </p>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 rounded-full border-2 border-nfr-primary px-8 py-4 font-bold text-nfr-primary hover:bg-nfr-primary hover:text-white transition-colors"
              >
                Kontakt oss om støttemedlemskap
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* For beslutningstakere */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
                nasjonalt mandat — samlet på en side.
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
