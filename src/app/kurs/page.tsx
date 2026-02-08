import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { CTABanner } from "@/components/CTABanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kurs - Norsk Førstehjelpsråd",
  description: "Finn førstehjelpskurs for privatpersoner, bedrifter og instruktører gjennom Norsk Førstehjelpsråd.",
};

const courses = [
  {
    title: "Grunnkurs førstehjelp",
    description:
      "For privatpersoner som ønsker grunnleggende førstehjelpsopplæring. Lær livsviktige ferdigheter som kan utgjøre forskjellen i en nødsituasjon.",
    duration: "8 timer",
    audience: "Alle",
  },
  {
    title: "Bedriftskurs",
    description:
      "Skreddersydd førstehjelpsopplæring for din arbeidsplass. Oppfyll HMS-krav og gi dine ansatte trygghet til å handle når det gjelder.",
    duration: "4-16 timer",
    audience: "Bedrifter",
  },
  {
    title: "Instruktørkurs",
    description:
      "Bli godkjent førstehjelpsinstruktør. For deg som ønsker å undervise i førstehjelp gjennom våre medlemsorganisasjoner.",
    duration: "40 timer",
    audience: "Instruktører",
  },
  {
    title: "Spesialkurs",
    description:
      "Avanserte kurs i livredning, hjerte-lungeredning, og spesialtilpassede kurs for ulike sektorer og behov.",
    duration: "Varierer",
    audience: "Spesialisert",
  },
];

export default function Kurs() {
  return (
    <>
      <PageHero
        title="Førstehjelpskurs"
        subtitle="Finn riktig kurs for deg, din bedrift eller organisasjon"
        breadcrumb={[{ label: "Kurs", href: "/kurs" }]}
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {courses.map((course) => (
              <div
                key={course.title}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[16/9] bg-gradient-to-br from-nfr-navy/5 to-nfr-red/5 flex items-center justify-center">
                  <svg className="w-16 h-16 text-nfr-navy/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
                  </svg>
                </div>
                <div className="p-8">
                  <div className="flex gap-3 mb-4">
                    <span className="inline-block rounded-full bg-nfr-navy/10 px-3 py-1 text-xs font-semibold text-nfr-navy">
                      {course.duration}
                    </span>
                    <span className="inline-block rounded-full bg-nfr-red/10 px-3 py-1 text-xs font-semibold text-nfr-red">
                      {course.audience}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4 group-hover:text-nfr-red transition-colors">
                    {course.title}
                  </h2>
                  <p className="text-nfr-body leading-relaxed mb-6">
                    {course.description}
                  </p>
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center gap-2 text-nfr-red font-semibold hover:gap-3 transition-all"
                  >
                    Kontakt oss for mer info
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor info */}
      <section className="py-16 bg-nfr-offwhite">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-nfr-body max-w-2xl mx-auto">
            Kursene gjennomføres av våre{" "}
            <strong className="text-nfr-dark">4 027 godkjente instruktører</strong>{" "}
            gjennom våre medlemsorganisasjoner over hele Norge.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 mt-8 rounded-full bg-nfr-navy px-8 py-4 font-bold text-white hover:bg-nfr-navy-light transition-colors"
          >
            Kontakt oss for tilpasset kurs
          </Link>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
