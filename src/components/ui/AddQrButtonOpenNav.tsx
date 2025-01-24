'use client'
import { useGlobalStore } from '@/hooks/stores/useGlobalStore'
import { Button } from './button'
import { PlusIcon } from './PlusIcon'
import { SheetTrigger } from './sheet'

export const AddQrButtonOpenNav = () => {
  const { toggleShareQrModal } = useGlobalStore()

  return (
    <SheetTrigger asChild className='w-full'>
      <Button
        className={`w-full bg-transparent px-2.5 py-1 gap-4 hover:text-foreground hover:bg-accent text-black rounded-sm ${true ? 'bg-accent' : 'text-white'}`}
        onClick={() => toggleShareQrModal()}
      >
        <div className='w-full text-lg flex items-center gap-4'>
          <PlusIcon className="h-5 w-5" />
          Share a Qr
        </div>
      </Button>
    </SheetTrigger>
  )
}