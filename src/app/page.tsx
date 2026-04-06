import HeroSection from "@/components/homepage/hero/HeroSection.component";
import FaqSection from "@/components/faq/FaqSection.component";
import Link from "next/link";

import AboutSection from "@/components/homepage/about/AboutSection.component";
import LogoScroller from "@/components/logo-scroller/LogoScroller.component";

export default function Home() {
  return (
      <main className="p-5 flex flex-col gap-12 scroll-smooth">
        <HeroSection />
        <AboutSection />
        <Link
        href='/#hero'
        className='text-sm cursor-pointer font-bold px-4 py-2 rounded-full transition-all duration-500 bg-slate-900 hover:bg-amber-400 text-white hover:scale-110 mx-auto w-max text-center'
      >
        Get a Quote!
      </Link>
        <LogoScroller />
        <Link
        href='/#hero'
        className='text-sm cursor-pointer font-bold px-4 py-2 rounded-full transition-all duration-500 bg-slate-900 hover:bg-amber-400 text-white hover:scale-110 mx-auto w-max text-center'
      >
        Build Your Band
      </Link>
      <FaqSection />
      <Link
        href='/#hero'
        className='text-sm cursor-pointer font-bold px-4 py-2 rounded-full transition-all duration-500 bg-slate-900 hover:bg-amber-400 text-white hover:scale-110 mx-auto w-max text-center'
      >
        Get a Quote
      </Link>
      </main>
  );
}