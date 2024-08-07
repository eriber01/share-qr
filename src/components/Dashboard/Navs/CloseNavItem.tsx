
import { Tooltip, TooltipContent, TooltipTrigger } from '../../ui/tooltip'
import Link from 'next/link'

interface Props {
  name: string
  ico: JSX.Element
  tooltipText: string
  active: boolean
}

export const TooltipItem = ({ ico, name, tooltipText, active }: Props) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href="#"
          className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:bg-accent hover:text-foreground md:h-8 md:w-8 ${active ? 'text-foreground bg-accent' : 'text-white'}`}
          prefetch={false}
        >
          {ico}
          <span className="sr-only">{name}</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right">{tooltipText}</TooltipContent>
    </Tooltip>
  )
}
