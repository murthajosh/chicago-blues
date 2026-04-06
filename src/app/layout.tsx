import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/theme-context";
import Header from "@/components/header/Header.component";
import { Analytics } from "@vercel/analytics/next"
import Footer from "@/components/footer/Footer.component";
import JsonLd from "@/components/seo/JsonLd.component";


const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], 
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Chicago Jazz Assembly | The perfect band ",
  description: "Hire a custom jazz band for weddings, corporate events, and private parties. Transparent pricing. Fast quote.",
  icons: {
    icon: '/cjaFav.svg',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.chicagojazzassembly.com";
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Chicago Jazz Assembly",
    url: siteUrl,
    areaServed: {
      "@type": "City",
      name: "Chicago",
    },
    serviceType: "Live jazz music for weddings, corporate events, and private parties",
  };

  return (
    <html lang="en">
      <body
        className={`${figtree.className} antialiased`}
      >
        <ThemeProvider>
          <JsonLd data={localBusinessSchema} />
          <Header />
          {children}
          <Analytics />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
