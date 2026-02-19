import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { articles, getArticleBySlug } from "@/data/articles";
import { withBasePath } from "@/lib/basePath";
import type { Metadata } from "next";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Artikkel ikke funnet" };
  return {
    title: `${article.title} - Norsk Førstehjelpsråd`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  // Find related articles (exclude current, take 3)
  const related = articles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  return (
    <>
      {/* Hero image */}
      <div className="relative w-full h-[40vh] md:h-[50vh] lg:h-[60vh] bg-nfr-primary">
        <Image
          src={withBasePath(article.image)}
          alt={article.imageAlt}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-nfr-primary/80 via-nfr-primary/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 pb-10 pt-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
              <Link href="/" className="hover:text-white transition-colors">
                Hjem
              </Link>
              <span>/</span>
              <Link
                href="/nyheter-og-innsikt"
                className="hover:text-white transition-colors"
              >
                Nyheter & innsikt
              </Link>
              <span>/</span>
              <span className="text-white/80 truncate max-w-[200px]">
                {article.title}
              </span>
            </nav>
            <time className="text-sm text-nfr-accent font-medium">
              {article.date}
            </time>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 leading-tight">
              {article.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Article body */}
      <article className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Lead paragraph */}
            <p className="text-xl md:text-2xl text-nfr-body leading-relaxed mb-10 font-[family-name:var(--font-dm-serif)]">
              {article.excerpt}
            </p>

            {/* Body paragraphs */}
            <div className="prose prose-lg max-w-none">
              {article.body.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-nfr-body leading-relaxed mb-6"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Source */}
            {article.source && (
              <div className="mt-12 pt-8 border-t border-nfr-stone/30">
                <p className="text-sm text-nfr-muted">
                  <span className="font-semibold">Kilde:</span>{" "}
                  {article.source}
                </p>
              </div>
            )}
          </div>
        </div>
      </article>

      {/* Related articles */}
      <section className="py-16 bg-nfr-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-nfr-dark mb-8">
            Flere artikler
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {related.map((rel) => (
              <Link
                key={rel.slug}
                href={`/nyheter-og-innsikt/${rel.slug}`}
                className="group"
              >
                <article className="bg-white rounded-2xl overflow-hidden shadow-sm group-hover:shadow-lg transition-shadow h-full">
                  <div className="aspect-[16/10] relative overflow-hidden">
                    <Image
                      src={withBasePath(rel.image)}
                      alt={rel.imageAlt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <time className="text-sm text-nfr-muted">{rel.date}</time>
                    <h3 className="text-lg mt-2 mb-2 font-[family-name:var(--font-dm-serif)] text-nfr-dark group-hover:text-nfr-primary-mid transition-colors">
                      {rel.title}
                    </h3>
                  </div>
                </article>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/nyheter-og-innsikt"
              className="inline-flex items-center gap-2 text-nfr-primary-mid font-semibold hover:gap-3 transition-all"
            >
              Alle nyheter
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
