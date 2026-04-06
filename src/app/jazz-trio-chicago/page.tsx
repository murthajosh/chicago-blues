import type { Metadata } from "next";
import Link from "next/link";
import FaqSection, { type FaqItem } from "@/components/faq/FaqSection.component";
import JsonLd from "@/components/seo/JsonLd.component";

export const metadata: Metadata = {
  title: "Jazz Trio Chicago | Chicago Jazz Assembly",
  description:
    "Book a jazz trio in Chicago for weddings, corporate events, and private parties. Explore trio formats and transparent pricing.",
};

export default function JazzTrioChicagoPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.chicagojazzassembly.com";
  const pageUrl = `${siteUrl}/jazz-trio-chicago`;
  const faqItems: FaqItem[] = [
    {
      question: "What is the most common jazz trio lineup?",
      answer:
        "Piano + bass + drums is the most requested format for cocktail hours, dinners, and social events.",
    },
    {
      question: "How much does a jazz trio cost in Chicago?",
      answer:
        "Trio pricing starts at $600 per hour on-site (3 performers x $200), plus mileage outside Cook County.",
    },
    {
      question: "Is a trio loud for conversation-heavy events?",
      answer:
        "A trio can be very conversation-friendly when balanced appropriately for room size and event format.",
    },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Jazz Trio in Chicago",
    serviceType: "Jazz trio",
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
      description: "Starting at $600 per hour on-site.",
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
      { "@type": "ListItem", position: 2, name: "Jazz Trio Chicago", item: pageUrl },
    ],
  };

  return (
    <main className="p-5 flex flex-col gap-12 scroll-smooth">
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <section className="flex flex-col gap-6 text-center mx-auto w-full max-w-4xl">
        <h1 className="font-bold text-3xl">Jazz Trio in Chicago</h1>
        <p>
          A jazz trio is one of the most versatile options for Chicago weddings,
          private parties, and corporate events. It delivers a polished
          live sound without overwhelming the conversation.
        </p>
        <Link
          href="/#hero"
          className="text-sm cursor-pointer font-bold px-4 py-2 rounded-full transition-all duration-500 bg-slate-900 hover:bg-amber-400 text-white hover:scale-110 mx-auto w-max text-center"
        >
          Book a Jazz Trio
        </Link>
      </section>

      <section className="bg-slate-400/5 backdrop-blur-md rounded-xl p-6 flex flex-col gap-6 mx-auto w-full max-w-4xl">
        <h2 className="font-bold text-2xl">Popular Trio Formats</h2>
        <div className="border-l-2 border-amber-400 ps-3">
          <h3 className="font-bold">Piano + Bass + Drums</h3>
          <p>Classic swing and modern standards for cocktail and dinner sets.</p>
        </div>
        <div className="border-l-2 border-amber-400 ps-3">
          <h3 className="font-bold">Guitar + Bass + Drums</h3>
          <p>Warm, intimate texture for smaller rooms and private dinners.</p>
        </div>
        <div className="border-l-2 border-amber-400 ps-3">
          <h3 className="font-bold">Sax + Piano + Bass</h3>
          <p>Melodic front line with a smooth social atmosphere.</p>
        </div>
      </section>

      <section className="bg-slate-400/5 backdrop-blur-md rounded-xl p-6 flex flex-col gap-4 mx-auto w-full max-w-4xl">
        <h2 className="font-bold text-2xl">Trio Pricing in Chicago</h2>
        <p>
          Trio rates start at $600 per hour on-site (3 performers x $200),
          plus mileage outside Cook County. Most trio bookings run 2-4 hours
          depending on event timeline.
        </p>
        <Link href="/pricing" className="underline font-bold w-max">
          See More Pricing Examples
        </Link>
      </section>

      <FaqSection title="Jazz Trio FAQs" items={faqItems} />
    </main>
  );
}
