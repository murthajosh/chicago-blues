import type { Metadata } from "next";
import Link from "next/link";
import FaqSection, { type FaqItem } from "@/components/faq/FaqSection.component";
import JsonLd from "@/components/seo/JsonLd.component";

export const metadata: Metadata = {
  title: "Blues Trio Chicago | Chicago Blues Assembly",
  description: "Book a blues trio in Chicago for weddings, corporate events, and private parties with clear hourly pricing.",
};

export default function BluesTrioChicagoPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.chicagobluesassembly.com";
  const pageUrl = `${siteUrl}/blues-trio-chicago`;
  const faqItems: FaqItem[] = [
    { question: "What is the most common blues trio lineup?", answer: "Guitar + bass + drums is the most requested format for cocktail hours, dinners, and social events." },
    { question: "How much does a blues trio cost in Chicago?", answer: "Trio pricing starts at $600 per hour on-site (3 performers x $200), plus mileage outside Cook County." },
    { question: "Is a trio too loud for conversation-heavy events?", answer: "A trio can be very conversation-friendly when balanced appropriately for room size and event format." },
  ];
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "Blues Trio in Chicago", serviceType: "Blues trio", provider: { "@type": "LocalBusiness", name: "Chicago Blues Assembly", areaServed: "Chicago" }, areaServed: "Chicago", url: pageUrl };

  return (
    <main className="p-5 flex flex-col gap-12 scroll-smooth">
      <JsonLd data={serviceSchema} />
      <section className="flex flex-col gap-6 text-center mx-auto w-full max-w-4xl">
        <h1 className="font-bold text-3xl">Blues Trio in Chicago</h1>
        <p>
          If you want a full groove without a large stage plot, a trio is
          usually the sweet spot. It is versatile, musical, and easy to fit in
          most Chicago venues.
        </p>
        <Link href="/#hero" className="text-sm cursor-pointer font-bold px-4 py-2 rounded-full transition-all duration-500 bg-slate-900 hover:bg-amber-700 text-white hover:scale-110 mx-auto w-max text-center">Book a Blues Trio</Link>
      </section>
      <section className="bg-slate-400/5 backdrop-blur-md rounded-xl p-6 flex flex-col gap-4 mx-auto w-full max-w-4xl">
        <h2 className="font-bold text-2xl">Why Trios Book So Often</h2>
        <p>
          Trios deliver rhythm, harmony, and lead lines in one compact unit,
          which makes them ideal for receptions, fundraisers, and social events.
        </p>
      </section>
      <FaqSection title="Blues Trio FAQs" items={faqItems} />
    </main>
  );
}
