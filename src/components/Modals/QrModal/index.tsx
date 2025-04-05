import { QrImage } from '@/components/Qr/QrImage'
import { Button, Dialog, DialogBody, DialogHeader, Typography } from '@material-tailwind/react'
import './style.css'
import { useRef } from 'react'
import { copyQRToClipboard } from '@/utils/copyQrImage'

interface Props {
  isOpen: boolean
  urlId: string | null
}
export const QrModal = ({ isOpen, urlId }: Props) => {
  const qrRef = useRef(null)

  return (
    <Dialog
      open={isOpen}
      handler={() => { }}
      size='xs'
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0.9, y: -100 },
      }}
      dismiss={{
        enabled: false,
      }}
    >
      <DialogHeader className='flex justify-center'>
        <Typography className='font-bold text-white z-50 text-xl'>Copy to Share</Typography>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 1600 900" preserveAspectRatio="xMidYMax slice">
          <defs>
            <linearGradient id="bg">
              <stop offset="50%" style={{ stopColor: 'rgba(156, 39, 176, 0.6)' }}></stop>
            </linearGradient>
            <path id="wave" fill="url(#bg)" d="M-363.852,502.589c0,0,236.988-41.997,505.475,0	s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z" />
          </defs>
          <g>
            <use xlinkHref='#wave' opacity="1">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                dur="10s"
                calcMode="spline"
                values="270 230; -334 180; 270 230"
                keyTimes="0; .5; 1"
                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                repeatCount="indefinite" />
            </use>
            <use xlinkHref='#wave' opacity="1">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                dur="8s"
                calcMode="spline"
                values="-270 230;243 220;-270 230"
                keyTimes="0; .6; 1"
                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                repeatCount="indefinite" />
            </use>
          </g>
        </svg>
      </DialogHeader>
      <DialogBody>
        <div className='flex flex-col items-center justify-center'>
          <div ref={qrRef}>
            <QrImage urlId={urlId} />
          </div>
          <Button
            onClick={() => copyQRToClipboard()}
            className='mt-4 px-11 py-2 bg-purple-500 hover:bg-purple-500/80'>
            <span className='font-bold text-base capitalize'>Copy</span>
          </Button>
        </div>
      </DialogBody>
    </Dialog>
  )
}
