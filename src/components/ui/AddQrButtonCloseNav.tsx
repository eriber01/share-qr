'use client'
import { useAppDispatch } from '@/lib/redux-hooks'
import { Button } from './button'
import { PlusIcon } from './PlusIcon'
import { toggleShareQrModal } from '@/lib/features/globalState/globalStateSlice'
import { TooltipItem } from '../Dashboard/Navs/CloseNavItem'

export const AddQrButtonCloseNav = () => {
  const dispatch = useAppDispatch()
  return (
    <button onClick={() => dispatch(toggleShareQrModal(true))}>
      <TooltipItem
        ico={<PlusIcon className="h-5 w-5" />}
        name='Share a Qr'
        tooltipText='Share a Qr'
        active={false}
      />
    </button>
  )
}
