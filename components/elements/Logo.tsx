import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href={`/`}>
        <h1 className='font-google-sans text-xl tracking-[1.5] font-semibold uppercase'>Eko Ejembi Eko (SAN)</h1>
        <p className='tracking-[1.2em] text-xs text-eee-dark-gray'>& ASSOCIATES</p>
    </Link>
  )
}

export default Logo