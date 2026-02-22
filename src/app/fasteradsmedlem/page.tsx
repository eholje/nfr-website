import { PageHero } from "@/components/PageHero";
import { CTABanner } from "@/components/CTABanner";
import { withBasePath } from "@/lib/basePath";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Faste rådsmedlem - Norsk Førstehjelpsråd",
  description:
    "Oversikt over alle faste rådsmedlemmer i Norsk Førstehjelpsråd. 28 organisasjoner som sammen arbeider for bedre førstehjelp i Norge.",
};

const members = [
  {
    name: "Røde Kors",
    url: "https://www.rodekors.no/",
    logo: "/images/logos/rode-kors.png",
    category: "Beredskap & frivillighet",
  },
  {
    name: "Norsk Folkehjelp",
    url: "https://www.folkehjelp.no/",
    logo: "/images/logos/norsk-folkehjelp.png",
    category: "Beredskap & frivillighet",
  },
  {
    name: "Norske Kvinners Sanitetsforening",
    url: "https://www.sanitetskvinnene.no/",
    logo: "/images/logos/sanitetskvinnene.png",
    category: "Beredskap & frivillighet",
  },
  {
    name: "Norges Speiderforbund",
    url: "https://www.speiding.no/",
    logo: "/images/logos/norges-speiderforbund.png",
    category: "Beredskap & frivillighet",
  },
  {
    name: "Norske Redningshunder",
    url: "https://www.nrh.no/",
    logo: "/images/logos/norske-redningshunder.png",
    category: "Beredskap & frivillighet",
  },
  {
    name: "Norges Lotteforbund",
    url: "https://www.lottene.no/",
    logo: "/images/logos/norges-lotteforbund.png",
    category: "Beredskap & frivillighet",
  },
  {
    name: "Helsedirektoratet",
    url: "https://www.helsedirektoratet.no/",
    logo: "/images/logos/helsedirektoratet.png",
    category: "Myndigheter & forsvar",
  },
  {
    name: "Direktoratet for samfunnssikkerhet og beredskap",
    shortName: "DSB",
    url: "https://www.dsb.no/",
    logo: "/images/logos/dsb.png",
    category: "Myndigheter & forsvar",
  },
  {
    name: "Forsvarets Sanitet",
    url: "https://forsvaret.no/",
    logo: "/images/logos/forsvaret.png",
    category: "Myndigheter & forsvar",
  },
  {
    name: "Trygg Trafikk",
    url: "https://www.tryggtrafikk.no/",
    logo: "/images/logos/trygg-trafikk.png",
    category: "Myndigheter & forsvar",
  },
  {
    name: "Norsk Luftambulanse",
    url: "https://www.norskluftambulanse.no/",
    logo: "/images/logos/norsk-luftambulanse.png",
    category: "Helse & akuttmedisin",
  },
  {
    name: "Landsforeningen for hjerte- og lungesyke",
    shortName: "LHL",
    url: "https://www.lhl.no/",
    logo: "/images/logos/lhl.png",
    category: "Helse & akuttmedisin",
  },
  {
    name: "Nasjonalforeningen for Folkehelsen",
    url: "https://www.nasjonalforeningen.no/",
    logo: "/images/logos/nasjonalforeningen.png",
    category: "Helse & akuttmedisin",
  },
  {
    name: "Norsk Resuscitasjonsråd",
    shortName: "NRR",
    url: "https://www.nrr.org/",
    logo: "/images/logos/nrr.png",
    category: "Helse & akuttmedisin",
  },
  {
    name: "Norsk Anestesiologisk Forening",
    url: "https://www.nafweb.no/",
    logo: "/images/logos/norsk-anestesiologisk.png",
    category: "Medisin & fag",
  },
  {
    name: "Norsk forening for traumatologi, akutt- og katastrofemedisin",
    shortName: "NAKOS",
    url: "https://www.nakos.no/",
    logo: "/images/logos/nakos.png",
    category: "Medisin & fag",
  },
  {
    name: "Norsk Indremedisinsk Forening",
    url: "https://www.legeforeningen.no/foreningsledd/fagmed/norsk-indremedisinsk-forening/",
    logo: "/images/logos/legeforeningen.png",
    category: "Medisin & fag",
  },
  {
    name: "Norsk kirurgisk forening",
    url: "https://www.legeforeningen.no/foreningsledd/fagmed/norsk-kirurgisk-forening/",
    logo: "/images/logos/legeforeningen-kirurgisk.png",
    category: "Medisin & fag",
  },
  {
    name: "Norsk Fjellmedisinsk Selskap",
    url: "https://www.fjellmedisin.no/",
    logo: "/images/logos/norsk-fjellmedisinsk.png",
    category: "Medisin & fag",
  },
  {
    name: "Redningsselskapet",
    url: "https://www.redningsselskapet.no/",
    logo: "/images/logos/redningsselskapet.png",
    category: "Livredning & idrett",
  },
  {
    name: "Norges Livredningsselskap",
    url: "https://www.livredning.no/",
    logo: "/images/logos/norges-livredningsselskap.png",
    category: "Livredning & idrett",
  },
  {
    name: "Norges Svømmeforbund",
    url: "https://www.svomming.no/",
    logo: "/images/logos/norges-svommeforbund.png",
    category: "Livredning & idrett",
  },
  {
    name: "Norges Dykkeforbund",
    url: "https://www.ndf.no/",
    logo: "/images/logos/norges-dykkeforbund.png",
    category: "Livredning & idrett",
  },
  {
    name: "Norsk Fjellsportforum",
    url: "https://fjellsportforum.no/",
    logo: "/images/logos/norsk-fjellsportforum.png",
    category: "Livredning & idrett",
  },
  {
    name: "Bedriftshelsetjenestens bransjeforening",
    shortName: "BHT",
    url: "https://bhtb.no/",
    logo: "/images/logos/bht-bransjeforening.png",
    category: "Næringsliv & sikkerhet",
  },
  {
    name: "Næringslivets sikkerhetsorganisasjon",
    shortName: "NSO",
    url: "https://nso.no/",
    logo: "/images/logos/nso.png",
    category: "Næringsliv & sikkerhet",
  },
  {
    name: "Norsk bransjeforening for kommersielle førstehjelpstilbydere",
    category: "Næringsliv & sikkerhet",
  },
  {
    name: "Norske Sikkerhetssentres Forening",
    category: "Næringsliv & sikkerhet",
  },
];

const categories = [
  "Beredskap & frivillighet",
  "Myndigheter & forsvar",
  "Helse & akuttmedisin",
  "Medisin & fag",
  "Livredning & idrett",
  "Næringsliv & sikkerhet",
];

export default function Fasteradsmedlem() {
  return (
    <>
      <PageHero
        title="28 organisasjoner. Én stemme."
        subtitle="Norges bredeste koalisjon for førstehjelp — fra Røde Kors til Helsedirektoratet, fra Forsvarets Sanitet til Norges Speiderforbund"
        breadcrumb={[
          { label: "Om NFR", href: "/om-nfr" },
          { label: "Faste rådsmedlem", href: "/fasteradsmedlem" },
        ]}
      />

      {/* Logo wall — visual impact */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-nfr-accent-text font-medium tracking-wide uppercase text-sm mb-3">
              Faste rådsmedlem
            </p>
            <h2 className="text-2xl lg:text-3xl text-nfr-dark mb-3">
              Organisasjonene bak Norsk Førstehjelpsråd
            </h2>
            <p className="text-nfr-muted max-w-2xl mx-auto">
              Sammen representerer vi 2,2 millioner indirekte medlemmer fra
              helse, beredskap, forsvar, frivillighet og næringsliv.
            </p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 lg:gap-5">
            {members.map((member) => {
              const inner = (
                <div className="flex flex-col items-center text-center gap-3 p-4 rounded-xl hover:bg-nfr-cream/60 transition-colors group">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-nfr-cream group-hover:bg-white transition-colors overflow-hidden">
                    {member.logo ? (
                      <img
                        src={withBasePath(member.logo)}
                        alt={`${member.name} logo`}
                        width={48}
                        height={48}
                        className="w-10 h-10 object-contain"
                        loading="lazy"
                      />
                    ) : (
                      <span className="text-lg font-bold text-nfr-primary/50">
                        {member.name.charAt(0)}
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-medium text-nfr-dark leading-tight line-clamp-2 group-hover:text-nfr-primary-mid transition-colors">
                    {member.shortName || member.name}
                  </span>
                </div>
              );

              if (member.url) {
                return (
                  <a
                    key={member.name}
                    href={member.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={member.name}
                  >
                    {inner}
                  </a>
                );
              }
              return (
                <div key={member.name} title={member.name}>
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Categorized detail listing */}
      <section className="py-20 bg-nfr-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl lg:text-3xl text-nfr-dark mb-3">
              Organisert etter fagområde
            </h2>
            <p className="text-nfr-muted">
              Klikk på en organisasjon for å besøke deres nettsted
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => {
              const categoryMembers = members.filter(
                (m) => m.category === category
              );
              return (
                <div key={category}>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-nfr-accent-text mb-4 pb-2 border-b border-nfr-stone">
                    {category}
                  </h3>
                  <ul className="space-y-2">
                    {categoryMembers.map((member) => (
                      <li key={member.name}>
                        {member.url ? (
                          <a
                            href={member.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 py-2 px-3 -mx-3 rounded-lg hover:bg-white transition-colors group"
                          >
                            <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-md bg-white group-hover:bg-nfr-cream transition-colors overflow-hidden">
                              {member.logo ? (
                                <img
                                  src={withBasePath(member.logo)}
                                  alt=""
                                  width={24}
                                  height={24}
                                  className="w-5 h-5 object-contain"
                                  loading="lazy"
                                />
                              ) : (
                                <span className="text-xs font-bold text-nfr-primary/40">
                                  {member.name.charAt(0)}
                                </span>
                              )}
                            </div>
                            <span className="text-sm text-nfr-body group-hover:text-nfr-primary-mid transition-colors leading-tight">
                              {member.name}
                            </span>
                            <svg
                              className="w-3.5 h-3.5 text-nfr-muted/40 ml-auto flex-shrink-0 group-hover:text-nfr-primary-mid transition-colors"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                              />
                            </svg>
                          </a>
                        ) : (
                          <div className="flex items-center gap-3 py-2 px-3 -mx-3">
                            <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-md bg-white overflow-hidden">
                              <span className="text-xs font-bold text-nfr-primary/40">
                                {member.name.charAt(0)}
                              </span>
                            </div>
                            <span className="text-sm text-nfr-body leading-tight">
                              {member.name}
                            </span>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact statement */}
      <section className="py-20 bg-nfr-midnight relative overflow-hidden">
        <div className="absolute inset-0 nordlys-glow pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-nfr-gold font-medium tracking-wide uppercase text-sm mb-4">
              Samlet slagkraft
            </p>
            <h2 className="text-3xl lg:text-4xl text-white mb-8">
              Norges bredeste koalisjon for førstehjelp
            </h2>
            <div className="grid grid-cols-3 gap-8 mb-10">
              <div>
                <p className="text-4xl lg:text-5xl font-bold gold-highlight">28</p>
                <p className="text-sm text-white/60 mt-2">Organisasjoner</p>
              </div>
              <div>
                <p className="text-4xl lg:text-5xl font-bold gold-highlight">2,2M</p>
                <p className="text-sm text-white/60 mt-2">Indirekte medlemmer</p>
              </div>
              <div>
                <p className="text-4xl lg:text-5xl font-bold gold-highlight">6</p>
                <p className="text-sm text-white/60 mt-2">Fagområder</p>
              </div>
            </div>
            <p className="text-white/60 leading-relaxed">
              Fra Røde Kors og Norsk Folkehjelp til Helsedirektoratet og
              Forsvarets Sanitet — NFRs medlemsorganisasjoner dekker hele
              bredden av norsk beredskap, helse og frivillighet.
            </p>
          </div>
        </div>
      </section>

      {/* Contact info */}
      <section className="py-16 bg-nfr-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">Kontaktinformasjon</h2>
            <div className="bg-white rounded-2xl p-8 shadow-sm space-y-3 text-left">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-nfr-muted">Telefon</p>
                  <p className="font-semibold">24 02 22 20</p>
                </div>
                <div>
                  <p className="text-sm text-nfr-muted">E-post</p>
                  <p className="font-semibold">post@norskforstehjelpsrad.no</p>
                </div>
                <div>
                  <p className="text-sm text-nfr-muted">Org.nr</p>
                  <p className="font-semibold">985 076 383</p>
                </div>
                <div>
                  <p className="text-sm text-nfr-muted">Postadresse</p>
                  <p className="font-semibold">c/o NAKOS, Postboks 4956 Nydalen, 0424 Oslo</p>
                </div>
              </div>
              <div className="pt-3 border-t">
                <p className="text-sm text-nfr-muted">Besøksadresse</p>
                <p className="font-semibold">
                  Oslo universitetssykehus HF, Kirkeveien 166, Bygg 31 B, 0450 Oslo
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
