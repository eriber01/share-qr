'use client'
import Link from 'next/link'
import React from 'react'
import { ImageIcons } from '../ImageIcons'
import { SignInButton, SignOutButton, useAuth } from '@clerk/nextjs'
import { Button } from '../ui/button'

export const Header = () => {
  const { userId } = useAuth()

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

        {
          userId ?
            <SignOutButton>
              <Button
                className='h-9 rounded-md bg-[#ff0d5d] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#ff0d5eab] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
              >
                Logout
              </Button>
            </SignOutButton>
            :
            <SignInButton mode='modal'>
              <Button
                className='h-9 rounded-md bg-[#8B5CF6] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#7C3AED] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
              >
                Login
              </Button>
            </SignInButton>
        }

      </header>
    </>
  )
}
