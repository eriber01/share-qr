'use client'
import { useGlobalStore } from '@/hooks/stores/useGlobalStore'
import { Button } from './button'
import { PlusIcon } from './PlusIcon'

export const AddQrButton = () => {
  const { toggleShareQrModal } = useGlobalStore()
  return (
    <Button
      variant="primary"
      className="w-full max-w-[200px] mx-auto shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
      onClick={() => toggleShareQrModal()}
    >
      <PlusIcon className="h-5 w-5 mr-2" />
      <span className='font-bold text-base'>
        Share a Qr
      </span>
    </Button>
  )
}
