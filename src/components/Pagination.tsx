import Link from 'next/link';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export default function Pagination({ currentPage, totalPages }: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  
  return (
    <nav className="flex justify-center items-center gap-2 mt-12" aria-label="Blog-Seiten Navigation">
      {/* Zurück-Button */}
      {currentPage > 1 ? (
        <Link
          href={currentPage === 2 ? '/blog' : `/blog/page/${currentPage - 1}`}
          className="px-4 py-2 text-burgundy hover:text-coral transition-colors"
          aria-label="Vorherige Seite"
        >
          ← Zurück
        </Link>
      ) : (
        <span className="px-4 py-2 text-burgundy/30 cursor-not-allowed">
          ← Zurück
        </span>
      )}

      {/* Seitenzahlen */}
      <div className="flex gap-1">
        {pages.map((page) => (
          <Link
            key={page}
            href={page === 1 ? '/blog' : `/blog/page/${page}`}
            className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors ${
              page === currentPage
                ? 'bg-burgundy text-white'
                : 'text-burgundy hover:bg-coral/10 hover:text-coral'
            }`}
            aria-label={`Seite ${page}`}
            aria-current={page === currentPage ? 'page' : undefined}
          >
            {page}
          </Link>
        ))}
      </div>

      {/* Weiter-Button */}
      {currentPage < totalPages ? (
        <Link
          href={`/blog/page/${currentPage + 1}`}
          className="px-4 py-2 text-burgundy hover:text-coral transition-colors"
          aria-label="Nächste Seite"
        >
          Weiter →
        </Link>
      ) : (
        <span className="px-4 py-2 text-burgundy/30 cursor-not-allowed">
          Weiter →
        </span>
      )}
    </nav>
  );
}
