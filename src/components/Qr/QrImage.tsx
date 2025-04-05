import { useEffect, useState } from 'react'
import Image from 'next/image'
import QrCode from 'qrcode'

export const QrImage = ({ urlId }: { urlId: string | null }) => {
  const [qr, setQr] = useState<string | null>(null)

  useEffect(() => {
    if (urlId) {
      const url = process.env.NEXT_PUBLIC_APP_URL
      QrCode.toDataURL(`${url}/${urlId}`, { width: 800 }).then((url) => {
        setQr(url)
      })
    }
  }, [qr, urlId])

  return (
    <>
      {
        qr && <Image
          id="qr-image"
          className='mt-2 rounded-lg shadow'
          src={qr}
          alt='Qr'
          width={300}
          height={300}
        />
      }
    </>
  )
}
