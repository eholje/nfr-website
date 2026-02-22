import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { withBasePath } from "@/lib/basePath";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For beslutningstakere - Norsk Førstehjelpsråd",
  description:
    "Dokumentasjonsgrunnlag for politikere, departementer og beslutningstakere. Samfunnsøkonomisk analyse, nasjonalt mandat og strategisk satsing på førstehjelp.",
};

const keyFigures = [
  {
    value: "12:1",
    label: "Samfunnsøkonomisk avkastning",
    description:
      "Hver krone investert i førstehjelpsopplæring gir 12 kroner tilbake til samfunnet.",
    source: "Handelshøyskolen BI / NFR 2025",
  },
  {
    value: "457",
    label: "Liv reddet i 2024",
    description:
      "Antall personer som overlevde hjertestans utenfor sykehus takket være tilskuerførstehjelp.",
    source: "Norsk hjertestansregister",
  },
  {
    value: "78%",
    label: "HLR-andel",
    description:
      "Andel hjertestanspasienter som fikk HLR av tilstedeværende før ambulansen kom. Norge er verdensledende.",
    source: "Norsk hjertestansregister",
  },
  {
    value: "56%",
    label: "Nøler med å hjelpe",
    description:
      "Over halvparten av nordmenn nøler med å gi førstehjelp — ikke fordi de mangler kunnskap, men fordi de frykter å gjøre feil.",
    source: "Røde Kors 2025",
  },
];

const policyDocuments = [
  {
    title: "Meld. St. 23 — Akuttmeldingen",
    quote:
      "Befolkningen er en viktig ressurs ved akutt sykdom og alvorlige ulykker",
    relevance:
      "Slår fast at sivilbefolkningen er en del av akuttkjeden. NFR er det operative leddet som sikrer kvaliteten på denne opplæringen.",
  },
  {
    title: "Meld. St. 9 — Totalberedskapsmeldingen",
    quote:
      "Regjeringen skal sørge for at det sivile samfunnet er forberedt på krise og krig",
    relevance:
      "Førstehjelpskompetanse er en grunnpilar i egenberedskapen. NFR har infrastrukturen til å levere opplæring i hele landet gjennom 28 organisasjoner.",
  },
  {
    title: "Nasjonal helse- og samhandlingsplan",
    quote:
      "Forebygging og helsekompetanse i befolkningen skal styrkes",
    relevance:
      "Førstehjelpsopplæring er primærforebygging i praksis. NFR kvalitetssikrer at opplæringen følger nasjonale retningslinjer.",
  },
];

const coalition = [
  { name: "Røde Kors", logo: "/images/logos/rode-kors.png" },
  { name: "Norsk Folkehjelp", logo: "/images/logos/norsk-folkehjelp.png" },
  { name: "Helsedirektoratet", logo: "/images/logos/helsedirektoratet.png" },
  { name: "DSB", logo: "/images/logos/dsb.png" },
  { name: "Forsvarets Sanitet", logo: "/images/logos/forsvaret.png" },
  { name: "Norsk Luftambulanse", logo: "/images/logos/norsk-luftambulanse.png" },
  { name: "Trygg Trafikk", logo: "/images/logos/trygg-trafikk.png" },
  { name: "LHL", logo: "/images/logos/lhl.png" },
  { name: "Norske Kvinners Sanitetsforening", logo: "/images/logos/sanitetskvinnene.png" },
  { name: "Norges Speiderforbund", logo: "/images/logos/norges-speiderforbund.png" },
  { name: "Redningsselskapet", logo: "/images/logos/redningsselskapet.png" },
  { name: "NSO", logo: "/images/logos/nso.png" },
];

export default function ForBeslutningstakere() {
  return (
    <>
      <PageHero
        title="For beslutningstakere"
        subtitle="Dokumentasjonsgrunnlag for politikere, departementer og beslutningstakere som vil investere i Norges førstehjelpsberedskap"
        breadcrumb={[
          { label: "For beslutningstakere", href: "/for-beslutningstakere" },
        ]}
        image="/images/stortinget-lion.jpg"
        imageAlt="Stortingets løve — nasjonal autoritet og politisk forankring"
      />

      {/* The ask — clear and upfront */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-nfr-accent-text font-medium tracking-wide uppercase text-sm mb-4">
              Vår forespørsel
            </p>
            <SectionHeading
              title="Et nasjonalt mandat for førstehjelpsopplæring"
            />
            <div className="text-nfr-body space-y-5 text-lg leading-relaxed">
              <p>
                Norsk Førstehjelpsråd ber om å bli tildelt et offentlig mandat
                som nasjonal koordinator for førstehjelpsopplæring i
                befolkningen — med tilhørende øremerket finansiering.
              </p>
              <p>
                Vi er den eneste organisasjonen som samler hele bredden av norsk
                beredskap, helse og frivillighet under én paraply. Med 28
                medlemsorganisasjoner og 2,2 millioner indirekte medlemmer har
                vi infrastrukturen til å nå befolkningen i hele landet.
              </p>
              <p>
                Et nasjonalt mandat vil gi:
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-6 mt-8">
              {[
                {
                  title: "Samordning",
                  desc: "Én nasjonal koordinator fremfor fragmentert innsats på tvers av sektorer",
                },
                {
                  title: "Kvalitetssikring",
                  desc: "Garantert evidensbasert opplæring etter nasjonale retningslinjer i hele landet",
                },
                {
                  title: "Beredskapsløft",
                  desc: "Befolkningen som operativ del av akuttkjeden og Norges totalberedskap",
                },
              ].map((item) => (
                <div key={item.title} className="bg-nfr-cream rounded-xl p-6">
                  <p className="font-bold text-nfr-dark mb-2">{item.title}</p>
                  <p className="text-sm text-nfr-muted leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key figures — the economic case */}
      <section className="py-20 bg-nfr-midnight relative overflow-hidden">
        <div className="absolute inset-0 nordlys-glow pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-nfr-gold font-medium tracking-wide uppercase text-sm mb-4">
              Dokumentert samfunnsverdi
            </p>
            <h2 className="text-3xl lg:text-4xl text-white mb-4">
              Tallene som taler for seg
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Alle tall er hentet fra uavhengige kilder og fagfellevurdert forskning.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyFigures.map((fig) => (
              <div key={fig.label} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <p className="text-4xl lg:text-5xl font-bold gold-highlight mb-3">
                  {fig.value}
                </p>
                <p className="text-white font-semibold text-sm mb-2">
                  {fig.label}
                </p>
                <p className="text-white/50 text-sm leading-relaxed mb-4">
                  {fig.description}
                </p>
                <p className="text-white/30 text-xs">
                  Kilde: {fig.source}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BI Analysis — the crown jewel */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-nfr-accent-text font-medium tracking-wide uppercase text-sm mb-4">
                Banebrytende forskning
              </p>
              <SectionHeading
                title="Verdens første samfunnsøkonomiske analyse av førstehjelpsopplæring"
              />
              <div className="text-nfr-body space-y-4 leading-relaxed">
                <p>
                  I samarbeid med Handelshøyskolen BI har NFR publisert den
                  første samfunnsøkonomiske analysen av førstehjelpsopplæring
                  noensinne. Rapporten dokumenterer gevinster knyttet til
                  redusert responstid, lavere behandlingskostnader og færre
                  tapte leveår.
                </p>
                <p>
                  Hovedfunn: Hver krone investert i førstehjelpsopplæring gir
                  12 kroner tilbake til samfunnet. Det er første gang noen har
                  beregnet betalingsvilligheten for førstehjelpsopplæring samt
                  samfunnsverdien av tilskuerførstehjelp.
                </p>
                <p className="font-semibold text-nfr-dark">
                  Rapporten har gjennomgått tre revisjonsrunder og representerer
                  et betydelig gjennombrudd i argumentasjonen for offentlig
                  investering i førstehjelp.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link
                  href="/nyheter-og-innsikt/samfunnsokonomisk-analyse-bi"
                  className="inline-flex items-center gap-2 rounded-full bg-nfr-primary px-8 py-4 font-semibold text-white hover:bg-nfr-primary-mid transition-colors"
                >
                  Les mer om analysen
                </Link>
                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-2 rounded-full border border-nfr-primary/30 px-8 py-4 font-medium text-nfr-primary hover:bg-nfr-primary/5 transition-colors"
                >
                  Be om rapporten
                </Link>
              </div>
            </div>
            <div className="bg-nfr-cream rounded-2xl p-10">
              <blockquote className="border-l-4 border-nfr-accent pl-6 mb-8">
                <p className="text-xl text-nfr-dark leading-relaxed italic">
                  &ldquo;Investeringen gir eventyrlig avkastning. Denne
                  rapporten gir oss dokumentasjonen vi trenger for å vise
                  politikere og beslutningstakere den enorme verdien av
                  førstehjelpsopplæring.&rdquo;
                </p>
                <footer className="mt-4 text-sm text-nfr-muted">
                  Thomas Berg Green, Generalsekretær
                </footer>
              </blockquote>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-nfr-accent-text">12:1</p>
                  <p className="text-xs text-nfr-muted mt-1">Avkastning</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-nfr-accent-text">3</p>
                  <p className="text-xs text-nfr-muted mt-1">Revisjonsrunder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Policy alignment */}
      <section className="py-20 bg-nfr-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-nfr-accent-text font-medium tracking-wide uppercase text-sm mb-4">
              Politisk forankring
            </p>
            <h2 className="text-3xl lg:text-4xl mb-4">
              Forankret i gjeldende politikk
            </h2>
            <p className="text-nfr-muted max-w-2xl mx-auto">
              NFRs arbeid er direkte forankret i vedtatt norsk politikk.
              Stortinget har allerede slått fast at befolkningens
              førstehjelpskompetanse skal styrkes.
            </p>
          </div>
          <div className="space-y-6 max-w-4xl mx-auto">
            {policyDocuments.map((doc) => (
              <div
                key={doc.title}
                className="bg-white rounded-2xl p-8 shadow-sm"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="lg:w-1/3">
                    <h3 className="font-bold text-nfr-dark mb-2">{doc.title}</h3>
                    <blockquote className="text-sm text-nfr-primary italic border-l-2 border-nfr-accent pl-4">
                      &ldquo;{doc.quote}&rdquo;
                    </blockquote>
                  </div>
                  <div className="lg:w-2/3">
                    <p className="text-sm text-nfr-body leading-relaxed">
                      <span className="font-semibold">Relevans for NFR: </span>
                      {doc.relevance}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The coalition — logos for credibility */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-nfr-accent-text font-medium tracking-wide uppercase text-sm mb-4">
              Koalisjonen
            </p>
            <h2 className="text-3xl lg:text-4xl mb-4">
              28 organisasjoner. Én stemme.
            </h2>
            <p className="text-nfr-muted max-w-2xl mx-auto">
              NFR samler Norges bredeste koalisjon av organisasjoner med
              interesse for førstehjelp — fra statlige direktorater til
              frivillige organisasjoner.
            </p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6 max-w-4xl mx-auto">
            {coalition.map((org) => (
              <div
                key={org.name}
                className="flex flex-col items-center gap-2 p-4"
                title={org.name}
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-white shadow-sm overflow-hidden">
                  <img
                    src={withBasePath(org.logo)}
                    alt={`${org.name} logo`}
                    width={48}
                    height={48}
                    className="w-10 h-10 object-contain"
                    loading="lazy"
                  />
                </div>
                <span className="text-xs text-nfr-muted text-center leading-tight">
                  {org.name}
                </span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/fasteradsmedlem"
              className="text-nfr-primary-mid font-semibold text-sm hover:underline"
            >
              Se alle 28 medlemsorganisasjoner &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Timeline — what NFR has achieved */}
      <section className="py-20 bg-nfr-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-nfr-accent-text font-medium tracking-wide uppercase text-sm mb-4">
                Historikk
              </p>
              <h2 className="text-3xl lg:text-4xl mb-4">
                Resultater som dokumenterer leveringsevne
              </h2>
            </div>
            <div className="space-y-0">
              {[
                {
                  year: "1932",
                  event: "NFR etablert som Norges normerende autoritet for førstehjelp",
                },
                {
                  year: "2020",
                  event: "Thomas Berg Green tiltrer som generalsekretær — strategisk nyorientering",
                },
                {
                  year: "2023",
                  event: "Førstehjelpsstrategi godkjent av Helse- og omsorgsdepartementet",
                },
                {
                  year: "2023",
                  event: "Førstehjelpskonferansen etablert — Norges største fagkonferanse for førstehjelp",
                },
                {
                  year: "2024",
                  event: "DSB inkluderer førstehjelp i egenberedskapsanbefalinger for første gang",
                },
                {
                  year: "2025",
                  event: "Representantforslag om nasjonal strategi fremmet på Stortinget",
                },
                {
                  year: "2025",
                  event: "Samfunnsøkonomisk analyse med BI publisert — verdens første",
                },
                {
                  year: "2025",
                  event: "EU Erasmus+ prosjektmidler tildelt for risikoprofilbasert opplæring",
                },
                {
                  year: "2026",
                  event: "Nye forenklede nasjonale retningslinjer lanseres",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-nfr-primary flex-shrink-0 mt-1.5" />
                    {i < 8 && <div className="w-px flex-1 bg-nfr-stone" />}
                  </div>
                  <div className="pb-8">
                    <p className="text-xs font-bold text-nfr-accent-text uppercase tracking-wider">
                      {item.year}
                    </p>
                    <p className="text-sm text-nfr-body leading-relaxed mt-1">
                      {item.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Generalsekretæren */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
            <div className="lg:col-span-4">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden relative">
                <Image
                  src={withBasePath("/images/thomas-berg-green.jpg")}
                  alt="Thomas Berg Green, Generalsekretær i Norsk Førstehjelpsråd"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
            </div>
            <div className="lg:col-span-8">
              <p className="text-nfr-accent-text font-medium tracking-wide uppercase text-sm mb-4">
                Kontaktperson
              </p>
              <h2 className="text-3xl font-bold text-nfr-dark mb-2">
                Thomas Berg Green
              </h2>
              <p className="text-nfr-muted text-lg mb-6">
                Generalsekretær, Norsk Førstehjelpsråd
              </p>
              <p className="text-nfr-body leading-relaxed mb-6">
                Nesten 30 år i ambulansetjenesten. Jobber fortsatt deltid som
                paramedisiner. Leder NFR siden 2020 med fokus på å løfte
                førstehjelp fra frivillighetsarbeid til nasjonalt mandat.
              </p>
              <blockquote className="border-l-4 border-nfr-accent pl-6 mb-8">
                <p className="text-lg text-nfr-dark leading-relaxed italic">
                  &ldquo;Vår visjon er helt tydelig: Alle kan gi førstehjelp!
                  Det er robusthet det!&rdquo;
                </p>
              </blockquote>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center gap-2 rounded-full bg-nfr-primary px-8 py-4 font-semibold text-white hover:bg-nfr-primary-mid transition-colors"
                >
                  Ta kontakt
                </Link>
                <a
                  href="mailto:post@norskforstehjelpsrad.no"
                  className="inline-flex items-center gap-2 rounded-full border border-nfr-primary/30 px-8 py-4 font-medium text-nfr-primary hover:bg-nfr-primary/5 transition-colors"
                >
                  post@norskforstehjelpsrad.no
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA — specific to decision-makers */}
      <section className="py-20 bg-nfr-midnight relative overflow-hidden">
        <div className="absolute inset-0 nordlys-glow pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl text-white mb-6">
            Førstehjelp er samfunnets billigste livsforsikring
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10">
            Med 12:1 avkastning, 28 organisasjoner klare til å levere, og en
            befolkning som vil — mangler bare det politiske mandatet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="rounded-full bg-nfr-gold px-10 py-4 text-base font-semibold text-nfr-midnight hover:bg-nfr-gold-soft transition-colors"
            >
              Inviter NFR til et møte
            </Link>
            <Link
              href="/nyheter-og-innsikt/samfunnsokonomisk-analyse-bi"
              className="rounded-full border border-white/20 px-10 py-4 text-base font-medium text-white hover:bg-white/5 transition-colors"
            >
              Les analysen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
