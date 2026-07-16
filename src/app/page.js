import Result from "@/components/Result";
import FilterButtons from "@/components/FilterButtons";
import SearchBox from "@/components/SearchBox";
import SuggestedSection from "@/components/SuggestedSection";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error(
    'TMDB API key is missing. Add API_KEY to .env.local in the my-app folder.'
  );
}

export default async function Home({ searchParams }) {
  const params = await searchParams; // <-- এই লাইনটা যোগ করুন
  const genreParam = params.genre;    // <-- searchParams এর বদলে params ব্যবহার করুন
  const genre = Array.isArray(genreParam)
    ? genreParam[0]
    : genreParam || 'fetchTrending';
  const category = genre === 'fetchTopRated' ? 'Top Rated' : 'Trending';
  const endpoint =
    genre === 'fetchTopRated'
      ? `/movie/top_rated`
      : `/trending/all/week`;

  await new Promise((resolve) => setTimeout(resolve, 2000));

  const res = await fetch(
    `https://api.themoviedb.org/3${endpoint}?api_key=${API_KEY}&language=en-US&page=1`,
    { cache: 'no-store' }
  );

  if (!res.ok) {
    console.log("Fetch error status:", res.status);
    throw new Error(`failed to fetch data. Status: ${res.status}`);
  }

  const data = await res.json();
  const results = Array.isArray(data?.results) ? data.results : [];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="mb-6 rounded-3xl bg-white px-6 py-5 shadow-sm dark:bg-slate-800 dark:text-slate-100">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">{category} Movies</h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Showing {results.length} items.</p>
        </div>
        <SearchBox />
        <FilterButtons />
        <Result results={results} />
        <SuggestedSection />
      </div>
    </div>
  );
}