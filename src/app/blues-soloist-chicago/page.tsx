import type { Metadata } from "next";
import Link from "next/link";
import FaqSection, { type FaqItem } from "@/components/faq/FaqSection.component";
import JsonLd from "@/components/seo/JsonLd.component";

export const metadata: Metadata = {
  title: "Blues Soloist Chicago | Chicago Blues Assembly",
  description:
    "Book a blues soloist in Chicago for intimate events, dinners, and cocktail hours.",
};

export default function BluesSoloistChicagoPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.chicagobluesassembly.com";
  const pageUrl = `${siteUrl}/blues-soloist-chicago`;
  const faqItems: FaqItem[] = [
    { question: "What solo blues instrument is most popular for events?", answer: "Solo guitar is most common, with piano and harmonica also popular for intimate rooms and private dinners." },
    { question: "How much does a blues soloist cost in Chicago?", answer: "Soloist pricing comes to$200 per hour on-site." },
    { question: "Is a soloist enough for cocktail hour?", answer: "For smaller cocktail hours, yes. For larger or louder spaces, a duo or trio often provides better coverage." },
  ];

  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "Blues Soloist in Chicago", serviceType: "Solo blues musician", provider: { "@type": "LocalBusiness", name: "Chicago Blues Assembly", areaServed: "Chicago" }, areaServed: "Chicago", url: pageUrl };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqItems.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) };

  return (
    <main className="p-5 flex flex-col gap-12 scroll-smooth">
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <section className="flex flex-col gap-6 text-center mx-auto w-full max-w-4xl">
        <h1 className="font-bold text-3xl">Blues Soloist in Chicago</h1>
        <p>
          Solo blues is the easiest way to add live music without crowding your
          floor plan. It is ideal for intimate dinners, private parties, and
          smaller cocktail hours.
        </p>
        <Link href="/#hero" className="text-sm cursor-pointer font-bold px-4 py-2 rounded-full transition-all duration-500 bg-slate-900 hover:bg-chi-blue text-white hover:scale-110 mx-auto w-max text-center">Book a Blues Soloist</Link>
      </section>
      <section className="bg-slate-400/5 backdrop-blur-md rounded-xl p-6 flex flex-col gap-4 mx-auto w-full max-w-4xl">
        <h2 className="font-bold text-2xl">Best Use Cases</h2>
        <p>
          A soloist works great for arrival music, wine bars, art openings, and
          dinner sets where guests should still hear each other easily.
        </p>
      </section>
      <FaqSection title="Blues Soloist FAQs" items={faqItems} />
    </main>
  );
}
