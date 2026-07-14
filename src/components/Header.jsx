import React from 'react';
import MenuItem from './MenuItem';
import { AiFillHome } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import Link from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';

export default function Header() {
  return (
    <header className="max-w-6xl mx-auto p-4">
      <div className="flex items-center justify-between">

        {/* Left Side */}
        <div className="flex items-center gap-4">
          <MenuItem
            title="Home"
            address="/"
            Icon={AiFillHome}
          />

          <MenuItem
            title="About"
            address="/about"
            Icon={BsFillInfoCircleFill}
          />
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
        
          <DarkModeSwitch />

          <Link href="/" className="flex items-center gap-2">
            <span className="bg-amber-500 text-2xl font-bold py-1 px-2 rounded-lg">
              IMDB
            </span>

            <span className="hidden sm:inline text-xl">
              Clone
            </span>
          </Link>
        </div>

      </div>
    </header>
  );
}