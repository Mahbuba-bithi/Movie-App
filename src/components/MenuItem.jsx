import { addRequestMeta } from 'next/dist/server/request-meta'
import Link from 'next/link'
import React from 'react'


export default function MenuItem({ title, address, Icon, className = '' }) {
  return (
    <Link href={address} className={`hover:text-amber-500 ${className}`}>
      <Icon className='text-2xl sm:hidden' />
      <p className='uppercase hidden sm:inline text-sm'>{title}</p>
    </Link>
  );
}

