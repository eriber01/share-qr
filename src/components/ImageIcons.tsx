import Image from "next/image"

interface Props {
  image: string
  alt: string
}
export const ImageIcons = ({ alt, image }: Props) => {
  return (
    <div>
      <Image
        src={image}
        width={32}
        height={32}
        alt={alt}
      />
    </div>
  )
}
