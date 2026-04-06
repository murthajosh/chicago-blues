import type { Metadata } from "next";
import Link from "next/link";
import FaqSection from "@/components/faq/FaqSection.component";
import JsonLd from "@/components/seo/JsonLd.component";

export const metadata: Metadata = {
  title: "How Much Does a Jazz Band Cost in Chicago? | Chicago Jazz Assembly",
  description:
    "Learn Chicago jazz band pricing by trio, quartet, and quintet. Compare wedding vs corporate event costs and common add-ons.",
};

export default function JazzBandCostChicagoPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.chicagojazzassembly.com";
  const pageUrl = `${siteUrl}/how-much-does-a-jazz-band-cost-in-chicago`;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How Much Does a Jazz Band Cost in Chicago?",
    description:
      "Learn Chicago jazz band pricing by trio, quartet, and quintet. Compare wedding vs corporate event costs and common add-ons.",
    author: {
      "@type": "Organization",
      name: "Chicago Jazz Assembly",
    },
    publisher: {
      "@type": "Organization",
      name: "Chicago Jazz Assembly",
    },
    mainEntityOfPage: pageUrl,
    dateModified: new Date().toISOString(),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: "How Much Does a Jazz Band Cost in Chicago?", item: pageUrl },
    ],
  };

  return (
    <main className="p-5 flex flex-col gap-12 scroll-smooth">
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <section className="flex flex-col gap-6 text-center mx-auto w-full max-w-4xl">
        <h1 className="font-bold text-3xl">How Much Does a Jazz Band Cost in Chicago?</h1>
        <p>
          Chicago jazz band pricing depends on ensemble size, hours on-site, and
          travel. Our rates are transparent so you can plan quickly and compare
          options without guessing.
        </p>
        <Link
          href="/#hero"
          className="text-sm cursor-pointer font-bold px-4 py-2 rounded-full transition-all duration-500 bg-slate-900 hover:bg-amber-400 text-white hover:scale-110 mx-auto w-max text-center"
        >
          Get an Exact Quote
        </Link>
      </section>

      <section className="bg-slate-400/5 backdrop-blur-md rounded-xl p-6 flex flex-col gap-6 mx-auto w-full max-w-4xl">
        <h2 className="font-bold text-2xl">Trio vs Quartet vs Quintet Pricing</h2>
        <div className="border-l-2 border-amber-400 ps-3">
          <h3 className="font-bold">Jazz Trio</h3>
          <p>3 musicians x $200 per hour = $600 per hour on-site.</p>
        </div>
        <div className="border-l-2 border-amber-400 ps-3">
          <h3 className="font-bold">Jazz Quartet</h3>
          <p>4 musicians x $200 per hour = $800 per hour on-site.</p>
        </div>
        <div className="border-l-2 border-amber-400 ps-3">
          <h3 className="font-bold">Jazz Quintet</h3>
          <p>5 musicians x $200 per hour = $1,000 per hour on-site.</p>
        </div>
      </section>

      <section className="bg-slate-400/5 backdrop-blur-md rounded-xl p-6 flex flex-col gap-6 mx-auto w-full max-w-4xl">
        <h2 className="font-bold text-2xl">Wedding vs Corporate Pricing</h2>
        <p>
          The base hourly rate is identical. Final totals typically differ based
          on timeline, number of sets, and preferred ensemble size. Weddings
          often use 1-2 focused windows, while corporate events may use longer
          multi-set schedules.
        </p>
      </section>

      <section className="bg-slate-400/5 backdrop-blur-md rounded-xl p-6 flex flex-col gap-6 mx-auto w-full max-w-4xl">
        <h2 className="font-bold text-2xl">Common Add-Ons</h2>
        <ul className="list-disc ps-6 flex flex-col gap-2">
          <li>Additional performance hours</li>
          <li>Vocalist added to an instrumental lineup</li>
          <li>Extra musician for larger rooms</li>
          <li>Mileage outside Cook County ($2 per performer per mile)</li>
        </ul>
        <Link href="/pricing" className="underline font-bold w-max">
          See Full Pricing Breakdown
        </Link>
      </section>

      <FaqSection title="Chicago Jazz Pricing FAQs" />
    </main>
  );
}
