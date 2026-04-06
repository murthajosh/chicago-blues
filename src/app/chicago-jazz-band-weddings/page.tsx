import type { Metadata } from "next";
import Link from "next/link";
import FaqSection, { type FaqItem } from "@/components/faq/FaqSection.component";
import JsonLd from "@/components/seo/JsonLd.component";

export const metadata: Metadata = {
  title: "Chicago Jazz Band for Weddings | Chicago Jazz Assembly",
  description:
    "Book a Chicago jazz band for weddings. Cocktail hour trios, elegant quartets, and custom wedding ensembles with transparent pricing.",
};

export default function ChicagoJazzBandWeddingsPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.chicagojazzassembly.com";
  const pageUrl = `${siteUrl}/chicago-jazz-band-weddings`;
  const faqItems: FaqItem[] = [
    {
      question: "What jazz band size works best for a Chicago wedding cocktail hour?",
      answer:
        "Most cocktail hour weddings choose a trio or quartet depending on guest count and room size.",
    },
    {
      question: "How much does a wedding jazz band cost in Chicago?",
      answer:
        "Rates start at $200 per performer per hour on-site, plus mileage outside Cook County.",
    },
    {
      question: "Can we customize instruments for our wedding band?",
      answer:
        "Yes. You can choose from flexible lineups including piano, bass, drums, saxophone, trumpet, guitar, and vocals.",
    },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Chicago Jazz Band for Weddings",
    serviceType: "Wedding jazz band",
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
      { "@type": "ListItem", position: 2, name: "Chicago Jazz Band for Weddings", item: pageUrl },
    ],
  };

  return (
    <main className="p-5 flex flex-col gap-12 scroll-smooth">
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <section className="flex flex-col gap-6 text-center mx-auto w-full max-w-4xl">
        <h1 className="font-bold text-3xl">Chicago Jazz Band for Weddings</h1>
        <p>
          Live jazz for Chicago weddings, from intimate cocktail hour trios to
          full reception-ready ensembles. We help couples create an elegant,
          timeless atmosphere with musicians who understand wedding flow.
        </p>
        <Link
          href="/#hero"
          className="text-sm cursor-pointer font-bold px-4 py-2 rounded-full transition-all duration-500 bg-slate-900 hover:bg-amber-400 text-white hover:scale-110 mx-auto w-max text-center"
        >
          Get Your Wedding Quote
        </Link>
      </section>

      <section className="bg-slate-400/5 backdrop-blur-md rounded-xl p-6 flex flex-col gap-6 mx-auto w-full max-w-4xl">
        <h2 className="font-bold text-2xl">Popular Wedding Band Builds</h2>
        <div className="border-l-2 border-amber-400 ps-3">
          <h3 className="font-bold">Classic Cocktail Hour Trio</h3>
          <p>Piano + Bass + Drums</p>
        </div>
        <div className="border-l-2 border-amber-400 ps-3">
          <h3 className="font-bold">Elegant Quartet</h3>
          <p>Sax + Piano + Bass + Drums</p>
        </div>
        <div className="border-l-2 border-amber-400 ps-3">
          <h3 className="font-bold">Reception Quintet</h3>
          <p>Trumpet + Sax + Piano + Bass + Drums</p>
        </div>
      </section>

      <section className="bg-slate-400/5 backdrop-blur-md rounded-xl p-6 flex flex-col gap-4 mx-auto w-full max-w-4xl">
        <h2 className="font-bold text-2xl">Wedding Pricing Snapshot</h2>
        <p>
          Pricing starts at $200 per performer per hour on-site, plus mileage
          outside Cook County. Most wedding cocktail hour bookings land between
          a trio and quartet setup depending on room size and energy goals.
        </p>
        <Link href="/pricing" className="underline font-bold w-max">
          View Full Pricing Details
        </Link>
      </section>

      <FaqSection title="Wedding Jazz Band FAQs" items={faqItems} />
    </main>
  );
}
