import React from 'react'
import { ImageIcons } from '../ImageIcons'

export const About = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center">
      <div className="w-11/12 px-4 md:px-6">
        <div className="mx-auto grid max-w-5xl items-start gap-12 sm:grid-cols-2 md:grid-cols-3 md:gap-24">
          <div className="grid gap-1">
            <ImageIcons
              image='/cohete.png'
              alt="cohete image"
              size={32}
            />
            <h3 className="text-lg font-bold">Rapid</h3>
            <p className="text-muted-foreground">
              {`Simple and straightforward: enter the text and email, and you're done. No need to be a tech expert to use it.`}
            </p>
          </div>
          <div className="grid gap-1">
            <ImageIcons
              image='/easy.png'
              alt="cohete image"
              size={32}
            />
            <h3 className="text-lg font-bold">Easy to use</h3>
            <p className="text-muted-foreground">
              Simple to use, intuitive and uncomplicated
            </p>
          </div>
          <div className="grid gap-1">
            <ImageIcons
              image='/secure.png'
              alt="cohete image"
              size={32}
            />
            <h3 className="text-lg font-bold">Secure</h3>
            <p className="text-muted-foreground">
              A code is sent via email that the recipient needs to view the text. If you change your mind, you can block the message so it can no longer be viewed.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
