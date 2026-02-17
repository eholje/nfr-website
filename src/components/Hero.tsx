import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[700px] lg:min-h-[800px] flex items-center bg-nfr-primary overflow-hidden">
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-nfr-sage blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-nfr-accent blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 pb-24 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          {/* Left: editorial type */}
          <div className="lg:col-span-7">
            <p className="text-nfr-accent font-medium tracking-wide uppercase text-sm mb-8">
              Norsk Førstehjelpsråd
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white leading-[0.95] mb-8">
              Kunnskap som
              <br />
              redder{" "}
              <span className="text-nfr-accent italic">liv</span>
            </h1>
            <p className="text-lg lg:text-xl text-white/70 mb-12 max-w-xl leading-relaxed font-light">
              Norges normerende autoritet for førstehjelp. Vi setter faglige
              standarder, kvalitetssikrer opplæring og samler 28 organisasjoner
              i arbeidet for å redde flere liv.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/for-instruktorer"
                className="rounded-full bg-nfr-accent px-8 py-4 text-center text-base font-semibold text-nfr-primary hover:bg-nfr-accent-dark transition-colors"
              >
                Våre retningslinjer
              </Link>
              <Link
                href="/om-oss"
                className="rounded-full border border-white/20 px-8 py-4 text-center text-base font-medium text-white hover:bg-white/5 transition-colors"
              >
                Om Fagrådet
              </Link>
            </div>
          </div>

          {/* Right: key quote */}
          <div className="lg:col-span-5 hidden lg:block">
            <blockquote className="border-l-2 border-nfr-accent/40 pl-8">
              <p className="text-xl text-white/60 leading-relaxed italic">
                &ldquo;Den første hjelpen du gir de første 10 minutter er like
                viktig som den behandlingen helsetjenesten kan gi de neste 10
                dager.&rdquo;
              </p>
            </blockquote>
          </div>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-nfr-accent/30 to-transparent" />
    </section>
  );
}
