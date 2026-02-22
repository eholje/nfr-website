import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABanner } from "@/components/CTABanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Førstehjelp & fag - Norsk Førstehjelpsråd",
  description:
    "Nasjonal kunnskapsportal for førstehjelp. Retningslinjer, faglige anbefalinger og livreddende kunnskap fra Norges normerende autoritet.",
};

const topics = [
  {
    title: "Ring 113",
    description:
      "Medisinsk nødtelefon er alltid første steg. Lær når og hvordan du ringer, og hva du bør si.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
      </svg>
    ),
  },
  {
    title: "Hjertestans og HLR",
    description:
      "Hjerte-lunge-redning (HLR) og bruk av hjertestarter. De viktigste minuttene før ambulansen kommer.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.502-4.688-4.502-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.748 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
  },
  {
    title: "Blødninger og sår",
    description:
      "Hvordan stoppe blødninger, behandle sår og gjenkjenne alvorlige skader som krever akutt hjelp.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m4.5 12.75 6 6 9-13.5" />
      </svg>
    ),
  },
  {
    title: "Bevisstløshet",
    description:
      "Sideleie, frie luftveier og overvåking av bevisstløse personer mens du venter på hjelp.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    ),
  },
  {
    title: "Forgiftning og allergi",
    description:
      "Anafylaktisk sjokk, forgiftninger og allergiske reaksjoner. Rask handling kan redde liv.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
      </svg>
    ),
  },
  {
    title: "Forebygging",
    description:
      "Forebygging av ulykker i hjemmet, på arbeidsplassen, i trafikken og på fritiden.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
];

export default function ForstehjelOgFag() {
  return (
    <>
      <PageHero
        title="Førstehjelp & fag"
        subtitle="Nasjonal kunnskapsportal — retningslinjer, faglige anbefalinger og livreddende kunnskap"
        breadcrumb={[{ label: "Førstehjelp & fag", href: "/forstehjelp-og-fag" }]}
        image="/images/pages/snoredningsmenn.jpg"
        imageAlt="Redningsmannskap med snøscooter i norske fjell"
      />

      {/* Core principle */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-nfr-accent-text font-medium tracking-wide uppercase text-sm mb-4">
              Grunnprinsippet
            </p>
            <SectionHeading
              title="Du kan ikke gi feil førstehjelp"
              subtitle="Det eneste som er feil — er å ikke gjøre noe."
            />
            <div className="text-nfr-body space-y-4 text-lg leading-relaxed">
              <p>
                Norge leder an internasjonalt med forenklede
                førstehjelpsretningslinjer. NFRs Fagråd har utviklet
                retningslinjer som erstatter kompliserte protokoller med
                intuitive handlingsmønstre — slik at flere tør å handle.
              </p>
              <p>
                Retningslinjene er samstemt med rådene du får fra 113 (medisinsk
                nødtelefon), slik at hele kjeden fra opplæring til akuttrespons
                snakker samme språk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fagrådets anbefalinger */}
      <section className="py-20 bg-nfr-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-nfr-accent-text font-medium tracking-wide uppercase text-sm mb-4">
              Fagrådets anbefalinger
            </p>
            <h2 className="text-3xl lg:text-4xl mb-4">
              Vanlige akuttsituasjoner
            </h2>
            <p className="text-nfr-muted text-lg max-w-2xl mx-auto">
              Faglig kvalitetssikret informasjon om de vanligste situasjonene
              der førstehjelp kan gjøre forskjellen.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic) => (
              <div
                key={topic.title}
                className="bg-white rounded-2xl p-8 hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-xl bg-nfr-primary/10 text-nfr-primary flex items-center justify-center mb-6">
                  {topic.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{topic.title}</h3>
                <p className="text-nfr-muted leading-relaxed text-sm">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-nfr-muted mt-10">
            Faginnholdet er kvalitetssikret av NFRs Fagråd. Kontakt oss for
            utfyllende materiell og retningslinjer.
          </p>
        </div>
      </section>

      {/* FAQ teaser */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-nfr-accent-text font-medium tracking-wide uppercase text-sm mb-4">
                Myteknusing
              </p>
              <SectionHeading
                title="Myter og fakta om førstehjelp"
              />
              <div className="text-nfr-body space-y-4 leading-relaxed">
                <p>
                  Det finnes mange misforståelser om førstehjelp. NFRs Fagråd
                  jobber aktivt med å erstatte utdaterte «sannheter» med
                  oppdatert, evidensbasert kunnskap.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                {
                  myth: "Man må legge hodet bakover ved neseblod",
                  fact: "Nei — bøy hodet fremover og klem over nesebenet.",
                },
                {
                  myth: "Man skal stikke noe i munnen på en som har kramper",
                  fact: "Aldri — beskytt personen mot å skade seg, og ring 113.",
                },
                {
                  myth: "Man skal ikke flytte en skadet person",
                  fact: "Sikkerhet først — flytt personen hvis det er fare for liv.",
                },
              ].map((item) => (
                <div key={item.myth} className="bg-nfr-cream rounded-xl p-6">
                  <p className="font-semibold text-nfr-dark mb-2 line-through decoration-nfr-accent/50">
                    {item.myth}
                  </p>
                  <p className="text-sm text-nfr-body leading-relaxed">
                    {item.fact}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-nfr-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-nfr-accent-text font-medium tracking-wide uppercase text-sm mb-4">
                Ofte stilte spørsmål
              </p>
              <h2 className="text-3xl lg:text-4xl mb-4">
                FAQ om førstehjelp
              </h2>
            </div>
            <div className="space-y-4">
              {[
                {
                  q: "Hva er førstehjelp?",
                  a: "Førstehjelp er den hjelpen som gis av tilstedeværende personer ved akutt sykdom eller skade, før profesjonell helsehjelp overtar. Førstehjelp kan være alt fra å ringe 113 til å gi hjerte-lunge-redning (HLR).",
                },
                {
                  q: "Når skal jeg ringe 113?",
                  a: "Ring 113 ved livstruende situasjoner: bevisstløshet, hjertestans, alvorlige pustevansker, store blødninger, mistanke om slag eller hjerteinfarkt, alvorlige ulykker, eller når du er usikker på alvorlighetsgraden. Det er alltid bedre å ringe én gang for mye enn én for lite.",
                },
                {
                  q: "Hvor ofte bør man oppdatere førstehjelpskunnskapene sine?",
                  a: "NFR anbefaler å oppdatere førstehjelpskunnskapene minst hvert femte år. Retningslinjer oppdateres jevnlig basert på ny forskning, og det er viktig å holde seg oppdatert. Mange arbeidsgivere har krav om jevnlig opplæring.",
                },
                {
                  q: "Kan man bli saksøkt for å gi førstehjelp?",
                  a: "I Norge har vi ikke en tradisjon for å saksøke hjelpere. Tvert imot — det finnes en moralsk og i noen tilfeller juridisk plikt til å hjelpe. Helsepersonelloven og straffelovens § 287 pålegger en hjelpeplikt ved alvorlige situasjoner. Du kan ikke gi feil førstehjelp — det eneste som er feil er å ikke gjøre noe.",
                },
                {
                  q: "Hva er forskjellen på NFR og organisasjoner som tilbyr kurs?",
                  a: "NFR er den nasjonale paraplyorganisasjonen som setter faglige standarder og kvalitetssikrer opplæring. Vi selger ikke kurs — vi utdanner instruktørene, godkjenner kurskonsepter og fører register. Kurs tilbys av våre 28 medlemsorganisasjoner som Røde Kors, Norsk Folkehjelp og andre.",
                },
                {
                  q: "Hva betyr det at NFR er «normerende autoritet»?",
                  a: "Det betyr at NFR setter standarden for hva som er riktig førstehjelp i Norge. Gjennom Fagrådet — et ekspertutvalg av ledende medisinere — utvikler vi nasjonale retningslinjer som all førstehjelpsopplæring skal bygge på. Vi er den faglige autoriteten som sikrer kvalitet og sammenheng.",
                },
              ].map((item) => (
                <details
                  key={item.q}
                  className="group bg-white rounded-xl shadow-sm"
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <h3 className="font-semibold text-nfr-dark pr-4">
                      {item.q}
                    </h3>
                    <svg
                      className="w-5 h-5 text-nfr-muted flex-shrink-0 group-open:rotate-180 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-nfr-body leading-relaxed text-sm">
                      {item.a}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
