import type { Metadata } from "next";
import Link from "next/link";
import FaqSection, { type FaqItem } from "@/components/faq/FaqSection.component";
import JsonLd from "@/components/seo/JsonLd.component";

export const metadata: Metadata = {
  title: "Blues Cocktail Hour Chicago | Chicago Blues Assembly",
  description: "Live blues for cocktail hour in Chicago with right-sized lineups and transparent pricing.",
};

export default function BluesCocktailHourChicagoPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.chicagobluesassembly.com";
  const pageUrl = `${siteUrl}/blues-cocktail-hour-chicago`;
  const faqItems: FaqItem[] = [
    { question: "What blues group size is best for cocktail hour?", answer: "Most cocktail hours choose a trio or quartet depending on guest count, room size, and desired energy level." },
    { question: "How long is a typical cocktail hour blues booking?", answer: "Most bookings run 1-2 hours, often covering guest arrival through reception transition." },
    { question: "How much does cocktail hour blues cost in Chicago?", answer: "Pricing comes to $200 per performer per hour on-site." },
  ];

  return (
    <main className="p-5 flex flex-col gap-12 scroll-smooth">
      <JsonLd data={{ "@context": "https://schema.org", "@type": "Service", name: "Blues Cocktail Hour in Chicago", serviceType: "Cocktail hour blues music", url: pageUrl }} />
      <section className="flex flex-col gap-6 text-center mx-auto w-full max-w-4xl">
        <h1 className="font-bold text-3xl">Blues Cocktail Hour in Chicago</h1>
        <p>
          Cocktail hour is where the event atmosphere gets established. We build
          blues sets that feel welcoming, stylish, and easy to talk over.
        </p>
        <Link href="/#hero" className="text-sm cursor-pointer font-bold px-4 py-2 rounded-full transition-all duration-500 bg-slate-900  text-white hover:scale-110 mx-auto w-max text-center">Get a Cocktail Hour Quote</Link>
      </section>
      <section className="bg-slate-400/5 backdrop-blur-md rounded-xl p-6 flex flex-col gap-4 mx-auto w-full max-w-4xl">
        <h2 className="font-bold text-2xl">Common Cocktail Builds</h2>
        <p>
          Most bookings land on duo, trio, or quartet depending on guest count,
          room acoustics, and whether you want background texture or a stronger lead voice.
        </p>
      </section>
      <FaqSection title="Cocktail Hour Blues FAQs" items={faqItems} />
    </main>
  );
}
