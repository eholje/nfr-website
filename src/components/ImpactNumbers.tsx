"use client";

import { useEffect, useRef, useState } from "react";

const challenges = [
  {
    value: "56%",
    label: "nøler med å hjelpe",
    context: "i en krisesituasjon",
    source: "Røde Kors 2025",
  },
  {
    value: "49%",
    label: "usikre på HLR",
    context: "hjerte-lungeredning",
    source: "LHL 2025",
  },
  {
    value: "58%",
    label: "ser ikke seg selv",
    context: "som del av akuttberedskapen",
    source: "SNLA 2025",
  },
];

const impact = [
  {
    value: "28",
    label: "Organisasjoner i NFR",
    source: "Norsk Førstehjelpsråd",
  },
  {
    value: "2,2M+",
    label: "Indirekte medlemmer",
    source: "Medlemsorganisasjonene",
  },
  {
    value: "78%",
    label: "Får HLR av tilstedeværende",
    source: "Norsk hjertestansregister",
  },
  {
    value: "457",
    label: "Liv reddet i 2024",
    source: "Norsk hjertestansregister",
  },
  {
    value: "9",
    label: "Strategiske satsningsområder",
    source: "NFR Strategi 2025–2030",
  },
];

export function ImpactNumbers() {
  const challengeRef = useRef<HTMLDivElement>(null);
  const impactRef = useRef<HTMLDivElement>(null);
  const [challengeVisible, setChallengeVisible] = useState(false);
  const [impactVisible, setImpactVisible] = useState(false);

  useEffect(() => {
    const observerChallenge = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setChallengeVisible(true);
          observerChallenge.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    const observerImpact = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImpactVisible(true);
          observerImpact.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (challengeRef.current) observerChallenge.observe(challengeRef.current);
    if (impactRef.current) observerImpact.observe(impactRef.current);

    return () => {
      observerChallenge.disconnect();
      observerImpact.disconnect();
    };
  }, []);

  return (
    <>
      {/* Part 1: Utfordringen */}
      <section ref={challengeRef} className="bg-nfr-midnight py-24 relative overflow-hidden">
        <div className="absolute inset-0 nordlys-glow pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-nfr-gold font-medium tracking-wide uppercase text-sm mb-4">
            Utfordringen
          </p>
          <h2 className="text-3xl sm:text-4xl text-white mb-16 font-[family-name:var(--font-dm-serif)]">
            Hvorfor førstehjelp angår alle
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {challenges.map((stat, i) => (
              <div
                key={stat.label}
                className={`${
                  challengeVisible ? "animate-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="text-6xl lg:text-7xl xl:text-8xl gold-highlight mb-4 font-[family-name:var(--font-dm-serif)]">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-white/90 mb-1">
                  {stat.label}
                </div>
                <div className="text-base text-white/60 font-light mb-3">
                  {stat.context}
                </div>
                <div className="text-xs text-white/50">
                  Kilde: {stat.source}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Part 2: Vår innsats */}
      <section ref={impactRef} className="bg-nfr-cream py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-nfr-accent-text font-medium tracking-wide uppercase text-sm mb-4">
            Vår innsats
          </p>
          <h2 className="text-3xl sm:text-4xl text-nfr-primary mb-16 font-[family-name:var(--font-dm-serif)]">
            Resultater som teller
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
            {impact.map((stat, i) => (
              <div
                key={stat.label}
                className={`${
                  impactVisible ? "animate-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="text-5xl lg:text-6xl text-nfr-accent-text mb-3 font-[family-name:var(--font-dm-serif)]">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-nfr-primary/90 uppercase tracking-wider mb-2">
                  {stat.label}
                </div>
                <div className="text-xs text-nfr-muted">
                  Kilde: {stat.source}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
