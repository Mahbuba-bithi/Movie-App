// components/FavoritesProvider.jsx
"use client";
import { createContext, useContext, useMemo, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    if (typeof window === "undefined") return [];

    const stored = window.localStorage.getItem("favoriteMovies");
    return stored ? JSON.parse(stored) : [];
  });

  const save = (updated) => {
    setFavorites(updated);
    window.localStorage.setItem("favoriteMovies", JSON.stringify(updated));
  };

  const addFavorite = (movie) => save([...favorites, movie]);
  const removeFavorite = (id) => save(favorites.filter((m) => m.id !== id));
  const isFavorite = (id) => favorites.some((m) => m.id === id);

  const value = useMemo(
    () => ({ favorites, addFavorite, removeFavorite, isFavorite }),
    [favorites]
  );

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export const useFavorites = () => useContext(FavoritesContext);