'use client'
import { useAppDispatch } from '@/lib/redux-hooks'
import { Button } from './button'
import { PlusIcon } from './PlusIcon'
import { toggleShareQrModal } from '@/lib/features/globalState/globalStateSlice'
import { OpenNavItem } from '../Dashboard/Navs/OpenNavItem'
import { SheetTrigger } from './sheet'

export const AddQrButtonOpenNav = () => {
  const dispatch = useAppDispatch()

  return (
    <SheetTrigger asChild className='w-full'>
      <Button
        className={`w-full bg-transparent px-2.5 py-1 gap-4 hover:text-foreground hover:bg-accent text-black rounded-sm ${true ? 'bg-accent' : 'text-white'}`}
        onClick={() => dispatch(toggleShareQrModal(true))}
      >
        <div className='w-full text-lg flex items-center gap-4'>
          <PlusIcon className="h-5 w-5" />
          Share a Qr
        </div>
      </Button>
    </SheetTrigger>
  )
}