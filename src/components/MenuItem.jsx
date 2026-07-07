import { addRequestMeta } from 'next/dist/server/request-meta'
import Link from 'next/link'
import React from 'react'


export default  function MenuItem({title,address,Icon}) {
  return(
    <Link href={address}>
    <Icon/>
    <p className='uppercase'>{title}</p>


    </Link>
  );
}

