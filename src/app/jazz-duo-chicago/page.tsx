import type { Metadata } from "next";
import Link from "next/link";
import FaqSection, { type FaqItem } from "@/components/faq/FaqSection.component";
import JsonLd from "@/components/seo/JsonLd.component";

export const metadata: Metadata = {
  title: "Jazz Duo Chicago | Chicago Jazz Assembly",
  description:
    "Hire a jazz duo in Chicago for weddings, corporate events, and private parties. Compare duo formats and transparent pricing.",
};

export default function JazzDuoChicagoPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.chicagojazzassembly.com";
  const pageUrl = `${siteUrl}/jazz-duo-chicago`;
  const faqItems: FaqItem[] = [
    {
      question: "What is the best jazz duo format for cocktail hour?",
      answer:
        "Piano + bass is the most common, while guitar + bass is great for a warmer, intimate feel.",
    },
    {
      question: "How much does a jazz duo cost in Chicago?",
      answer:
        "Duo pricing starts at $400 per hour on-site (2 performers x $200), plus mileage outside Cook County.",
    },
    {
      question: "Should I choose a duo or trio?",
      answer:
        "A duo works well for smaller events. If you want more groove and fuller sound, a trio is often the better fit.",
    },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Jazz Duo in Chicago",
    serviceType: "Jazz duo",
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
      description: "Starting at $400 per hour on-site.",
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
      { "@type": "ListItem", position: 2, name: "Jazz Duo Chicago", item: pageUrl },
    ],
  };

  return (
    <main className="p-5 flex flex-col gap-12 scroll-smooth">
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={breadcrumbSchema} />
      <section className="flex flex-col gap-6 text-center mx-auto w-full max-w-4xl">
        <h1 className="font-bold text-3xl">Jazz Duo in Chicago</h1>
        <p>
          A jazz duo offers more depth than a soloist while keeping a compact
          setup. It is ideal for Chicago cocktail hours, private dinners, and
          corporate events where subtle live music is the goal.
        </p>
        <Link
          href="/#hero"
          className="text-sm cursor-pointer font-bold px-4 py-2 rounded-full transition-all duration-500 bg-slate-900 hover:bg-amber-400 text-white hover:scale-110 mx-auto w-max text-center"
        >
          Build a Jazz Duo
        </Link>
      </section>

      <section className="bg-slate-400/5 backdrop-blur-md rounded-xl p-6 flex flex-col gap-6 mx-auto w-full max-w-4xl">
        <h2 className="font-bold text-2xl">Popular Duo Formats</h2>
        <div className="border-l-2 border-amber-400 ps-3">
          <h3 className="font-bold">Piano + Bass</h3>
          <p>Classic balance of harmony and groove for elegant events.</p>
        </div>
        <div className="border-l-2 border-amber-400 ps-3">
          <h3 className="font-bold">Guitar + Bass</h3>
          <p>Warm, intimate texture for smaller rooms and private parties.</p>
        </div>
        <div className="border-l-2 border-amber-400 ps-3">
          <h3 className="font-bold">Sax + Piano</h3>
          <p>Melodic and polished sound with a stronger featured voice.</p>
        </div>
      </section>

      <section className="bg-slate-400/5 backdrop-blur-md rounded-xl p-6 flex flex-col gap-4 mx-auto w-full max-w-4xl">
        <h2 className="font-bold text-2xl">Duo Pricing in Chicago</h2>
        <p>
          Duo rates start at $400 per hour on-site (2 performers x $200),
          plus mileage outside Cook County. It is a great middle ground between
          solo and trio options.
        </p>
        <Link href="/pricing" className="underline font-bold w-max">
          Compare Duo and Trio Costs
        </Link>
      </section>

      <FaqSection title="Jazz Duo FAQs" items={faqItems} />
    </main>
  );
}
