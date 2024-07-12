import Image from "next/image"

interface Props {
  image: string
  alt: string
  size: number
}
export const ImageIcons = ({ alt, image, size }: Props) => {
  return (
    <div>
      <Image
        src={image}
        width={size}
        height={size}
        alt={alt}
      />
    </div>
  )
}
