'use client'
import { PlusIcon } from './PlusIcon'
import { TooltipItem } from '../Dashboard/Navs/CloseNavItem'
import { useGlobalStore } from '@/hooks/stores/useGlobalStore'

export const AddQrButtonCloseNav = () => {
  const { toggleShareQrModal } = useGlobalStore()
  return (
    <button onClick={() => toggleShareQrModal()}>
      <TooltipItem
        ico={<PlusIcon className="h-5 w-5" />}
        name='Share a Qr'
        tooltipText='Share a Qr'
        active={false}
      />
    </button>
  )
}
