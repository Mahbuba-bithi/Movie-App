import React from 'react';
import MenuItem from './MenuItem';
import { AiFillHome } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#F5C518]/15 bg-white text-slate-900 backdrop-blur-sm dark:bg-gray-800 dark:text-slate-100">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Left Side — nav */}
        <nav className="flex items-center gap-1">
          <MenuItem
            title="Home"
            address="/"
            Icon={AiFillHome}
            className="group relative px-3 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-black transition-colors hover:text-[#F5C518] dark:text-slate-200"
          />

          <MenuItem
            title="About"
            address="/about"
            Icon={BsFillInfoCircleFill}
            className="group relative px-3 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-black transition-colors hover:text-[#F5C518] dark:text-slate-200"
          />
        </nav>

        {/* Right Side — switch + ticket-stub logo */}
        <div className="flex items-center gap-5">

          <DarkModeSwitch />

          <Link href="/" className="flex items-center gap-3 group">
            {/* Ticket stub badge — signature element */}
            <span
              className="relative flex items-center gap-1.5 bg-[#F5C518] text-[#0B0B0E] font-black text-xl px-3 py-1.5 leading-none shadow-[0_0_0_1px_rgba(11,11,14,0.05)] transition-transform duration-200 group-hover:-translate-y-0.5"
              style={{
                fontFamily: '"Bebas Neue", "Arial Narrow", sans-serif',
                letterSpacing: '0.03em',
                clipPath:
                  'polygon(0% 0%, 100% 0%, 100% 30%, 94% 50%, 100% 70%, 100% 100%, 0% 100%, 0% 70%, 6% 50%, 0% 30%)',
              }}
            >
              IMDB
            </span>

            <span className="hidden sm:inline text-sm font-medium uppercase tracking-[0.2em] text-black dark:text-slate-200">
              Clone
            </span>
          </Link>
        </div>

      </div>
    </header>
  );
}