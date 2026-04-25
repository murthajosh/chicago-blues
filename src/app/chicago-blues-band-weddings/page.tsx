import type { Metadata } from "next";
import Link from "next/link";
import FaqSection, { type FaqItem } from "@/components/faq/FaqSection.component";
import JsonLd from "@/components/seo/JsonLd.component";

export const metadata: Metadata = {
  title: "Chicago Blues Band for Weddings | Chicago Blues Assembly",
  description:
    "Book a Chicago blues band for weddings with custom lineups for ceremony, cocktail hour, and reception sets.",
};

export default function ChicagoBluesBandWeddingsPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.chicagobluesassembly.com";
  const pageUrl = `${siteUrl}/chicago-blues-band-weddings`;
  const faqItems: FaqItem[] = [
    {
      question: "What blues band size works best for a Chicago wedding cocktail hour?",
      answer:
        "Most wedding cocktail hours choose a trio or quartet depending on guest count and room size.",
    },
    {
      question: "How much does a wedding blues band cost in Chicago?",
      answer:
        "Rates come to $200 per performer per hour on-site.",
    },
    {
      question: "Can we customize instruments for our wedding band?",
      answer:
        "Yes. You can choose from flexible lineups including guitar, piano, bass, drums, harmonica, saxophone, and vocals.",
    },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Chicago Blues Band for Weddings",
    serviceType: "Wedding blues band",
    provider: {
      "@type": "LocalBusiness",
      name: "Chicago Blues Assembly",
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
      { "@type": "ListItem", position: 2, name: "Chicago Blues Band for Weddings", item: pageUrl },
    ],
  };

  return (
    <main className="p-5 flex flex-col gap-12 scroll-smooth">
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <section className="flex flex-col gap-6 text-center mx-auto w-full max-w-4xl">
        <h1 className="font-bold text-3xl">Chicago Blues Band for Weddings</h1>
        <p>
          From ceremony processional to last dance, we build wedding music that
          feels personal. Our Chicago blues musicians can stay subtle during
          dinner, then open up the groove when the room is ready.
        </p>
        <Link
          href="/#hero"
          className="text-sm cursor-pointer font-bold px-4 py-2 rounded-full transition-all duration-500 bg-slate-900 hover:bg-chi-blue text-white hover:scale-110 mx-auto w-max text-center"
        >
          Get Your Wedding Quote
        </Link>
      </section>

      <section className="bg-slate-400/5 backdrop-blur-md rounded-xl p-6 flex flex-col gap-6 mx-auto w-full max-w-4xl">
        <h2 className="font-bold text-2xl">Wedding Lineups Couples Choose Most</h2>
        <div className="border-l-2 border-amber-700 ps-3">
          <h3 className="font-bold">Ceremony and Cocktail Trio</h3>
          <p>Guitar + Bass + Drums</p>
        </div>
        <div className="border-l-2 border-amber-700 ps-3">
          <h3 className="font-bold">Dinner-Ready Soul Quartet</h3>
          <p>Vocal + Guitar + Bass + Drums</p>
        </div>
        <div className="border-l-2 border-amber-700 ps-3">
          <h3 className="font-bold">Reception Blues Quintet</h3>
          <p>Harmonica + Guitar + Keys + Bass + Drums</p>
        </div>
      </section>

      <section className="bg-slate-400/5 backdrop-blur-md rounded-xl p-6 flex flex-col gap-4 mx-auto w-full max-w-4xl">
        <h2 className="font-bold text-2xl">Wedding Pricing Snapshot</h2>
        <p>
          Pricing is set at a flat $200 per performer per hour on-site. Most wedding cocktail hour bookings land between
          a trio and quartet setup depending on room size and energy goals.
        </p>
        <Link href="/pricing" className="underline font-bold w-max">
          View Full Pricing Details
        </Link>
      </section>

      <FaqSection title="Wedding Blues Band FAQs" items={faqItems} />
    </main>
  );
}
