import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABanner } from "@/components/CTABanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kvalitet & godkjenninger - Norsk Førstehjelpsråd",
  description:
    "NFRs kvalitetssystem: godkjente instruktører, virksomheter og kurskonsepter. Søk i registrene og forstå godkjenningsordningene.",
};

const registries = [
  {
    title: "Godkjente instruktører",
    count: "4 027",
    description:
      "Instruktører som har gjennomført NFR-godkjent kurslederutdanning og holder gyldig sertifisering.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
  },
  {
    title: "Godkjente virksomheter",
    count: "350+",
    description:
      "Virksomheter og organisasjoner som er godkjent for å tilby førstehjelpskurs etter NFRs kvalitetskrav.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
  },
  {
    title: "Godkjente kurskonsepter",
    count: "12",
    description:
      "Faglig kvalitetssikrede kurskonsepter som sikrer enhetlig og evidensbasert opplæring over hele landet.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.745 3.745 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
      </svg>
    ),
  },
];

export default function KvalitetOgGodkjenninger() {
  return (
    <>
      <PageHero
        title="Kvalitet & godkjenninger"
        subtitle="NFRs kvalitetssystem sikrer at førstehjelpsopplæring i Norge holder høy og enhetlig standard"
        breadcrumb={[
          { label: "Kvalitet & godkjenninger", href: "/kvalitet-og-godkjenninger" },
        ]}
      />

      {/* Intro */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-nfr-accent-text font-medium tracking-wide uppercase text-sm mb-4">
              Godkjenningsordningen
            </p>
            <SectionHeading
              title="Kvalitetssikring av førstehjelpsopplæring"
            />
            <div className="text-nfr-body space-y-4 text-lg leading-relaxed">
              <p>
                NFR fører nasjonale registre over godkjente instruktører,
                virksomheter og kurskonsepter. Godkjenningsordningen sikrer at
                all førstehjelpsopplæring i Norge følger Fagrådets anbefalinger
                og bygger på evidensbasert kunnskap.
              </p>
              <p>
                For arbeidsgivere, skoler og organisasjoner betyr dette trygghet
                for at opplæringen de tilbyr holder nasjonal standard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Three registries */}
      <section className="py-20 bg-nfr-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-nfr-accent-text font-medium tracking-wide uppercase text-sm mb-4">
              Tre registre
            </p>
            <h2 className="text-3xl lg:text-4xl mb-4">
              Tre pilarer for kvalitet
            </h2>
            <p className="text-nfr-muted text-lg max-w-2xl mx-auto">
              NFRs kvalitetssystem sørger for at alle som underviser i
              førstehjelp i Norge gjør det etter godkjente standarder.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {registries.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 shadow-sm"
              >
                <div className="w-14 h-14 rounded-xl bg-nfr-primary/10 text-nfr-primary flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <p className="text-3xl font-bold text-nfr-accent-text mb-2">
                  {item.count}
                </p>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-nfr-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-nfr-muted mt-10 italic">
            Søkbare registre med filtrering lanseres i fase 2.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-nfr-accent-text font-medium tracking-wide uppercase text-sm mb-4">
                Krav og kriterier
              </p>
              <SectionHeading
                title="Hvordan godkjenningen fungerer"
              />
              <div className="text-nfr-body space-y-4 leading-relaxed">
                <p>
                  Godkjenning skjer gjennom NFRs 28 medlemsorganisasjoner.
                  Instruktører må gjennomføre godkjent kurslederutdanning og
                  opprettholde sertifiseringen gjennom regelmessig faglig
                  oppdatering.
                </p>
                <p>
                  Virksomheter godkjennes basert på at de benytter godkjente
                  instruktører og følger NFR-godkjente kurskonsepter.
                  Kurskonsepter vurderes og godkjennes av Fagrådet.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                {
                  step: "1",
                  title: "Utdanning",
                  desc: "Gjennomfør kurslederutdanning gjennom en av NFRs 28 medlemsorganisasjoner",
                },
                {
                  step: "2",
                  title: "Godkjenning",
                  desc: "Bestå teoretisk og praktisk vurdering etter nasjonale retningslinjer",
                },
                {
                  step: "3",
                  title: "Registrering",
                  desc: "Registreres i NFRs nasjonale instruktørregister med gyldig sertifisering",
                },
                {
                  step: "4",
                  title: "Vedlikehold",
                  desc: "Oppretthold sertifiseringen gjennom faglig oppdatering og resertifisering",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-nfr-primary text-white flex items-center justify-center flex-shrink-0 font-bold">
                    {item.step}
                  </div>
                  <div>
                    <p className="font-semibold text-nfr-dark">{item.title}</p>
                    <p className="text-sm text-nfr-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Course concepts */}
      <section className="py-20 bg-nfr-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Godkjente kurskonsepter"
            subtitle="12 kvalitetssikrede kurskonsepter dekker alt fra grunnopplæring til spesialiserte kurs"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Grunnkurs førstehjelp",
                target: "Privatpersoner og ansatte",
                duration: "6–8 timer",
              },
              {
                title: "Trafikalt grunnkurs førstehjelp (TGF)",
                target: "Førerkortkandidater",
                duration: "4 timer",
              },
              {
                title: "Førstehjelp for barn",
                target: "Foreldre og barnehageansatte",
                duration: "4–6 timer",
              },
              {
                title: "Hjerte-lunge-redning (HLR)",
                target: "Alle målgrupper",
                duration: "2–4 timer",
              },
              {
                title: "Førstehjelp for virksomheter",
                target: "Bedrifter og organisasjoner",
                duration: "6–8 timer",
              },
              {
                title: "Avansert førstehjelp",
                target: "Helsepersonell og beredskap",
                duration: "8–16 timer",
              },
            ].map((concept) => (
              <div
                key={concept.title}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <h3 className="font-bold text-nfr-dark mb-2">
                  {concept.title}
                </h3>
                <div className="space-y-1 text-sm">
                  <p className="text-nfr-muted">
                    <span className="font-medium text-nfr-dark">Målgruppe:</span>{" "}
                    {concept.target}
                  </p>
                  <p className="text-nfr-muted">
                    <span className="font-medium text-nfr-dark">Varighet:</span>{" "}
                    {concept.duration}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-nfr-muted mt-8 italic">
            Fullstendig liste over alle 12 godkjente kurskonsepter oppdateres i
            samarbeid med Fagrådet.
          </p>
        </div>
      </section>

      {/* Existing registry info */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-nfr-midnight rounded-2xl p-10 lg:p-14 text-center relative overflow-hidden">
              <div className="absolute inset-0 nordlys-glow pointer-events-none opacity-40" />
              <p className="relative text-nfr-gold font-medium tracking-wide uppercase text-sm mb-4">
                Instruktørregisteret
              </p>
              <h2 className="relative text-2xl lg:text-3xl text-white mb-4">
                Finn godkjent instruktør
              </h2>
              <p className="relative text-white/60 leading-relaxed mb-8">
                NFR fører et nasjonalt register over alle godkjente
                førstehjelpsinstruktører. Registeret brukes av arbeidsgivere,
                skoler og organisasjoner for å verifisere instruktørers
                godkjenning.
              </p>
              <p className="relative text-white/50 text-sm italic mb-8">
                Søkbart register integreres på nettstedet i fase 2. Kontakt
                NFR for å verifisere godkjenninger i mellomtiden.
              </p>
              <Link
                href="/kontakt"
                className="relative inline-flex items-center gap-2 rounded-full bg-nfr-gold px-8 py-4 text-base font-semibold text-nfr-midnight hover:bg-nfr-gold-soft transition-colors"
              >
                Kontakt oss for å verifisere godkjenning
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-nfr-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl mb-6">
            Ønsker du å bli godkjent instruktør?
          </h2>
          <p className="text-nfr-muted text-lg max-w-2xl mx-auto mb-10">
            Kontakt en av våre 28 medlemsorganisasjoner for å starte din vei
            mot godkjenning som førstehjelpsinstruktør.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kurs-og-opplaering"
              className="rounded-full bg-nfr-primary px-8 py-4 text-base font-semibold text-white hover:bg-nfr-primary-mid transition-colors"
            >
              Kurs & opplæring
            </Link>
            <Link
              href="/kontakt"
              className="rounded-full border border-nfr-primary/30 px-8 py-4 text-base font-medium text-nfr-primary hover:bg-nfr-primary/5 transition-colors"
            >
              Kontakt oss
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
