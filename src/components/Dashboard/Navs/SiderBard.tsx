'use client'

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { InboxIcon } from "../../ui/InboxIcon"
import { CalendarIcon } from "../../ui/CalendarIcon"
import { CloseNav } from "./CloseNav"
import { OpenNav } from "./OpenNav"

export function SiderBar() {
  return (
    <div className="min-h-screen">
      <CloseNav />
      <div className="sm:gap-4 sm:py-4 sm:pl-14">
        <OpenNav />
      </div>
    </div>
  )
}