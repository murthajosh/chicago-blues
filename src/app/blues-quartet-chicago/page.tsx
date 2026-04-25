import type { Metadata } from "next";
import Link from "next/link";
import FaqSection, { type FaqItem } from "@/components/faq/FaqSection.component";
import JsonLd from "@/components/seo/JsonLd.component";

export const metadata: Metadata = {
  title: "Blues Quartet Chicago | Chicago Blues Assembly",
  description: "Hire a blues quartet in Chicago when you need a fuller sound for weddings and events.",
};

export default function BluesQuartetChicagoPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.chicagobluesassembly.com";
  const pageUrl = `${siteUrl}/blues-quartet-chicago`;
  const faqItems: FaqItem[] = [
    { question: "When should I choose a quartet over a trio?", answer: "A quartet is often better for larger rooms or when you want a fuller melodic sound." },
    { question: "How much does a blues quartet cost in Chicago?", answer: "Quartet pricing comes to $800 per hour on-site (4 performers x $200)." },
    { question: "Can I choose the lead instrument in a quartet?", answer: "Yes. Common lead options include harmonica, saxophone, guitar, or vocalist." },
  ];
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "Blues Quartet in Chicago", serviceType: "Blues quartet", provider: { "@type": "LocalBusiness", name: "Chicago Blues Assembly", areaServed: "Chicago" }, areaServed: "Chicago", url: pageUrl };

  return (
    <main className="p-5 flex flex-col gap-12 scroll-smooth">
      <JsonLd data={serviceSchema} />
      <section className="flex flex-col gap-6 text-center mx-auto w-full max-w-4xl">
        <h1 className="font-bold text-3xl">Blues Quartet in Chicago</h1>
        <p>
          A quartet adds depth, punch, and melodic color while staying flexible
          for event flow. It is a great option when a trio feels just a little
          too small for the room.
        </p>
        <Link href="/#hero" className="text-sm cursor-pointer font-bold px-4 py-2 rounded-full transition-all duration-500 bg-slate-900 hover:bg-chi-blue text-white hover:scale-110 mx-auto w-max text-center">Build a Blues Quartet</Link>
      </section>
      <section className="bg-slate-400/5 backdrop-blur-md rounded-xl p-6 flex flex-col gap-4 mx-auto w-full max-w-4xl">
        <h2 className="font-bold text-2xl">Great for Bigger Rooms</h2>
        <p>
          Quartets are a favorite for ballrooms, larger receptions, and events
          where you want music that feels present but not overpowering.
        </p>
      </section>
      <FaqSection title="Blues Quartet FAQs" items={faqItems} />
    </main>
  );
}
