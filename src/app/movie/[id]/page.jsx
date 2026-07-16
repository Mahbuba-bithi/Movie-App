import Link from 'next/link';

const API_KEY = process.env.API_KEY;

export default async function MoviePage({ params }) {
  const { id } = await params;

  if (!API_KEY) {
    return (
      <div className="min-h-screen bg-slate-50 px-4 py-10 dark:bg-slate-900">
        <div className="mx-auto max-w-4xl rounded-3xl bg-white p-8 shadow-sm dark:bg-slate-800">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Movie details unavailable</h1>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            TMDB API key is missing. Add API_KEY to .env.local in the my-app folder.
          </p>
          <Link href="/" className="mt-6 inline-block rounded-xl bg-slate-900 px-4 py-2 text-white">
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`,
    { cache: 'no-store' }
  );

  if (!res.ok) {
    return (
      <div className="min-h-screen bg-slate-50 px-4 py-10 dark:bg-slate-900">
        <div className="mx-auto max-w-4xl rounded-3xl bg-white p-8 shadow-sm dark:bg-slate-800">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Movie not found</h1>
          <p className="mt-3 text-slate-600 dark:text-slate-300">The requested movie could not be loaded.</p>
          <Link href="/" className="mt-6 inline-block rounded-xl bg-slate-900 px-4 py-2 text-white">
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  const movie = await res.json();

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10 dark:bg-slate-900">
      <div className="mx-auto grid max-w-6xl gap-8 rounded-3xl bg-white p-6 shadow-sm dark:bg-slate-800 md:grid-cols-[280px_1fr] md:p-8">
        <div className="overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-700">
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-96 items-center justify-center text-slate-500 dark:text-slate-300">No Image</div>
          )}
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-amber-600">Movie Details</p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900 dark:text-slate-100">{movie.title}</h1>
          <p className="mt-3 text-slate-600 dark:text-slate-300">{movie.overview || 'No description available.'}</p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-600 dark:text-slate-300">
            <span className="rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-700">⭐ {movie.vote_average?.toFixed(1)}</span>
            <span className="rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-700">Release: {movie.release_date || 'N/A'}</span>
            <span className="rounded-full bg-slate-100 px-3 py-1 dark:bg-slate-700">Runtime: {movie.runtime || 'N/A'} min</span>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {(movie.genres || []).slice(0, 5).map((genre) => (
              <span key={genre.id} className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700 dark:bg-slate-700 dark:text-slate-200">
                {genre.name}
              </span>
            ))}
          </div>

          <Link href="/" className="mt-8 inline-block rounded-xl bg-slate-900 px-4 py-2 text-white">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
