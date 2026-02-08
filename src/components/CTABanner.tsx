import Link from "next/link";

export function CTABanner() {
  return (
    <section className="bg-nfr-red py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          Bli støttemedlem av Norsk Førstehjelpsråd
        </h2>
        <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
          Støtt arbeidet for bedre førstehjelpsopplæring i Norge. Hver krone
          investert i førstehjelp gir 12 kroner tilbake til samfunnet.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/bli-medlem"
            className="rounded-full bg-white px-8 py-4 text-base font-bold text-nfr-red hover:bg-white/90 transition-colors"
          >
            Bli medlem
          </Link>
          <Link
            href="/kontakt"
            className="rounded-full border-2 border-white/40 px-8 py-4 text-base font-bold text-white hover:bg-white/10 transition-colors"
          >
            Kontakt oss
          </Link>
        </div>
      </div>
    </section>
  );
}
