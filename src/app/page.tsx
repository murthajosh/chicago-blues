import HeroSection from "@/components/homepage/hero/HeroSection.component";
import FaqSection from "@/components/faq/FaqSection.component";
import Link from "next/link";

import AboutSection from "@/components/homepage/about/AboutSection.component";
import WhySection from "@/components/homepage/why/WhySection.component";
// import LogoScroller from "@/components/logo-scroller/LogoScroller.component";
import IncludedSection from "@/components/homepage/included/IncludedSection.component";

export default function Home() {
  return (
      <main className="p-6 flex flex-col gap-16 scroll-smooth">
        <HeroSection />
        <AboutSection />
        <WhySection />
        <Link
        href='/#hero'
        className='text-sm cursor-pointer font-bold px-4 py-2 rounded-full transition-all duration-500 bg-blue-500 hover:bg-blue-400 active:bg-blue-600 text-white hover:scale-110 mx-auto w-max text-center'
        >
          Get a Quote
        </Link>
        <IncludedSection />
        {/* <LogoScroller /> */}
        <Link
        href='/#hero'
        className='text-sm cursor-pointer font-bold px-4 py-2 rounded-full transition-all duration-500 bg-blue-500 hover:bg-blue-400 active:bg-blue-600 text-white hover:scale-110 mx-auto w-max text-center'
      >
        Get a Quote
        </Link>
        <FaqSection />
        <Link
        href='/#hero'
        className='text-sm cursor-pointer font-bold px-4 py-2 rounded-full transition-all duration-500 bg-blue-500 hover:bg-blue-400 active:bg-blue-600 text-white hover:scale-110 mx-auto w-max text-center'
      >
        Get a Quote
        </Link>
      </main>
  );
}