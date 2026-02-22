import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABanner } from "@/components/CTABanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kurs & opplæring - Norsk Førstehjelpsråd",
  description:
    "NFR utdanner instruktører og kvalitetssikrer førstehjelpsopplæring i Norge. Vi selger ikke kurs — vi setter standarden.",
};

const kvalitetssystem = [
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

export default function KursOgOpplaering() {
  return (
    <>
      <PageHero
        title="Kurs & opplæring"
        subtitle="Vi utdanner instruktørene som utdanner Norge"
        breadcrumb={[
          { label: "Kurs & opplæring", href: "/kurs-og-opplaering" },
        ]}
      />

      {/* NFR's role */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-nfr-accent-text font-medium tracking-wide uppercase text-sm mb-4">
              Vår rolle
            </p>
            <h2 className="text-3xl lg:text-4xl mb-6">
              NFR selger ikke førstehjelpskurs
            </h2>
            <div className="text-nfr-body space-y-4 text-lg leading-relaxed">
              <p>
                Norsk Førstehjelpsråd holder kurslederutdanninger — vi utdanner
                og sertifiserer instruktørene som underviser i førstehjelp
                gjennom våre medlemsorganisasjoner.
              </p>
              <p>
                Vi utvikler nasjonale retningslinjer, kvalitetssikrer
                kursinnhold og fører register over godkjente instruktører,
                virksomheter og kurskonsepter. Slik sikrer vi at
                førstehjelpsopplæring i Norge holder høy og enhetlig kvalitet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Kvalitetssystem */}
      <section className="py-20 bg-nfr-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-nfr-accent-text font-medium tracking-wide uppercase text-sm mb-4">
              Kvalitetssystemet
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
            {kvalitetssystem.map((item) => (
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
          <div className="text-center mt-10">
            <Link
              href="/kvalitet-og-godkjenninger"
              className="inline-flex items-center gap-2 text-nfr-primary-mid font-semibold hover:gap-3 transition-all"
            >
              Se godkjenningsordningen
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Target groups */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Hvem er opplæringen for?"
            subtitle="NFRs medlemsorganisasjoner tilbyr kurs tilpasset ulike målgrupper"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Privatpersoner",
                description: "Grunnkurs i førstehjelp for alle som vil kunne redde liv i hverdagen.",
              },
              {
                title: "Virksomheter",
                description: "Bedriftskurs som oppfyller lovkrav og gir ansatte trygghet til å handle.",
              },
              {
                title: "Skole & barnehage",
                description: "Tilpasset opplæring for barn, unge og ansatte i utdanningssektoren.",
              },
              {
                title: "Helsepersonell",
                description: "Avanserte kurs for helsefagarbeidere, sykepleiere og annet helsepersonell.",
              },
              {
                title: "Instruktørkurs",
                description: "Bli godkjent førstehjelpsinstruktør gjennom NFRs kurslederutdanning.",
              },
              {
                title: "Digitale kurs",
                description: "E-læring og digitale ressurser som supplement til praktisk opplæring.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-nfr-cream rounded-2xl p-8 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-nfr-muted leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key concepts */}
      <section className="py-20 bg-nfr-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Konsepter og programmer"
            subtitle="NFR utvikler og kvalitetssikrer flere sentrale opplæringskonsepter"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Trafikalt grunnkurs førstehjelp (TGF)",
                description: "Obligatorisk førstehjelpsopplæring for alle som tar førerkort i Norge. NFR kvalitetssikrer innholdet og godkjenner instruktørene.",
              },
              {
                title: "Først på ulykkesstedet",
                description: "Kurs for deg som kan komme først til en ulykke — fra trafikkulykker til fritidsaktiviteter. Fokus på systematisk tilnærming og trygg handling.",
              },
              {
                title: "Hjerteløper / First responder",
                description: "Initiativer der frivillige varsles via app ved hjertestans i nærheten. NFR støtter kvalitetssikring av opplæringen bak disse ordningene.",
              },
              {
                title: "Risikoprofilbasert opplæring (Erasmus+)",
                description: "Nytt konsept der førstehjelpsopplæring tilpasses mottakerens faktiske risikoprofil. Utvikles med Danmark og Latvia gjennom EU-finansiering.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="font-bold text-nfr-dark text-lg mb-3">{item.title}</h3>
                <p className="text-nfr-muted leading-relaxed text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kurslederutdanning */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-nfr-accent-text font-medium tracking-wide uppercase text-sm mb-4">
                Kurslederutdanning
              </p>
              <h2 className="text-3xl lg:text-4xl mb-6">
                Bli godkjent førstehjelpsinstruktør
              </h2>
              <div className="text-nfr-body space-y-4 leading-relaxed">
                <p>
                  NFR tilbyr kurslederutdanning for deg som vil bli godkjent
                  førstehjelpsinstruktør. Utdanningen gir deg kompetanse til å
                  undervise i førstehjelp etter nasjonale retningslinjer.
                </p>
                <p>
                  Kurslederutdanningen gjennomføres i samarbeid med våre
                  medlemsorganisasjoner og gir deg tilgang til NFRs
                  kvalitetssystem med oppdatert fagmateriell og
                  instruktørnettverk.
                </p>
              </div>
              <Link
                href="/for-instruktorer"
                className="inline-flex items-center gap-2 mt-8 text-nfr-primary-mid font-semibold hover:gap-3 transition-all"
              >
                Ressurser for instruktører
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="bg-white rounded-2xl p-10">
              <h3 className="font-bold text-lg mb-6">Vil du ta et kurs?</h3>
              <p className="text-nfr-body leading-relaxed mb-6">
                Førstehjelpskurs for privatpersoner og bedrifter tilbys av
                våre medlemsorganisasjoner. Kontakt en av disse for å finne
                kurs i ditt område:
              </p>
              <ul className="space-y-3 text-nfr-body">
                {[
                  "Røde Kors",
                  "Norsk Folkehjelp",
                  "Norske Kvinners Sanitetsforening",
                  "Norsk Luftambulanse",
                ].map((org) => (
                  <li key={org} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-nfr-accent-text flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    {org}
                  </li>
                ))}
              </ul>
              <Link
                href="/fasteradsmedlem"
                className="inline-flex items-center gap-2 mt-6 text-nfr-primary-mid font-semibold hover:gap-3 transition-all text-sm"
              >
                Se alle 28 medlemsorganisasjoner
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
