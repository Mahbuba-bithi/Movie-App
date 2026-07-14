"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${encodeURIComponent(search)}`);
  };

  return (
    <form onSubmit={handleSubmit}  className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search keywords..."
        className="flex-1 h-14 rounded-md border px-4 outline-none bg-transparent"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button
        type="submit"
        className="px-4 py-2 bg-amber-600 text-white rounded disabled:opacity-50"
        disabled={!search}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;