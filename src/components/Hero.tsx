import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center bg-gradient-to-br from-nfr-navy via-nfr-navy to-nfr-navy-light overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-nfr-red blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-white blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-3xl">
          <div className="inline-block rounded-full bg-nfr-red/20 px-4 py-1.5 text-sm font-semibold text-nfr-red mb-6 border border-nfr-red/30">
            Paraplyorganisasjonen for førstehjelp
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Sammen redder vi
            <span className="text-nfr-red"> liv</span>
          </h1>
          <p className="text-lg lg:text-xl text-white/80 mb-10 max-w-2xl leading-relaxed">
            Norsk Førstehjelpsråd samler 28 organisasjoner og 2,2 millioner
            indirekte medlemmer i arbeidet for bedre førstehjelpsopplæring i
            hele Norge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/kurs"
              className="rounded-full bg-nfr-red px-8 py-4 text-center text-base font-bold text-white hover:bg-nfr-red-dark transition-colors"
            >
              Finn kurs
            </Link>
            <Link
              href="/bli-medlem"
              className="rounded-full border-2 border-white/30 px-8 py-4 text-center text-base font-bold text-white hover:bg-white/10 transition-colors"
            >
              Bli medlem
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
