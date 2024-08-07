import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../../ui/tooltip'
import Link from 'next/link'
import { HomeIcon } from '../../ui/HomeIcon'
import { InboxIcon } from '../../ui/InboxIcon'
import { FileIcon } from '../../ui/FileIcon'
import { Button } from '../../ui/button'
import LogOutIcon from '../../ui/LogOutIcon'
import { TooltipItem } from './CloseNavItem'
import { AddQrButtonCloseNav } from '@/components/ui/AddQrButtonCloseNav'

export const CloseNav = () => {
  return (
    <>
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-purple-500 sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <TooltipProvider>
            <Link
              href="/"
              className="mb-5 flex h-9 w-9 items-center justify-center bg-accent rounded-lg text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              prefetch={false}
            >
              <HomeIcon className="h-5 w-5" />
              <span className="sr-only">Home</span>
            </Link>
            <TooltipItem
              ico={<InboxIcon className="h-5 w-5" />}
              name='Inbox'
              tooltipText='Inbox'
              active={true}
            />
            <TooltipItem
              ico={<FileIcon className="h-5 w-5" />}
              name='Qr Shared'
              tooltipText='Qr Shared'
              active={false}
            />
            {/* <TooltipItem
              ico={<PlusIcon className="h-5 w-5" />}
              name='Share a Qr'
              tooltipText='Share a Qr'
              active={false}
            /> */}
            <AddQrButtonCloseNav />
          </TooltipProvider>
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant='link'
                  size={'icon'}
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-purple-100 transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <LogOutIcon className="h-5 w-5" />
                  <span className="sr-only">Logout</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">Logout</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>
    </>
  )
}