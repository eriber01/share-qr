'use client'
import Link from 'next/link'

export const ShareButton = () => {
  return (
    <div>
      <Link
        href={'/dashboard'}
        color="purple"
        className="w-auto inline-flex h-10 items-center justify-center rounded-md bg-[#6d3cbcc5] px-8 text-sm text-white shadow transition-colors hover:bg-[#6E3CBC]"
      >
        Start to share
      </Link>
    </div>
  )
}
