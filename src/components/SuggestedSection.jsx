"use client";
import { useEffect, useState } from "react";
import { useFavorites } from "@/provider";

export default function SuggestedSection() {
  const { favorites = [] } = useFavorites();
  const [suggested, setSuggested] = useState([]);

  useEffect(() => {
    if (!favorites.length) return;

    const ids = favorites.map((f) => f.id).join(",");
    const types = favorites.map((f) => f.media_type).join(",");

    fetch(`/api/suggested?ids=${ids}&types=${types}`)
      .then((res) => res.json())
      .then((data) => {
        setSuggested(data);
      })
      .catch(() => {
        setSuggested([]);
      });
  }, [favorites]);

  if (!favorites.length) return null;

  return (
    <section className="mt-8">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {suggested.map((movie) => (
          <div key={movie.id} className="overflow-hidden rounded-2xl bg-white shadow-sm dark:bg-slate-800">
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title || movie.name}
              className="h-auto w-full"
            />
            <p className="p-3 font-semibold text-slate-900 dark:text-slate-100">{movie.title || movie.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}