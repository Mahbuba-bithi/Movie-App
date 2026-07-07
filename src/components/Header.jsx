import React from 'react';
import MenuItem from './MenuItem'; // path অনুযায়ী ঠিক করো
import { AiFillHome } from 'react-icons/ai'; // উদাহরণস্বরূপ, হিরো আইকন ব্যবহার করা হয়েছে
import { BsFillInfoCircleFill } from 'react-icons/bs';
import Link from 'next/link';

export default function Header() {
  return (
    <div className=' flex justify-between items-center p-4 max-w-6xl '>
      <div className='flex gap-4'>
        <MenuItem title="Home" address="/" Icon={AiFillHome} />
        <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} />
      </div>

      <Link href="/" className='flex gap-4'>
       <span className='text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg'>IMDB</span>
       <span className='text-xl hidden sm:inline '>clone</span>
      </Link>
    </div>
  );
}