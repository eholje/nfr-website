import { PageHero } from "@/components/PageHero";
import { ImpactNumbers } from "@/components/ImpactNumbers";
import { SectionHeading } from "@/components/SectionHeading";
import { CTABanner } from "@/components/CTABanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Om oss - Norsk Førstehjelpsråd",
  description: "Lær mer om Norsk Førstehjelpsråd, paraplyorganisasjonen for førstehjelp i Norge med 28 medlemsorganisasjoner.",
};

const boardMembers = [
  { name: "Styremedlem 1", title: "Styreleder" },
  { name: "Styremedlem 2", title: "Nestleder" },
  { name: "Styremedlem 3", title: "Styremedlem" },
  { name: "Styremedlem 4", title: "Styremedlem" },
];

export default function OmOss() {
  return (
    <>
      <PageHero
        title="Om Norsk Førstehjelpsråd"
        subtitle="Paraplyorganisasjonen som samler Norges førstehjelpsaktører"
        breadcrumb={[{ label: "Om oss", href: "/om-oss" }]}
      />

      {/* Mission */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionHeading title="Vår oppgave" />
            <div className="prose prose-lg text-nfr-body space-y-6">
              <p className="leading-relaxed">
                Norsk Førstehjelpsråd er paraplyorganisasjonen for førstehjelp i
                Norge. Vi samler 28 medlemsorganisasjoner med til sammen 2,2
                millioner indirekte medlemmer i arbeidet for bedre
                førstehjelpsopplæring.
              </p>
              <p className="leading-relaxed">
                Vårt mål er å profesjonalisere førstehjelpsopplæringen, rådgi
                myndigheter om førstehjelpspolitikk, og sikre at alle i Norge
                har tilgang til livsviktig kunnskap. Vi driver forskning,
                utvikling og kvalitetssikring av førstehjelpskurs.
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

      {/* Member organizations */}
      <section className="py-20 bg-nfr-offwhite">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Våre 28 medlemsorganisasjoner"
            subtitle="Organisasjoner med spesiell interesse for, eller oppgave innen, opplæring i førstehjelp"
            centered
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 28 }).map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="w-16 h-16 rounded-full bg-nfr-offwhite mx-auto mb-4 flex items-center justify-center">
                  <span className="text-nfr-muted text-sm font-bold">{i + 1}</span>
                </div>
                <h3 className="font-semibold text-sm">Medlemsorganisasjon {i + 1}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Styret" centered />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {boardMembers.map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-32 h-32 rounded-full bg-nfr-offwhite mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-12 h-12 text-nfr-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                </div>
                <h3 className="font-bold">{member.name}</h3>
                <p className="text-sm text-nfr-muted">{member.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
