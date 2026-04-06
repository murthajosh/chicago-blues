import type { Metadata } from "next";
import Link from "next/link";
import FaqSection, { type FaqItem } from "@/components/faq/FaqSection.component";
import JsonLd from "@/components/seo/JsonLd.component";

export const metadata: Metadata = {
  title: "Jazz Soloist Chicago | Chicago Jazz Assembly",
  description:
    "Book a jazz soloist in Chicago for weddings, corporate events, and private parties. Explore soloist options and transparent pricing.",
};

export default function JazzSoloistChicagoPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.chicagojazzassembly.com";
  const pageUrl = `${siteUrl}/jazz-soloist-chicago`;
  const faqItems: FaqItem[] = [
    {
      question: "What solo jazz instrument is most popular for events?",
      answer:
        "Solo piano is most common, with solo guitar also popular for intimate rooms and private dinners.",
    },
    {
      question: "How much does a jazz soloist cost in Chicago?",
      answer:
        "Soloist pricing starts at $200 per hour on-site, plus mileage outside Cook County.",
    },
    {
      question: "Is a soloist enough for cocktail hour?",
      answer:
        "For smaller cocktail hours, yes. For larger or louder spaces, a duo or trio often provides better coverage.",
    },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Jazz Soloist in Chicago",
    serviceType: "Solo jazz musician",
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
      description: "Starting at $200 per hour on-site.",
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
      { "@type": "ListItem", position: 2, name: "Jazz Soloist Chicago", item: pageUrl },
    ],
  };

  return (
    <main className="p-5 flex flex-col gap-12 scroll-smooth">
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <section className="flex flex-col gap-6 text-center mx-auto w-full max-w-4xl">
        <h1 className="font-bold text-3xl">Jazz Soloist in Chicago</h1>
        <p>
          A jazz soloist is perfect for intimate Chicago events where you want
          live music with a minimal footprint. Solo piano, guitar, or sax can
          create an elegant atmosphere while keeping conversation easy.
        </p>
        <Link
          href="/#hero"
          className="text-sm cursor-pointer font-bold px-4 py-2 rounded-full transition-all duration-500 bg-slate-900 hover:bg-amber-400 text-white hover:scale-110 mx-auto w-max text-center"
        >
          Book a Jazz Soloist
        </Link>
      </section>

      <section className="bg-slate-400/5 backdrop-blur-md rounded-xl p-6 flex flex-col gap-6 mx-auto w-full max-w-4xl">
        <h2 className="font-bold text-2xl">Popular Soloist Options</h2>
        <div className="border-l-2 border-amber-400 ps-3">
          <h3 className="font-bold">Solo Piano</h3>
          <p>Elegant and versatile for cocktail hour and dinner ambience.</p>
        </div>
        <div className="border-l-2 border-amber-400 ps-3">
          <h3 className="font-bold">Solo Guitar</h3>
          <p>Warm, intimate tone for smaller spaces and private gatherings.</p>
        </div>
      </section>

      <section className="bg-slate-400/5 backdrop-blur-md rounded-xl p-6 flex flex-col gap-4 mx-auto w-full max-w-4xl">
        <h2 className="font-bold text-2xl">Soloist Pricing in Chicago</h2>
        <p>
          Soloist rates start at $200 per hour on-site (1 performer x $200),
          plus mileage outside Cook County. This is the most budget-friendly
          way to add live jazz to your event.
        </p>
        <Link href="/pricing" className="underline font-bold w-max">
          Compare Soloist and Ensemble Pricing
        </Link>
      </section>

      <FaqSection title="Jazz Soloist FAQs" items={faqItems} />
    </main>
  );
}
