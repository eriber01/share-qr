'use client'

import { Button, Input } from "@material-tailwind/react"

export const Footer = () => {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F5F5F5]">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">If you have any problem ?</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Do not hesitate to write to us, we will do everything possible to help you.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                label="Enter your email"
                className="max-w-md flex-1"
                crossOrigin={""}
              />
              <Button
                color="purple"
                className="bg-[#6d3cbcc5] text-white hover:bg-[#6E3CBC] w-[8rem]"
              >
                Send
              </Button>
            </form>
            <p className="text-xs text-muted-foreground">
              Sign up to get notified when we launch.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
