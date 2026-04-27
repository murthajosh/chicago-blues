"use client"

import Image from "next/image"

const logos = [
  "/assets/img/bluesfest.webp",
  "/assets/img/hob.webp",
  "/assets/img/kingstonmines.webp",
  "/assets/img/legends.webp",
  "/assets/img/untitled.webp",
]

export default function LogoScroller() {
  const items = [...logos, ...logos] // duplicate for seamless loop

  return (

    <section id="caseStudies" className="flex flex-col gap-16 w-full max-w-4xl mx-auto">
      <div className="">
        <h2 className="text-3xl font-black">Catch us around town!</h2>
        <p className="">You may have already seen our musicians playing at some of Chicago&apos;s finest Blues venues!</p>
      </div>
      <div className="w-full overflow-hidden">
        <div className="flex w-max animate-scroll">
          {items.map((src, i) => (
            <div key={i} className="px-8 py-4 shrink-0 flex items-center">
              <Image
                src={src}
                alt="logo"
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}