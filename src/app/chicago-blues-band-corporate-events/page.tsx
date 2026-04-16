import type { Metadata } from "next";
import Link from "next/link";
import FaqSection, { type FaqItem } from "@/components/faq/FaqSection.component";
import JsonLd from "@/components/seo/JsonLd.component";

export const metadata: Metadata = {
  title: "Chicago Blues Band for Corporate Events | Chicago Blues Assembly",
  description:
    "Hire a Chicago blues band for corporate receptions, client dinners, and team celebrations with straightforward pricing.",
};

export default function ChicagoBluesBandCorporateEventsPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.chicagobluesassembly.com";
  const pageUrl = `${siteUrl}/chicago-blues-band-corporate-events`;
  const faqItems: FaqItem[] = [
    {
      question: "What blues band size is best for corporate events?",
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
    name: "Chicago Blues Band for Corporate Events",
    serviceType: "Corporate event blues band",
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
      { "@type": "ListItem", position: 2, name: "Chicago Blues Band for Corporate Events", item: pageUrl },
    ],
  };

  return (
    <main className="p-5 flex flex-col gap-12 scroll-smooth">
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <section className="flex flex-col gap-6 text-center mx-auto w-full max-w-4xl">
        <h1 className="font-bold text-3xl">Chicago Blues Band for Corporate Events</h1>
        <p>
          Live music can raise the energy of a corporate event without taking
          over the room. We dial instrumentation and volume to support
          networking, hospitality, and brand-forward experiences.
        </p>
        <Link
          href="/#hero"
          className="text-sm cursor-pointer font-bold px-4 py-2 rounded-full transition-all duration-500 bg-slate-900 hover:bg-amber-700 text-white hover:scale-110 mx-auto w-max text-center"
        >
          Get Your Corporate Quote
        </Link>
      </section>
      <section className="bg-slate-400/5 backdrop-blur-md rounded-xl p-6 flex flex-col gap-4 mx-auto w-full max-w-4xl">
        <h2 className="font-bold text-2xl">Built for Event Teams</h2>
        <p>
          We keep communication fast, stage plots simple, and invoices clear.
          Whether your event is in a hotel ballroom, office venue, or museum,
          we work smoothly with planners and AV teams.
        </p>
      </section>
      <FaqSection title="Corporate Event Blues FAQs" items={faqItems} />
    </main>
  );
}
