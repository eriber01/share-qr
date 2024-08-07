'use client'
import { useAppDispatch } from '@/lib/redux-hooks'
import { Button } from './button'
import { PlusIcon } from './PlusIcon'
import { toggleShareQrModal } from '@/lib/features/globalState/globalStateSlice'

export const AddQrButton = () => {
  const dispatch = useAppDispatch()
  return (
    <Button
      variant="primary"
      className="w-full max-w-[200px] mx-auto shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
      onClick={() => dispatch(toggleShareQrModal(true))}
    >
      <PlusIcon className="h-5 w-5 mr-2" />
      <span className='font-bold text-base'>
        Share a Qr
      </span>
    </Button>
  )
}
