import type { Metadata } from "next";
import Link from "next/link";
import FaqSection, { type FaqItem } from "@/components/faq/FaqSection.component";
import JsonLd from "@/components/seo/JsonLd.component";

export const metadata: Metadata = {
  title: "Chicago Jazz Band for Corporate Events | Chicago Jazz Assembly",
  description:
    "Hire a Chicago jazz band for corporate events, networking receptions, client dinners, and company celebrations with clear hourly rates.",
};

export default function ChicagoJazzBandCorporateEventsPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.chicagojazzassembly.com";
  const pageUrl = `${siteUrl}/chicago-jazz-band-corporate-events`;
  const faqItems: FaqItem[] = [
    {
      question: "What jazz band size is best for corporate events?",
      answer:
        "A trio or quartet is usually ideal for networking and dinner events, depending on room size and desired energy.",
    },
    {
      question: "Can you keep volume low for networking conversations?",
      answer:
        "Yes. We tailor instrumentation and dynamics so music elevates the room without competing with conversation.",
    },
    {
      question: "Do corporate event quotes include travel?",
      answer:
        "Travel is included at $2 per performer per mile outside Cook County. Inside Cook County there is no mileage add-on.",
    },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Chicago Jazz Band for Corporate Events",
    serviceType: "Corporate event jazz band",
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
      { "@type": "ListItem", position: 2, name: "Chicago Jazz Band for Corporate Events", item: pageUrl },
    ],
  };

  return (
    <main className="p-5 flex flex-col gap-12 scroll-smooth">
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <section className="flex flex-col gap-6 text-center mx-auto w-full max-w-4xl">
        <h1 className="font-bold text-3xl">Chicago Jazz Band for Corporate Events</h1>
        <p>
          Professional live jazz for networking receptions, client dinners, and
          company celebrations. We tailor the ensemble size and volume to keep
          conversation easy while elevating the room.
        </p>
        <Link
          href="/#hero"
          className="text-sm cursor-pointer font-bold px-4 py-2 rounded-full transition-all duration-500 bg-slate-900 hover:bg-amber-400 text-white hover:scale-110 mx-auto w-max text-center"
        >
          Get Your Corporate Quote
        </Link>
      </section>

      <section className="bg-slate-400/5 backdrop-blur-md rounded-xl p-6 flex flex-col gap-6 mx-auto w-full max-w-4xl">
        <h2 className="font-bold text-2xl">Best Fits for Corporate Settings</h2>
        <div className="border-l-2 border-amber-400 ps-3">
          <h3 className="font-bold">Networking Cocktail Hour Trio</h3>
          <p>Balanced volume for guest conversation and brand polish.</p>
        </div>
        <div className="border-l-2 border-amber-400 ps-3">
          <h3 className="font-bold">Upscale Dinner Quartet</h3>
          <p>Fuller texture for larger rooms and premium hospitality events.</p>
        </div>
        <div className="border-l-2 border-amber-400 ps-3">
          <h3 className="font-bold">Larger Multi-Set Ensembles</h3>
          <p>Ideal for galas, fundraisers, and milestone company celebrations.</p>
        </div>
      </section>

      <section className="bg-slate-400/5 backdrop-blur-md rounded-xl p-6 flex flex-col gap-4 mx-auto w-full max-w-4xl">
        <h2 className="font-bold text-2xl">Simple, Transparent Rates</h2>
        <p>
          We keep pricing clear: $200 per performer per hour on-site, plus
          mileage outside Cook County. This makes budget planning straightforward
          for event teams and admin stakeholders.
        </p>
        <Link href="/pricing" className="underline font-bold w-max">
          Explore Corporate Pricing Examples
        </Link>
      </section>

      <FaqSection title="Corporate Event Jazz FAQs" items={faqItems} />
    </main>
  );
}
