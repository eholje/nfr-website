"use client";

import { useEffect, useRef, useState } from "react";

const diseaseStats = [
  { value: "9 691", label: "Hjerneslag", source: "FHI / Norske kvalitetsregistre" },
  { value: "8 845", label: "Hjerteinfarkt", source: "FHI / Norske kvalitetsregistre" },
  { value: "16 000+", label: "Sepsis (blodforgiftning)", source: "Helsedirektoratet" },
];

const cardiacStats = [
  { value: "2 553", label: "Kunne fått HLR", desc: "personer med hjertestans der HLR var aktuelt" },
  { value: "457", label: "Liv reddet i 2024", desc: "94% med godt nevrologisk utfall" },
  { value: "78%", label: "Fikk HLR av tilstedeværende", desc: "verdensrekord — takket være opplæring" },
];

const injuryStats = [
  { value: "1 951", label: "Døde av skader", year: "2022" },
  { value: "620 000", label: "Fikk medisinsk hjelp for skader", year: "12% av befolkningen" },
  { value: "90", label: "Drept i trafikken", year: "~600 hardt skadd" },
  { value: "95", label: "Arbeidsulykker med døden", year: "2022" },
];

const deathCauses = [
  { cause: "Fall", pct: 40 },
  { cause: "Forgiftning/overdose", pct: 17 },
  { cause: "Kvelning", pct: 3 },
  { cause: "Brannskader", pct: 2 },
];

export function WhyFirstAid() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-nfr-midnight relative overflow-hidden">
      <div className="absolute inset-0 nordlys-glow pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-nfr-gold font-medium tracking-wide uppercase text-sm mb-4">
          Hvorfor førstehjelp
        </p>
        <h2 className="text-3xl sm:text-4xl text-white mb-6 font-bold max-w-2xl">
          Hvert år rammes tusenvis av nordmenn av akutt sykdom og skader
        </h2>
        <p className="text-lg text-white/60 mb-16 max-w-3xl leading-relaxed">
          Førstehjelp handler ikke bare om hjertestans. Sykdom, ulykker og skader
          rammer bredt — og den første hjelpen du gir kan være avgjørende.
        </p>

        {/* Disease statistics */}
        <div className="mb-16">
          <p className="text-white/40 text-xs font-medium tracking-widest uppercase mb-8">
            Sykdom — årlige tilfeller i Norge
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {diseaseStats.map((stat, i) => (
              <div
                key={stat.label}
                className={`bg-white/5 rounded-2xl p-8 ${visible ? "animate-in" : "opacity-0"}`}
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <div className="text-4xl lg:text-5xl gold-highlight mb-3 font-bold">
                  {stat.value}
                </div>
                <div className="text-white font-semibold mb-1">{stat.label}</div>
                <div className="text-white/40 text-xs">{stat.source}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Cardiac arrest */}
        <div className="mb-16">
          <p className="text-white/40 text-xs font-medium tracking-widest uppercase mb-8">
            Hjertestans — der førstehjelp redder flest liv
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cardiacStats.map((stat, i) => (
              <div
                key={stat.label}
                className={`bg-white/5 rounded-2xl p-8 ${visible ? "animate-in" : "opacity-0"}`}
                style={{ animationDelay: `${(i + 3) * 120}ms` }}
              >
                <div className="text-4xl lg:text-5xl gold-highlight mb-3 font-bold">
                  {stat.value}
                </div>
                <div className="text-white font-semibold mb-1">{stat.label}</div>
                <div className="text-white/50 text-sm">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Injury and accident deaths */}
        <div className="mb-16">
          <p className="text-white/40 text-xs font-medium tracking-widest uppercase mb-8">
            Skader og ulykker
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {injuryStats.map((stat, i) => (
              <div
                key={stat.label}
                className={`${visible ? "animate-in" : "opacity-0"}`}
                style={{ animationDelay: `${(i + 6) * 120}ms` }}
              >
                <div className="text-3xl lg:text-4xl text-white font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-white/80 text-sm font-medium mb-1">{stat.label}</div>
                <div className="text-white/40 text-xs">{stat.year}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Death causes breakdown */}
        <div>
          <p className="text-white/40 text-xs font-medium tracking-widest uppercase mb-6">
            Dødsårsaker ved skader
          </p>
          <div className="flex flex-wrap gap-4">
            {deathCauses.map((item) => (
              <div key={item.cause} className="flex items-center gap-3">
                <div className="h-2 rounded-full bg-nfr-gold/70" style={{ width: `${item.pct * 2.5}px` }} />
                <span className="text-white/70 text-sm">
                  {item.cause} <span className="text-white/40">{item.pct}%</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* The 10-minute rule */}
        <div className="mt-16 border-t border-white/10 pt-12">
          <blockquote className="max-w-3xl">
            <p className="text-xl lg:text-2xl text-white/80 leading-relaxed italic">
              &ldquo;Den første hjelpen du gir de første 10 minutter er like viktig
              som den behandlingen helsetjenesten kan gi de neste 10 dager.&rdquo;
            </p>
            <footer className="mt-4">
              <span className="text-white/60 text-sm">Conrad Arnfinn Bjørshol</span>
              <span className="text-white/30 text-xs ml-3">Mathiesen 2018, Böttiger 2020</span>
            </footer>
          </blockquote>
        </div>

        {/* Sources */}
        <p className="mt-12 text-white/30 text-xs">
          Kilder: Folkehelseinstituttet, Helsedirektoratet, Norsk hjertestansregister, Norske kvalitetsregistre (2022–2024)
        </p>
      </div>
    </section>
  );
}
