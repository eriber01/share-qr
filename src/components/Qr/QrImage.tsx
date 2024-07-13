import Image from 'next/image'
import React from 'react'

export const QrImage = () => {
  return (
    <>
      <Image
        src="/qr.png"
        width="300"
        height="300"
        alt="QR Code"
        className="w-100 aspect-square overflow-hidden rounded-xl object-bottom sm:w-auto lg:order-last lg:aspect-square"
      />
    </>
  )
}
