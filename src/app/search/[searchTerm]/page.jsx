export default async function SearchPage({ params }) {
  const { searchTerm } = await params;

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${encodeURIComponent(
      searchTerm
    )}`
  );

  if (!res.ok) {
    return (
      <h1 className="text-center pt-6 text-lg text-red-500">
        Something went wrong fetching results
      </h1>
    );
  }

  const data = await res.json();
  const results = data.results ?? [];

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 py-6 sm:py-10">
      {results.length === 0 ? (
        <h1 className="text-center pt-6 text-lg sm:text-xl font-semibold text-gray-500">
          No results found
        </h1>
      ) : (
        <>
          <h1 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-6">
            Search results for &quot;{searchTerm}&quot;
          </h1>

          <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-5">
            {results.map((result) => (
              <div
                key={result.id}
                className="bg-white rounded-lg sm:rounded-xl shadow-sm sm:shadow-md overflow-hidden hover:shadow-lg sm:hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
              >
                <div className="relative w-full aspect-[2/3] bg-gray-200">
                  {result.poster_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
                      alt={result.title ?? "Movie poster"}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400 text-xs sm:text-sm text-center px-2">
                      No image
                    </div>
                  )}
                </div>

                <div className="p-2 sm:p-3">
                  <h2 className="font-semibold text-xs sm:text-sm line-clamp-2 leading-snug">
                    {result.title ?? "Untitled"}
                  </h2>
                  <div className="flex items-center justify-between mt-1 sm:mt-2 text-[10px] sm:text-xs text-gray-500">
                    <span>{result.release_date?.slice(0, 4) ?? "N/A"}</span>
                    <span className="flex items-center gap-1 text-yellow-500 font-medium">
                      ★ {result.vote_average?.toFixed(1) ?? "—"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}