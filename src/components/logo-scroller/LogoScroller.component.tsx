"use client"

import Image from "next/image"

const logos = [
  "/assets/img/bridgeportartscenter.webp",
  "/assets/img/citywinery.webp",
  "/assets/img/fieldmuseum.webp",
  "/assets/img/hotelzachary.webp",
  "/assets/img/offshorerooftop.webp",
  "/assets/img/riverroast.webp",
  "/assets/img/rockwellontheriver.webp",
]

export default function LogoScroller() {
  const items = [...logos, ...logos] // duplicate for seamless loop

  return (

    <section id="caseStudies" className="flex flex-col gap-16 w-full max-w-4xl mx-auto">
      <div className="">
        <h2 className="text-2xl font-black">Catch us around town!</h2>
        <p className="">You may have already seen CJA musicians playing at some of Chicago&apos;s finest event venues!</p>
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
                className="object-contain grayscale"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}