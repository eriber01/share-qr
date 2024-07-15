import Link from 'next/link'

interface Props {
  name: string
  icon: JSX.Element
  active: boolean
}

export const OpenNavItem = ({ icon, name, active }: Props) => {
  return (
    <>
      <Link
        href="#"
        className={`my-2.5 flex items-center gap-4 px-2.5 py-1 hover:text-foreground hover:bg-accent text-black rounded-sm ${active ? 'bg-accent' : 'text-white'}`}
        prefetch={false}
      >
        {icon}
        {name}
      </Link>
    </>
  )
}
