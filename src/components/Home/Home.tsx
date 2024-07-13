import Image from 'next/image'
import { ShareButton } from './ShareButton'
import { QrImage } from '../Qr/QrImage'

export const Home = () => {
  return (
    <div className='h-screen'>
      <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center items-center">
        <div className="px-4 md:px-6 w-10/12">
          <div className="grid gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-7xl/none my-5">
                  Share QR
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Share any information to a person securely with a simple QR code.
                </p>
              </div>
              <div className="text-start">
                <ShareButton />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <QrImage />
              {/* <p className="mt-4 text-muted-foreground">Scan to learn more</p> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}