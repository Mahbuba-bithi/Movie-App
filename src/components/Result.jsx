import Link from 'next/link';

export default function Result({ results }) {
  if (!results || results.length === 0) {
    return <p className="mt-6 text-slate-600">No movies found.</p>;
  }

  return (
    <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {results.map((movie) => (
        <Link
          key={movie.id}
          href={`/movie/${movie.id}`}
          className="overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-md"
        >
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title || movie.name}
              className="h-auto w-full"
            />
          ) : (
            <div className="flex h-64 items-center justify-center bg-slate-200 text-slate-500">
              No Image
            </div>
          )}
          <div className="p-3">
            <p className="font-semibold text-slate-900 line-clamp-1">
              {movie.title || movie.name}
            </p>
            <p className="text-sm text-slate-600">⭐ {movie.vote_average?.toFixed(1)}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}