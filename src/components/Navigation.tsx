"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { withBasePath } from "@/lib/basePath";

const navLinks = [
  { href: "/om-nfr", label: "Om NFR" },
  { href: "/forstehjelp-og-fag", label: "Førstehjelp & fag" },
  { href: "/kurs-og-opplaering", label: "Kurs & opplæring" },
  { href: "/kvalitet-og-godkjenninger", label: "Kvalitet & godkjenninger" },
  { href: "/prosjekter-og-konsepter", label: "Prosjekter & konsepter" },
  { href: "/nyheter-og-innsikt", label: "Nyheter & innsikt" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex-shrink-0">
            <img
              src={withBasePath("/images/nfr-logo.svg")}
              alt="Norsk Førstehjelpsråd"
              width={200}
              height={54}
              className={scrolled ? "" : "brightness-0 invert"}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors whitespace-nowrap ${
                  scrolled
                    ? "text-nfr-dark hover:text-nfr-primary-mid"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/stott-oss"
              className="rounded-full bg-nfr-accent px-6 py-2.5 text-sm font-semibold text-nfr-primary hover:bg-nfr-accent-dark transition-colors whitespace-nowrap"
            >
              Støtt oss
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-6 transition-transform ${
                  scrolled ? "bg-nfr-dark" : "bg-white"
                } ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`block h-0.5 w-6 transition-opacity ${
                  scrolled ? "bg-nfr-dark" : "bg-white"
                } ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-6 transition-transform ${
                  scrolled ? "bg-nfr-dark" : "bg-white"
                } ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-nfr-stone">
          <nav className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-nfr-dark hover:text-nfr-primary-mid py-2"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/stott-oss"
              className="rounded-full bg-nfr-accent px-6 py-3 text-center text-sm font-semibold text-nfr-primary hover:bg-nfr-accent-dark transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Støtt oss
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
