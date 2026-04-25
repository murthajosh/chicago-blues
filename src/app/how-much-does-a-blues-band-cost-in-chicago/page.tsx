import type { Metadata } from "next";
import Link from "next/link";
import FaqSection from "@/components/faq/FaqSection.component";
import JsonLd from "@/components/seo/JsonLd.component";

export const metadata: Metadata = {
  title: "How Much Does a Blues Band Cost in Chicago? | Chicago Blues Assembly",
  description: "Learn what drives Chicago blues band pricing, with real examples by lineup size.",
};

export default function BluesBandCostChicagoPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.chicagobluesassembly.com";
  const pageUrl = `${siteUrl}/how-much-does-a-blues-band-cost-in-chicago`;

  return (
    <main className="p-5 flex flex-col gap-12 scroll-smooth">
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Article", headline: "How Much Does a Blues Band Cost in Chicago?", mainEntityOfPage: pageUrl }} />
      <section className="flex flex-col gap-6 text-center mx-auto w-full max-w-4xl">
        <h1 className="font-bold text-3xl">How Much Does a Blues Band Cost in Chicago?</h1>
        <p>
          The two main pricing drivers are lineup size and hours on-site.
        </p>
        <Link href="/#hero" className="text-sm cursor-pointer font-bold px-4 py-2 rounded-full transition-all duration-500 bg-slate-900  text-white hover:scale-110 mx-auto w-max text-center">Get an Exact Quote</Link>
      </section>
      <section className="bg-slate-400/5 backdrop-blur-md rounded-xl p-6 flex flex-col gap-6 mx-auto w-full max-w-4xl">
        <h2 className="font-bold text-2xl">Trio vs Quartet vs Quintet Pricing</h2>
        <div className="border-l-2 border-amber-700 ps-3"><h3 className="font-bold">Blues Trio</h3><p>3 musicians x $200 per hour = $600 per hour on-site.</p></div>
        <div className="border-l-2 border-amber-700 ps-3"><h3 className="font-bold">Blues Quartet</h3><p>4 musicians x $200 per hour = $800 per hour on-site.</p></div>
        <div className="border-l-2 border-amber-700 ps-3"><h3 className="font-bold">Blues Quintet</h3><p>5 musicians x $200 per hour = $1,000 per hour on-site.</p></div>
      </section>
      <section className="bg-slate-400/5 backdrop-blur-md rounded-xl p-6 flex flex-col gap-4 mx-auto w-full max-w-4xl">
        <h2 className="font-bold text-2xl">What Changes the Total</h2>
        <p>
          Most events run 2-4 hours. Travel is added only outside Cook County
          at $2 per performer per mile, so nearby suburbs usually remain modest.
        </p>
        <Link href="/pricing" className="underline font-bold w-max">View full pricing examples</Link>
      </section>
      <FaqSection title="Chicago Blues Pricing FAQs" />
    </main>
  );
}
