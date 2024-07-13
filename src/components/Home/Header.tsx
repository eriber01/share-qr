import Link from 'next/link'
import React from 'react'
import { ImageIcons } from '../ImageIcons'

export const Header = () => {
  return (
    <>
      <header className="flex items-center justify-between px-4 md:px-6 h-14 bg-background">
        <Link href="/" className="flex items-center justify-center" prefetch={false}>
          <ImageIcons
            alt='home'
            image='/favicon.ico'
            size={32}
          />
        </Link>
        <Link
          href="#"
          className="inline-flex h-9 items-center justify-center rounded-md bg-[#8B5CF6] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#7C3AED] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
        >
          Login
        </Link>
      </header>
    </>
  )
}
