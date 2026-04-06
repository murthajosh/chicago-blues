import type { Metadata } from "next";
import Link from "next/link";
import FaqSection, { type FaqItem } from "@/components/faq/FaqSection.component";
import JsonLd from "@/components/seo/JsonLd.component";

export const metadata: Metadata = {
  title: "Jazz Quartet Chicago | Chicago Jazz Assembly",
  description:
    "Hire a jazz quartet in Chicago for cocktail hours, weddings, and corporate events. Compare quartet builds and pricing.",
};

export default function JazzQuartetChicagoPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.chicagojazzassembly.com";
  const pageUrl = `${siteUrl}/jazz-quartet-chicago`;
  const faqItems: FaqItem[] = [
    {
      question: "When should I choose a quartet over a trio?",
      answer:
        "A quartet is often better for larger rooms or when you want a fuller melodic sound while keeping the set elegant.",
    },
    {
      question: "How much does a jazz quartet cost in Chicago?",
      answer:
        "Quartet pricing starts at $800 per hour on-site (4 performers x $200), plus mileage outside Cook County.",
    },
    {
      question: "Can I choose the lead instrument in a quartet?",
      answer:
        "Yes. Common lead options include saxophone, trumpet, or vocalist depending on the event style you want.",
    },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Jazz Quartet in Chicago",
    serviceType: "Jazz quartet",
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
      description: "Starting at $800 per hour on-site.",
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
      { "@type": "ListItem", position: 2, name: "Jazz Quartet Chicago", item: pageUrl },
    ],
  };

  return (
    <main className="p-5 flex flex-col gap-12 scroll-smooth">
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <section className="flex flex-col gap-6 text-center mx-auto w-full max-w-4xl">
        <h1 className="font-bold text-3xl">Jazz Quartet in Chicago</h1>
        <p>
          A Chicago jazz quartet adds a fuller, more dynamic sound than a trio
          while staying elegant and guest-friendly. It is a favorite for
          wedding cocktail hours, receptions, and upscale corporate events.
        </p>
        <Link
          href="/#hero"
          className="text-sm cursor-pointer font-bold px-4 py-2 rounded-full transition-all duration-500 bg-slate-900 hover:bg-amber-400 text-white hover:scale-110 mx-auto w-max text-center"
        >
          Build a Jazz Quartet
        </Link>
      </section>

      <section className="bg-slate-400/5 backdrop-blur-md rounded-xl p-6 flex flex-col gap-6 mx-auto w-full max-w-4xl">
        <h2 className="font-bold text-2xl">Popular Quartet Builds</h2>
        <div className="border-l-2 border-amber-400 ps-3">
          <h3 className="font-bold">Sax + Piano + Bass + Drums</h3>
          <p>Balanced energy and a polished classic jazz profile.</p>
        </div>
        <div className="border-l-2 border-amber-400 ps-3">
          <h3 className="font-bold">Trumpet + Piano + Bass + Drums</h3>
          <p>Bold, bright tone for lively social rooms and celebrations.</p>
        </div>
        <div className="border-l-2 border-amber-400 ps-3">
          <h3 className="font-bold">Vocalist + Guitar + Bass + Drums</h3>
          <p>Song-forward atmosphere for memorable featured moments.</p>
        </div>
      </section>

      <section className="bg-slate-400/5 backdrop-blur-md rounded-xl p-6 flex flex-col gap-4 mx-auto w-full max-w-4xl">
        <h2 className="font-bold text-2xl">Quartet Pricing in Chicago</h2>
        <p>
          Quartet rates start at $800 per hour on-site (4 performers x $200),
          plus mileage outside Cook County. If you want richer sound without a
          large footprint, this is often the sweet spot.
        </p>
        <Link href="/pricing" className="underline font-bold w-max">
          Compare Trio and Quartet Costs
        </Link>
      </section>

      <FaqSection title="Jazz Quartet FAQs" items={faqItems} />
    </main>
  );
}
