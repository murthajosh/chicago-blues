import type { Metadata } from "next";
import Link from "next/link";
import FaqSection from "@/components/faq/FaqSection.component";
import JsonLd from "@/components/seo/JsonLd.component";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.chicagobluesbands.com";

const pageTitle = "Chicago Blues Repertoire | Classic Songs for Corporate Events";
const pageDescription =
  "Explore the legendary Chicago blues artists and hit songs in our repertoire — from Muddy Waters and Howlin' Wolf to Buddy Guy. Book a blues band for your Chicago event.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: {
    canonical: `${siteUrl}/repertoire`,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: `${siteUrl}/repertoire`,
    type: "website",
  },
};

interface RepertoireSection {
  heading: string;
  body: string;
  songs: string[];
}

const repertoireSections: RepertoireSection[] = [
  {
    heading: "Overview",
    body: "Chicago blues took shape in the 1940s when musicians from the Mississippi Delta brought their acoustic traditions north to Chicago's South Side. There, they plugged in - turning up electric guitars and amplifying harmonicas until the music filled crowded clubs night after night. Labels like Chess Records captured this raw, urban sound and sent it around the world. The result was a style that felt tougher and louder than country blues, and one that would feed directly into R&B, rock and roll, and the British blues boom of the 1960s.",
    songs: [],
  },
  {
    heading: "Big Bill Broonzy",
    body: "One of the most versatile figures of the pre-war era, Big Bill Broonzy bridged folk, spirituals, and country blues into the emerging Chicago sound. He helped popularize blues across America and paved the way for the electric generation that followed. His standards remain cornerstones of any blues repertoire.",
    songs: ["I Can't Be Satisfied", "The Midnight Special"],
  },
  {
    heading: "Sonny Boy Williamson",
    body: "Known as the father of modern blues harp, Sonny Boy Williamson elevated the harmonica from accompaniment to a leading, expressive voice. Though his career was cut short, he mentored many of the great post-war Chicago players and left behind hundreds of recordings that still define the genre.",
    songs: ["Stop Breaking Down", "Good Morning School Girl", "Shake the Boogie"],
  },
  {
    heading: "Muddy Waters",
    body: "Muddy Waters is widely regarded as the father of modern Chicago blues. He took the Delta traditions he grew up with, electrified them, and built a band sound that became the template for blues, rock, and R&B for decades. His Chess Records catalog is among the most influential in American music.",
    songs: ["Hoochie Coochie Man", "I'm Ready", "Got My Mojo Workin'"],
  },
  {
    heading: "Howlin' Wolf",
    body: "With one of the most commanding voices in blues history, Howlin' Wolf brought a towering physical presence and Mississippi intensity to the Chicago scene. His Chess sides are primal, memorable, and endlessly covered by rock bands on both sides of the Atlantic.",
    songs: ["Smokestack Lightnin'", "Killing Floor", "Spoonful"],
  },
  {
    heading: "Little Walter",
    body: "Little Walter revolutionized blues harmonica by running it through a microphone and pushing the amplified sound into new territory - including distortion effects that predated much of rock guitar. He remains the only Rock and Roll Hall of Fame inductee recognized primarily for harmonica.",
    songs: ["Juke", "You're So Fine", "Mean Old World"],
  },
  {
    heading: "Willie Dixon",
    body: "As a songwriter, bassist, and producer, Willie Dixon shaped the Chicago blues canon more than almost anyone. He penned dozens of standards for Chess and other labels, then spent his later years advocating for blues artists' rights and recognition.",
    songs: ["Hoochie Coochie Man", "I Just Want to Make Love to You", "Little Red Rooster", "You Can't Judge a Book by Its Cover"],
  },
  {
    heading: "Bo Diddley",
    body: "Bo Diddley fused blues with a propulsive, syncopated rhythm that became one of rock and roll's most recognizable beats. His swaggering guitar work and showmanship influenced everyone from The Beatles and Rolling Stones to punk bands decades later.",
    songs: ["Who Do You Love?", "Pretty Thing"],
  },
  {
    heading: "Otis Rush",
    body: "Otis Rush defined the West Side Chicago sound - slower tempos, long bent notes, and a jazz-inflected feel that set him apart from the harder South Side style. His influence runs deep through rock guitarists from Eric Clapton to Peter Green.",
    songs: ["I Can't Quit You Baby", "Double Trouble"],
  },
  {
    heading: "Junior Wells",
    body: "Junior Wells helped pioneer the hard-driving, amplified harmonica style that became synonymous with Chicago blues. His partnership with guitarist Buddy Guy produced some of the most acclaimed blues recordings of the 1960s.",
    songs: ["Messin' With the Kid"],
  },
  {
    heading: "Buddy Guy",
    body: "Buddy Guy began as a session musician for Muddy Waters, Howlin' Wolf, and others before stepping into the spotlight as one of the most electrifying guitarists alive. His explosive stage presence and expressive playing have inspired generations of rock and blues musicians.",
    songs: ["I Just Want to Make Love to You", "Hoodoo Man Blues", "Damn Right I've Got the Blues"],
  },
];

const slugify = (heading: string) =>
  heading
    .toLowerCase()
    .replace(/'/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const repertoireSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/repertoire`,
      name: "Chicago Blues Repertoire",
      description: pageDescription,
      url: `${siteUrl}/repertoire`,
      isPartOf: { "@id": siteUrl },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Repertoire", item: `${siteUrl}/repertoire` },
      ],
    },
    {
      "@type": "ItemList",
      name: "Chicago Blues Artists & Songs",
      itemListElement: repertoireSections
        .filter((section) => section.heading !== "Overview")
        .map((section, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: section.heading,
          description: section.body,
        })),
    },
  ],
};

export default function Repertoire() {
  return (
    <main className="p-5 flex flex-col gap-6 scroll-smooth">
      <JsonLd data={repertoireSchema} />

      <section id="hero" className={`flex flex-col gap-6 justify-center items-center mx-auto w-full rounded-xl p-6 text-center max-w-6xl`}>
        <h1 className="flex flex-col gap-1 font-black text-5xl">
          Chicago Blues Repertoire
        </h1>
        <h2 className="text-xl">The legendary artists and songs that define the sound we bring to your event.</h2>
      </section>

      <nav aria-label="Breadcrumb" className="mx-auto w-full max-w-6xl text-sm text-gray-500 p-6">
        <ol className="flex gap-2">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page">Repertoire</li>
        </ol>
      </nav>

      {repertoireSections.map((section, i) => (
        <section
          key={i}
          id={slugify(section.heading)}
          className="rounded-xl p-6 flex flex-col justify-start gap-2 mx-auto w-full max-w-6xl"
        >
          <h2 className="font-bold text-3xl">{section.heading}</h2>
          {section.heading === "Overview" ? (
            <p>
              {section.body} Not sure what size band fits your event? Check our{" "}
              <Link href="/band-sizing-guide" className="font-bold hover:underline">
                band sizing guide
              </Link>
              .
            </p>
          ) : (
            <p>{section.body}</p>
          )}
          {section.songs.length > 0 && (
            <>
              <h3 className="font-bold">Top {section.heading} songs:</h3>
              <ul className="list-disc list-inside mt-1">
                {section.songs.map((song) => (
                  <li key={song}>{song}</li>
                ))}
              </ul>
            </>
          )}
        </section>
      ))}

      <section className="rounded-xl p-6 flex flex-col items-center gap-6 mx-auto w-full max-w-6xl text-center bg-slate-100/50">
        <h2 className="font-bold text-3xl">Ready to book a Chicago blues band?</h2>
        <p className="text-lg">
          Get a fast quote, explore our pricing, or find the right lineup for your event.
        </p>
        <div className="flex flex-col gap-4 items-center">
          <Link
            href="/"
            className="text-sm cursor-pointer font-bold px-4 py-2 rounded-full transition-all duration-500 bg-blue-500 hover:bg-blue-400 active:bg-blue-600 text-white hover:scale-110 w-max text-center"
          >
            Get a Quote
          </Link>
          <Link href="/band-sizing-guide" className="font-bold hover:underline">
            Band sizing guide
          </Link>
        </div>
      </section>

      <FaqSection />
    </main>
  );
}
