"use client";

import Link from 'next/link';
import { useFavorites } from '@/provider';

export default function Result({ results }) {
  const { addFavorite, removeFavorite, isFavorite, mounted } = useFavorites();

  if (!results || results.length === 0) {
    return <p className="mt-6 text-slate-600">No movies found.</p>;
  }

  const toggleFavorite = (e, movie) => {
    e.preventDefault(); // Link এ click হয়ে page navigate হওয়া আটকাচ্ছে
    e.stopPropagation();

    if (isFavorite(movie.id)) {
      removeFavorite(movie.id);
    } else {
      addFavorite({
        id: movie.id,
        title: movie.title,
        name: movie.name,
        poster_path: movie.poster_path,
        media_type: movie.media_type || (movie.title ? "movie" : "tv"),
      });
    }
  };

  return (
    <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {results.map((movie) => (
        <Link
          key={movie.id}
          href={`/movie/${movie.id}`}
          className="relative overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-md dark:bg-slate-800"
        >
          <button
            onClick={(e) => toggleFavorite(e, movie)}
            className="absolute top-2 right-2 z-10 rounded-full bg-white/80 p-1.5 text-lg shadow"
          >
            {mounted && isFavorite(movie.id) ? "❤️" : "🤍"}
          </button>

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
            <p className="font-semibold text-slate-900 line-clamp-1 dark:text-slate-100">
              {movie.title || movie.name}
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-300">⭐ {movie.vote_average?.toFixed(1)}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}