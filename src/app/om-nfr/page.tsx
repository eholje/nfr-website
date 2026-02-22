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
      <section id="fagraadet" className="py-20 bg-nfr-cream">
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
