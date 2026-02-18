import Link from "next/link";

interface NewsCardProps {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  image?: string;
}

export function NewsCard({ title, date, excerpt, slug, image }: NewsCardProps) {
  return (
    <article className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
      <div className="aspect-[16/10] bg-nfr-stone overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-nfr-primary/5 to-nfr-sage/10">
            <svg
              className="w-12 h-12 text-nfr-primary/15"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
          </div>
        )}
      </div>
      <div className="p-6">
        <time className="text-sm text-nfr-muted">{date}</time>
        <h3 className="text-lg font-bold mt-2 mb-3 font-[family-name:var(--font-dm-serif)] font-normal group-hover:text-nfr-primary-mid transition-colors">
          {title}
        </h3>
        <p className="text-sm text-nfr-body/80 leading-relaxed line-clamp-3">
          {excerpt}
        </p>
        <Link
          href={`/nyheter-og-innsikt/${slug}`}
          className="inline-flex items-center gap-1 text-sm font-semibold text-nfr-primary-mid mt-4 hover:gap-2 transition-all"
        >
          Les mer
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
