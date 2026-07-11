"use client"

import { useRouter, useSearchParams } from 'next/navigation';

const filters = [
  { label: 'Trending', value: 'fetchTrending' },
  { label: 'Top Rated', value: 'fetchTopRated' },
];

export default function FilterButtons() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const activeFilter = searchParams.get('genre') || 'fetchTrending';

  const handleClick = (value) => {
    router.push(`/?genre=${value}`);
  };

  return (
    <div className="mb-8 flex flex-wrap items-center gap-3">
      {filters.map((filter) => {
        const isActive = activeFilter === filter.value;
        return (
          <button
            key={filter.value}
            type="button"
            onClick={() => handleClick(filter.value)}
            className={`rounded-full px-5 py-2 font-semibold transition ${
              isActive
                ? 'bg-orange-500 text-white shadow-lg shadow-orange-200'
                : 'border border-slate-300 bg-white text-slate-700 hover:border-orange-400 hover:text-orange-600'
            }`}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
