import React from "react";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md text-slate-900 dark:bg-gray-800 dark:text-slate-100">
      <div className="max-w-6xl mx-auto flex justify-center gap-8 px-6 py-4">
        <NavbarItem title="Trending" param="fetchTrending" />
        <NavbarItem title="Top Rated" param="fetchTopRated" />
      </div>
    </nav>
  );
};

export default Navbar;