'use client'
import Image from "next/image";
import Link from "next/link";
import { Button, Input } from "@material-tailwind/react";
import { ImageIcons } from "@/components";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh">
      {/* home section */}
      <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center items-center h-screen">
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
                <Button
                  color="purple"
                  className="w-3/12 inline-flex h-10 items-center justify-center rounded-md bg-[#6d3cbcc5] px-8 text-sm text-white shadow transition-colors hover:bg-[#6E3CBC]"
                >
                  Start to share
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image
                src="/qr.png"
                width="300"
                height="300"
                alt="QR Code"
                className="w-100 aspect-square overflow-hidden rounded-xl object-bottom sm:w-auto lg:order-last lg:aspect-square"
              />
              {/* <p className="mt-4 text-muted-foreground">Scan to learn more</p> */}
            </div>
          </div>
        </div>
      </section>
      {/* about app session */}
      <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
        <div className="w-11/12 px-4 md:px-6">
          <div className="mx-auto grid max-w-5xl items-start gap-12 sm:grid-cols-2 md:grid-cols-3 md:gap-24">
            <div className="grid gap-1">
              {/* <RocketIcon className="h-8 w-8 text-[#8B5CF6]" /> */}
              <ImageIcons
                image='/cohete.png'
                alt="cohete image"
              />
              <h3 className="text-lg font-bold">Rapid</h3>
              <p className="text-muted-foreground">
                Streamline your workflow with our intuitive tools and pre-built components.
              </p>
            </div>
            <div className="grid gap-1">
              <ImageIcons
                image='/easy.png'
                alt="cohete image"
              />
              <h3 className="text-lg font-bold">Easy to use</h3>
              <p className="text-muted-foreground">
                Blazing-fast performance that keeps your users engaged and coming back.
              </p>
            </div>
            <div className="grid gap-1">
              <ImageIcons
                image='/secure.png'
                alt="cohete image"
              />
              <h3 className="text-lg font-bold">Secure</h3>
              <p className="text-muted-foreground">
                Built with enterprise-grade security and scalability to support your growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* sugerence session */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#F5F5F5]">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Join the Thousands Who Trust Us</h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Sign up today and experience the power of our platform for yourself.
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
                Sign Up
              </Button>
            </form>
            <p className="text-xs text-muted-foreground">
              Sign up to get notified when we launch.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
