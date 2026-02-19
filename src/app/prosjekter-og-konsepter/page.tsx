import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABanner } from "@/components/CTABanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prosjekter & konsepter - Norsk Førstehjelpsråd",
  description:
    "NFRs pågående prosjekter og konsepter — fra EU Erasmus+ til Førstehjelpskonferansen og Førstehjelpsakademiet.",
};

const projects = [
  {
    title: "Førstehjelpskonferansen",
    status: "Årlig",
    description:
      "Norges største fagkonferanse for førstehjelp. Over 200 fagpersoner, instruktører og beslutningstakere samles for å diskutere fremtidens førstehjelpsopplæring. Tredje år på rad i 2025.",
    highlight: "200+ deltakere",
  },
  {
    title: "EU Erasmus+ — Risikoprofilbasert opplæring",
    status: "Pågående",
    description:
      "I samarbeid med Dansk Førstehjelpsråd og latviske helsemyndigheter utvikler NFR et banebrytende konsept der førstehjelpsopplæringen tilpasses mottakerens faktiske risikoprofil. EU-finansiert gjennom Erasmus+.",
    highlight: "3 land",
  },
  {
    title: "Førstehjelpsakademiet",
    status: "Under utvikling",
    description:
      "Ny digital plattform som gir instruktører tilgang til oppdatert kursmateriell, kvalitetssikringsverktøy og faglig påfyll. Sikrer at alle godkjente instruktører har tilgang til de nyeste retningslinjene.",
    highlight: "Digital plattform",
  },
  {
    title: "Samfunnsøkonomisk analyse med BI",
    status: "Publisert 2025",
    description:
      "I samarbeid med Handelshøyskolen BI publiserte NFR verdens første samfunnsøkonomiske analyse av førstehjelpsopplæring. Konklusjonen: hver krone investert gir 12 kroner tilbake til samfunnet.",
    highlight: "12:1 avkastning",
  },
  {
    title: "Forenklede nasjonale retningslinjer",
    status: "Lansering Q1 2026",
    description:
      "Omfattende revisjon av de nasjonale førstehjelpsretningslinjene. Erstatter kompliserte protokoller med intuitive handlingsmønstre. Samstemt med NIMN og 113-rådgivning.",
    highlight: "Norge leder an",
  },
  {
    title: "Stortinget — nasjonalt mandat",
    status: "Pågående",
    description:
      "NFR arbeider aktivt overfor Stortinget for at førstehjelpsopplæring skal få et tydelig nasjonalt mandat og øremerket finansiering. Representantforslag ble fremmet i 2025.",
    highlight: "Politisk arbeid",
  },
];

const concepts = [
  {
    title: "Beredskapsvenn",
    description: "Konsept der to personer lærer førstehjelp sammen og forplikter seg til å være hverandres «beredskapsvenn» i hverdagen.",
  },
  {
    title: "Risikoprofilbasert opplæring",
    description: "Førstehjelpsopplæring tilpasset mottakerens faktiske risikoprofil — en skiinstruktør lærer annet enn en kontorarbeider.",
  },
  {
    title: "Førstehjelpsuken",
    description: "Årlig nasjonal uke dedikert til å løfte førstehjelp på agendaen i hele Norge — fra barnehage til arbeidsplass.",
  },
];

export default function ProsjekterOgKonsepter() {
  return (
    <>
      <PageHero
        title="Prosjekter & konsepter"
        subtitle="Fra Norges største fagkonferanse til banebrytende forskning — NFR driver utviklingen"
        breadcrumb={[
          { label: "Prosjekter & konsepter", href: "/prosjekter-og-konsepter" },
        ]}
      />

      {/* Pågående prosjekter */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Pågående prosjekter"
            subtitle="Initiativer som gjør forskjell for førstehjelp i Norge og internasjonalt"
          />
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-white rounded-2xl p-8 border border-nfr-stone hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-nfr-accent-text bg-nfr-accent/10 px-3 py-1 rounded-full">
                    {project.status}
                  </span>
                  <span className="text-sm font-bold text-nfr-primary">
                    {project.highlight}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-nfr-muted leading-relaxed text-sm">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Konsepter */}
      <section className="py-20 bg-nfr-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Konsepter"
            subtitle="Innovative tilnærminger til førstehjelp utviklet av NFR"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {concepts.map((concept) => (
              <div
                key={concept.title}
                className="bg-white rounded-2xl p-8 shadow-sm"
              >
                <h3 className="text-xl font-bold mb-3">{concept.title}</h3>
                <p className="text-nfr-muted leading-relaxed text-sm">
                  {concept.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-nfr-accent-text font-medium tracking-wide uppercase text-sm mb-4">
              Resultater
            </p>
            <SectionHeading
              title="Dokumentert samfunnsverdi"
              centered
            />
            <div className="grid grid-cols-3 gap-8 mt-12">
              {[
                { value: "12:1", label: "Samfunnsøkonomisk avkastning" },
                { value: "200+", label: "Konferansedeltakere" },
                { value: "3", label: "Land i EU-prosjekt" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-4xl lg:text-5xl font-bold text-nfr-accent-text">
                    {stat.value}
                  </p>
                  <p className="text-sm text-nfr-muted mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
