import type { Metadata } from "next";
import Link from "next/link";
import FaqSection, { type FaqItem } from "@/components/faq/FaqSection.component";
import JsonLd from "@/components/seo/JsonLd.component";

export const metadata: Metadata = {
  title: "Jazz Cocktail Hour Chicago | Chicago Jazz Assembly",
  description:
    "Live jazz for cocktail hour in Chicago. Choose a trio or quartet lineup for weddings and events with clear, transparent pricing.",
};

export default function JazzCocktailHourChicagoPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.chicagojazzassembly.com";
  const pageUrl = `${siteUrl}/jazz-cocktail-hour-chicago`;
  const faqItems: FaqItem[] = [
    {
      question: "What jazz group size is best for cocktail hour?",
      answer:
        "Most cocktail hours choose a trio or quartet depending on guest count, room size, and desired energy level.",
    },
    {
      question: "How long is a typical cocktail hour jazz booking?",
      answer:
        "Most bookings run 1-2 hours, often covering guest arrival through reception transition.",
    },
    {
      question: "How much does cocktail hour jazz cost in Chicago?",
      answer:
        "Pricing starts at $200 per performer per hour on-site, plus mileage outside Cook County.",
    },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Jazz Cocktail Hour in Chicago",
    serviceType: "Cocktail hour jazz music",
    provider: {
      "@type": "LocalBusiness",
      name: "Chicago Jazz Assembly",
      areaServed: "Chicago",
    },
    areaServed: "Chicago",
    url: pageUrl,
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      description: "Starting at $200 per performer per hour on-site.",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: "Jazz Cocktail Hour Chicago", item: pageUrl },
    ],
  };

  return (
    <main className="p-5 flex flex-col gap-12 scroll-smooth">
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <section className="flex flex-col gap-6 text-center mx-auto w-full max-w-4xl">
        <h1 className="font-bold text-3xl">Jazz Cocktail Hour in Chicago</h1>
        <p>
          Live jazz is one of the best ways to set the tone for cocktail hour.
          We tailor ensemble size, repertoire, and volume for relaxed
          conversation and a refined Chicago event atmosphere.
        </p>
        <Link
          href="/#hero"
          className="text-sm cursor-pointer font-bold px-4 py-2 rounded-full transition-all duration-500 bg-slate-900 hover:bg-amber-400 text-white hover:scale-110 mx-auto w-max text-center"
        >
          Get a Cocktail Hour Quote
        </Link>
      </section>

      <section className="bg-slate-400/5 backdrop-blur-md rounded-xl p-6 flex flex-col gap-6 mx-auto w-full max-w-4xl">
        <h2 className="font-bold text-2xl">Best Cocktail Hour Lineups</h2>
        <div className="border-l-2 border-amber-400 ps-3">
          <h3 className="font-bold">Intimate Trio</h3>
          <p>Piano + Bass + Drums for compact spaces and dinner transitions.</p>
        </div>
        <div className="border-l-2 border-amber-400 ps-3">
          <h3 className="font-bold">Upscale Quartet</h3>
          <p>Sax + Piano + Bass + Drums for a fuller but still subtle sound.</p>
        </div>
        <div className="border-l-2 border-amber-400 ps-3">
          <h3 className="font-bold">Vocal Feature Option</h3>
          <p>Add vocals when you want more featured moments and personality.</p>
        </div>
      </section>

      <section className="bg-slate-400/5 backdrop-blur-md rounded-xl p-6 flex flex-col gap-4 mx-auto w-full max-w-4xl">
        <h2 className="font-bold text-2xl">What to Budget for Cocktail Hour Jazz</h2>
        <p>
          Most cocktail hour bookings are 1-2 hours with a trio or quartet.
          Pricing follows the same transparent structure: $200 per performer per
          hour on-site, plus mileage outside Cook County.
        </p>
        <Link href="/pricing" className="underline font-bold w-max">
          View Detailed Pricing
        </Link>
      </section>

      <FaqSection title="Cocktail Hour Jazz FAQs" items={faqItems} />
    </main>
  );
}
