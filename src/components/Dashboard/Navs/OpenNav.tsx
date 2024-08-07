import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from '../../ui/sheet'
import { Button } from '../../ui/button'
import { BurgerIcon } from '../../ui/BurgerIcon'
import Link from 'next/link'
import { HomeIcon } from '../../ui/HomeIcon'
import { InboxIcon } from '../../ui/InboxIcon'
import { CalendarIcon } from '../../ui/CalendarIcon'
import LogOutIcon from '../../ui/LogOutIcon'
import { OpenNavItem } from './OpenNavItem'
import { FileIcon } from '@/components/ui/FileIcon'
import { PlusIcon } from '@/components/ui/PlusIcon'
import { AddQrButtonOpenNav } from '@/components/ui/AddQrButtonOpenNav'

export const OpenNav = () => {
  return (
    <>
      <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <BurgerIcon className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="sm:max-w-xs bg-purple-500 flex flex-col justify-between border-none">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="#"
                className="mb-5 flex items-center gap-4 px-2.5 text-white"
              >
                <HomeIcon className="h-5 w-5" />
                Home
              </Link>
              <div className='mb-5'>
                <OpenNavItem
                  icon={<InboxIcon className="h-5 w-5" />}
                  name='Inbox'
                  active={false}
                />
                <OpenNavItem
                  icon={<FileIcon className="h-5 w-5" />}
                  name='Qr Shared'
                  active={false}
                />
                <AddQrButtonOpenNav />
              </div>
            </nav>
            <nav className="grid gap-6 text-lg font-medium">
              <OpenNavItem
                icon={<LogOutIcon className="h-5 w-5" />}
                name='Logout'
                active={false}
              />
            </nav>
          </SheetContent>
        </Sheet>
      </header>
    </>
  )
}
