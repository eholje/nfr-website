import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { ImpactNumbers } from "@/components/ImpactNumbers";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABanner } from "@/components/CTABanner";
import { withBasePath } from "@/lib/basePath";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Om NFR - Norsk Førstehjelpsråd",
  description:
    "Lær mer om Norsk Førstehjelpsråd, Norges normerende autoritet for førstehjelp med 28 medlemsorganisasjoner.",
};

const fagraadDisciplines = [
  "Akuttmedisin",
  "Anestesiologi",
  "Prehospitalt arbeid",
  "Traumatologi",
  "Allmennmedisin",
];

const admin = [
  { name: "Thomas Berg Green", title: "Generalsekretær / CEO" },
];

const memberOrgs = [
  "Bedriftshelsetjenestens bransjeforening",
  "Direktoratet for samfunnssikkerhet og beredskap",
  "Forsvarets Sanitet",
  "Helsedirektoratet",
  "Landsforeningen for hjerte- og lungesyke",
  "Nasjonalforeningen for Folkehelsen",
  "Norges Dykkeforbund",
  "Norges Livredningsselskap",
  "Norges Lotteforbund",
  "Norges Speiderforbund",
  "Norges Svømmeforbund",
  "Norsk Anestesiologisk Forening",
  "Norsk bransjeforening for kommersielle førstehjelpstilbydere",
  "Norsk Fjellmedisinsk Selskap",
  "Norsk Fjellsportforum",
  "Norsk Folkehjelp",
  "Norsk forening for traumatologi, akutt- og katastrofemedisin",
  "Norsk Indremedisinsk Forening",
  "Norsk kirurgisk forening",
  "Norsk Luftambulanse",
  "Norsk Resuscitasjonsråd",
  "Norske Kvinners Sanitetsforening",
  "Norske Redningshunder",
  "Norske Sikkerhetssentres Forening",
  "Næringslivets sikkerhetsorganisasjon",
  "Redningsselskapet",
  "Røde Kors",
  "Trygg Trafikk",
];

export default function OmNFR() {
  return (
    <>
      <PageHero
        title="Om Norsk Førstehjelpsråd"
        subtitle="Norges normerende autoritet for førstehjelp siden 1932"
        breadcrumb={[{ label: "Om NFR", href: "/om-nfr" }]}
        image="/images/stortinget-lion.jpg"
        imageAlt="Stortingets løve — symbol på nasjonal autoritet"
      />

      {/* Mission */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionHeading title="Vårt samfunnsoppdrag" />
            <div className="prose prose-lg text-nfr-body space-y-6">
              <p className="leading-relaxed">
                Norsk Førstehjelpsråd er Norges normerende autoritet for
                førstehjelp. Som nasjonal paraplyorganisasjon samler vi 28
                organisasjoner med til sammen 2,2 millioner indirekte medlemmer
                i arbeidet for bedre førstehjelp.
              </p>
              <p className="leading-relaxed">
                Vi setter faglige standarder, utvikler nasjonale retningslinjer
                for førstehjelp, kvalitetssikrer opplæring og rådgir
                myndigheter. Vi selger ikke kurs — vi utdanner instruktørene som
                utdanner Norge.
              </p>
              <p className="leading-relaxed">
                En samfunnsøkonomisk analyse viser at hver krone investert i
                førstehjelpsopplæring gir 12 kroner tilbake til samfunnet. Dette
                understreker den enorme verdien av arbeidet våre
                medlemsorganisasjoner gjør hver eneste dag.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NFR's 5 values */}
      <section className="py-20 bg-nfr-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-nfr-gold font-medium tracking-wide uppercase text-sm mb-4">
            Våre verdier
          </p>
          <h2 className="text-3xl lg:text-4xl text-white mb-16 font-bold">
            Fem verdier som driver oss
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                title: "Samlende",
                desc: "Vi skaper samarbeid mellom frivillige organisasjoner, kommersielle aktører, myndigheter og fagmiljøer.",
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                  </svg>
                ),
              },
              {
                title: "Kompetent",
                desc: "Kunnskapsbasert og faglig sterk — Fagrådet er selve legitimiteten i NFR.",
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                  </svg>
                ),
              },
              {
                title: "Innoverende",
                desc: "Vi utforsker nye teknologier og forskning for mer effektiv og tilgjengelig opplæring.",
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                  </svg>
                ),
              },
              {
                title: "Delende",
                desc: "Åpen kunnskapsdeling — vi skaper møteplasser for erfaringsutveksling og læring.",
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                  </svg>
                ),
              },
              {
                title: "Engasjerende",
                desc: "En tydelig stemme i samfunnet for førstehjelp i skole, arbeidsliv og beredskap.",
                icon: (
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 1 1 0-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 0 1-1.44-4.282m3.102.069a18.03 18.03 0 0 1-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 0 1 8.835 2.535M10.34 6.66a23.847 23.847 0 0 0 8.835-2.535m0 0A23.74 23.74 0 0 0 18.795 3m.38 1.125a23.91 23.91 0 0 1 1.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 0 0 1.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 0 1 0 3.46" />
                  </svg>
                ),
              },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-white/10 rounded-2xl p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 text-nfr-gold flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{value.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* External evaluation quotes */}
      <section className="py-20 bg-nfr-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-nfr-accent-text font-medium tracking-wide uppercase text-sm mb-4">
              Ekstern evaluering
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Hva andre sier om NFR
            </h2>
            <p className="text-nfr-muted leading-relaxed">
              Uavhengige evalueringer bekrefter NFRs sentrale rolle i det norske
              førstehjelpsmiljøet.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <blockquote className="bg-white rounded-2xl p-8 shadow-sm">
              <p className="text-nfr-body leading-relaxed italic mb-4">
                &ldquo;Flere peker på at NFR har en vesentlig rolle med å være en
                koordinator og kvalitetssikrer av innholdet i
                førstehjelpskommunikasjonen i Norge og frykter for konsekvensene
                om NFR skulle legges ned.&rdquo;
              </p>
              <footer className="text-nfr-muted text-sm">
                Ekstern evaluering av NFR
              </footer>
            </blockquote>
            <blockquote className="bg-white rounded-2xl p-8 shadow-sm">
              <p className="text-nfr-body leading-relaxed italic mb-4">
                &ldquo;De fleste svarer at det vil kunne være problematisk hvis
                NFR blir lagt ned, flere trekker frem fagrådet som spesielt
                sentralt og at det vil være vanskelig å samle faglig innsikt på
                andre måter.&rdquo;
              </p>
              <footer className="text-nfr-muted text-sm">
                Ekstern evaluering av NFR
              </footer>
            </blockquote>
            <blockquote className="bg-white rounded-2xl p-8 shadow-sm">
              <p className="text-nfr-body leading-relaxed italic mb-4">
                &ldquo;Majoriteten oppgir at samarbeidet med NFR gir dem verdi.
                Disse har førstehjelp som sitt fokusområde.&rdquo;
              </p>
              <footer className="text-nfr-muted text-sm">
                Ekstern evaluering av NFR
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      <ImpactNumbers />

      {/* Hvem vi er — navigation to sub-pages */}
      <section className="py-20 bg-nfr-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Hvem vi er"
            subtitle="Organisasjonsstruktur, ledelse og samarbeidspartnere"
            centered
          />
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Medlemsorganisasjoner",
                description: "28 organisasjoner med spesiell interesse for førstehjelp i Norge",
                href: "/fasteradsmedlem",
              },
              {
                title: "Fagrådet",
                description: "Ekspertutvalget som gir NFR sin faglige tyngde innen akuttmedisin",
                href: "#fagraadet",
              },
              {
                title: "Styret & administrasjon",
                description: "Den daglige ledelsen av Norsk Førstehjelpsråd",
                href: "#styret",
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="bg-nfr-cream rounded-2xl p-8 hover:shadow-md transition-shadow group"
              >
                <h3 className="text-xl font-bold mb-3 group-hover:text-nfr-primary-mid transition-colors">
                  {item.title}
                </h3>
                <p className="text-nfr-muted leading-relaxed text-sm">
                  {item.description}
                </p>
                <span className="inline-flex items-center gap-2 mt-4 text-nfr-primary-mid font-semibold text-sm group-hover:gap-3 transition-all">
                  Les mer
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Fagrådet — prominent, before board */}
      <section id="fagraadet" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-nfr-accent-text font-medium tracking-wide uppercase text-sm mb-4">
                Faglig ledelse
              </p>
              <SectionHeading
                title="Fagrådet"
                subtitle="Ekspertutvalget som gir NFR sin faglige tyngde"
              />
              <div className="text-nfr-body space-y-4">
                <p className="leading-relaxed">
                  Fagrådet er NFRs viktigste faglige organ. Det er sammensatt av
                  ledende eksperter innen akuttmedisin, anestesiologi,
                  traumatologi og prehospitalt arbeid fra norske sykehus og
                  fagmiljøer.
                </p>
                <p className="leading-relaxed">
                  Fagrådet utvikler nasjonale retningslinjer for førstehjelp,
                  kvalitetssikrer kursinnhold, og sørger for at all opplæring
                  bygger på beste tilgjengelige evidens. Det er dette organet som
                  gir NFR sin rolle som normerende autoritet.
                </p>
              </div>
            </div>
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="font-bold text-lg mb-4 text-nfr-dark">
                  Faglige disipliner representert
                </h3>
                <p className="text-sm text-nfr-muted mb-6 leading-relaxed">
                  Fagrådet består av ledende spesialister fra norske sykehus og fagmiljøer, med ekspertise innen:
                </p>
                <div className="space-y-3">
                  {fagraadDisciplines.map((discipline) => (
                    <div
                      key={discipline}
                      className="flex items-center gap-3 pb-3 border-b border-nfr-stone/50 last:border-0 last:pb-0"
                    >
                      <div className="w-10 h-10 rounded-full bg-nfr-primary/10 flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-nfr-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
                      </div>
                      <p className="font-semibold text-nfr-dark text-sm">
                        {discipline}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Administrasjonen */}
      <section id="styret" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Administrasjonen"
            subtitle="Den daglige ledelsen av Norsk Førstehjelpsråd"
            centered
          />
          <div className="max-w-md mx-auto">
            {admin.map((person) => (
              <div key={person.name} className="text-center">
                <Image
                  src={withBasePath("/images/thomas-berg-green.jpg")}
                  alt={person.name}
                  width={128}
                  height={128}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold">{person.name}</h3>
                <p className="text-nfr-muted">{person.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Member organizations — real names */}
      <section className="py-20 bg-nfr-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Våre 28 medlemsorganisasjoner"
            subtitle="Organisasjoner med spesiell interesse for, eller oppgave innen, opplæring i førstehjelp"
            centered
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {memberOrgs.map((name) => (
              <div
                key={name}
                className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex items-center justify-center min-h-[72px]"
              >
                <h3 className="font-medium text-sm text-nfr-dark text-center leading-tight">
                  {name}
                </h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/fasteradsmedlem"
              className="text-nfr-primary-mid font-semibold hover:underline"
            >
              Se detaljer om alle medlemsorganisasjoner &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Board — descriptive */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <SectionHeading title="Styret" centered />
            <p className="text-nfr-body leading-relaxed">
              NFRs styre velges av generalforsamlingen og består av representanter
              fra medlemsorganisasjonene. Styret har det overordnede ansvaret for
              organisasjonens strategi, økonomi og faglige retning.
            </p>
            <Link
              href="/kontakt"
              className="inline-flex items-center gap-2 mt-6 text-nfr-primary-mid font-semibold text-sm hover:underline"
            >
              Kontakt oss for mer informasjon om styret
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
