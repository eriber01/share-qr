'use client'

import { Button, Input, Spinner } from "@material-tailwind/react"
import { useState } from "react"
import { useSendEmailHome } from "@/services/send-email-home";

export const Footer = () => {
  const [email, setEmail] = useState('')
  const { mutateAsync, isPending } = useSendEmailHome()
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F5F5F5]">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Innovation in progress. Be part of the journey.
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Stay informed! Sign up to get notified about our latest updates and features.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                label="Enter your email"
                className="max-w-md flex-1 bg-white"
                crossOrigin={""}
                value={email}
                onChange={({ target: { value } }) => setEmail(value)}
              />
              <Button
                color="purple"
                loading={isPending}
                disabled={!email.trim().length}
                className="bg-[#6d3cbcc5] text-white hover:bg-[#6E3CBC] w-[8rem]"
                onClick={() => {
                  mutateAsync({ email })
                  setEmail('')
                }}
              >
                Send
              </Button>

            </form>
            <p className="text-xs text-muted-foreground">
              Your subscription ensures you never miss an important update.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
