"use client";

import { createContext, useContext, useEffect, useMemo, useState, useCallback } from "react";

const ThemeContext = createContext({
  theme: "light",
  setTheme: () => {},
  mounted: false,
});

const FavoritesContext = createContext({
  favorites: [],
  addFavorite: () => {},
  removeFavorite: () => {},
  isFavorite: () => false,
  mounted: false,
});

export function useAppTheme() {
  return useContext(ThemeContext);
}

export function useFavorites() {
  return useContext(FavoritesContext);
}

function useFavoritesState() {
  const [favorites, setFavorites] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("favoriteMovies");
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
    setMounted(true);
  }, []);

  const save = useCallback((updated) => {
    setFavorites(updated);
    window.localStorage.setItem("favoriteMovies", JSON.stringify(updated));
  }, []);

  const addFavorite = useCallback((movie) => {
    save([...favorites, movie]);
  }, [favorites, save]);

  const removeFavorite = useCallback((id) => {
    save(favorites.filter((m) => m.id !== id));
  }, [favorites, save]);

  const isFavorite = useCallback((id) => favorites.some((m) => m.id === id), [favorites]);

  return useMemo(
    () => ({ favorites, addFavorite, removeFavorite, isFavorite, mounted }),
    [favorites, addFavorite, removeFavorite, isFavorite, mounted]
  );
}

export default function Providers({ children }) {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = storedTheme === "dark" || storedTheme === "light"
      ? storedTheme
      : systemPrefersDark
        ? "dark"
        : "light";

    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
    document.documentElement.style.colorScheme = initialTheme;
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem("theme", theme);
  }, [mounted, theme]);

  const themeValue = useMemo(
    () => ({ theme, setTheme, mounted }),
    [theme, mounted]
  );

  const favoritesValue = useFavoritesState();

  return (
    <ThemeContext.Provider value={themeValue}>
      <FavoritesContext.Provider value={favoritesValue}>
        <div className="min-h-screen bg-white text-gray-700 transition-colors duration-300 select-none dark:bg-gray-700 dark:text-gray-200">
          {children}
        </div>
      </FavoritesContext.Provider>
    </ThemeContext.Provider>
  );
}