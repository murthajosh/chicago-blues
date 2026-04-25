import type { Metadata } from "next";
import Link from "next/link";
import FaqSection, { type FaqItem } from "@/components/faq/FaqSection.component";
import JsonLd from "@/components/seo/JsonLd.component";

export const metadata: Metadata = {
  title: "Blues Duo Chicago | Chicago Blues Assembly",
  description: "Hire a blues duo in Chicago for cocktail hours, dinners, and private events.",
};

export default function BluesDuoChicagoPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.chicagobluesassembly.com";
  const pageUrl = `${siteUrl}/blues-duo-chicago`;
  const faqItems: FaqItem[] = [
    { question: "What is the best blues duo format for cocktail hour?", answer: "Guitar + bass is most common, while guitar + harmonica is great for a rootsy feel." },
    { question: "How much does a blues duo cost in Chicago?", answer: "Duo pricing comes to $400 per hour on-site (2 performers x $200)" },
    { question: "Should I choose a duo or trio?", answer: "A duo works well for smaller events. For more groove and fuller sound, a trio is often a better fit." },
  ];
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "Blues Duo in Chicago", serviceType: "Blues duo", provider: { "@type": "LocalBusiness", name: "Chicago Blues Assembly", areaServed: "Chicago" }, areaServed: "Chicago", url: pageUrl };

  return (
    <main className="p-5 flex flex-col gap-12 scroll-smooth">
      <JsonLd data={serviceSchema} />
      <section className="flex flex-col gap-6 text-center mx-auto w-full max-w-4xl">
        <h1 className="font-bold text-3xl">Blues Duo in Chicago</h1>
        <p>
          A duo gives you more motion and depth than a solo set while keeping
          setup light. It is a strong fit for lounges, smaller weddings, and
          conversation-first events.
        </p>
        <Link href="/#hero" className="text-sm cursor-pointer font-bold px-4 py-2 rounded-full transition-all duration-500 bg-slate-900  text-white hover:scale-110 mx-auto w-max text-center">Build a Blues Duo</Link>
      </section>
      <section className="bg-slate-400/5 backdrop-blur-md rounded-xl p-6 flex flex-col gap-4 mx-auto w-full max-w-4xl">
        <h2 className="font-bold text-2xl">Popular Duo Pairings</h2>
        <p>
          Guitar + bass is a go-to for smooth pocket. Guitar + harmonica brings
          a classic Chicago blues edge with a small footprint.
        </p>
      </section>
      <FaqSection title="Blues Duo FAQs" items={faqItems} />
    </main>
  );
}
