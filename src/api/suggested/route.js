// src/app/api/suggested/route.js
export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const ids = searchParams.get("ids")?.split(",") || [];
  const types = searchParams.get("types")?.split(",") || [];

  if (ids.length === 0) {
    return Response.json([]);
  }

  const sample = ids.slice(0, 5);

  const results = await Promise.all(
    sample.map((id, i) => {
      const type = types[i] === "tv" ? "tv" : "movie";
      return fetch(
        `https://api.themoviedb.org/3/${type}/${id}/recommendations?api_key=${process.env.API_KEY}`
      ).then((res) => res.json());
    })
  );

  let allMovies = results.flatMap((r) => r.results || []);
  const unique = Array.from(new Map(allMovies.map((m) => [m.id, m])).values());
  const filtered = unique.filter((m) => !ids.includes(String(m.id)));

  return Response.json(filtered.slice(0, 20));
}