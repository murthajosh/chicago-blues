
import FaqSection from "@/components/faq/FaqSection.component";

interface SizingSection {
    heading: string;
    body: string;
  }

  const bandSizingSections: SizingSection[] = [  {
    heading: 'Overview',
    body: "When planning live music for a corporate event in Chicago, the size of the band you choose does more than fill a stage; it sets the tone for the entire experience. A smaller group creates intimacy and leaves room for conversation, while a larger ensemble delivers energy, spectacle, and a stronger visual presence. The right fit depends on your goals. Are you hosting a networking-heavy cocktail hour, a formal dinner, or a high-energy celebration? Room size, guest count, and production needs all matter, but just as important is the impression you want to leave. From understated elegance to full-on showmanship, Chicago blues bands can scale to match the moment.",
  },
  {
    heading: 'Soloist (Piano or Guitar)',
    body: "A solo blues musician is the most flexible and space-conscious option for corporate events. Whether you choose a pianist or guitarist, instrumental or vocal, a soloist provides a refined, unobtrusive soundtrack that enhances the atmosphere without competing for attention. This format works especially well for cocktail hours, welcome receptions, and smaller executive gatherings where conversation is the priority. With minimal setup requirements and total control over volume, a solo performer can adapt instantly to the flow of the room, delivering classic Chicago blues with subtlety and polish.",
  },
  {
    heading: 'Duo',
    body: "A duo strikes a balance between simplicity and musical depth. Common pairings like guitar and bass, guitar and piano, or bass and piano, create a fuller sound than a soloist while still maintaining a relaxed, conversational feel. Duos are ideal for mid-sized corporate events where you want a bit more rhythmic presence without overwhelming the space. The interplay between two musicians adds texture and movement, giving the music a sense of spontaneity that feels both engaging and approachable. It's an excellent choice for cocktail receptions, dinners, and client appreciation events.",
  },
  {
    heading: 'Trio',
    body: "The trio is a classic blues format and one of the most versatile options for corporate settings. A guitarist/vocalist with bass and drums delivers the authentic, driving feel of Chicago blues. It's perfect for events that need energy without going over the top. For more volume-sensitive environments, a guitar, bass, and piano trio offers a smoother, more controlled dynamic while still feeling complete. Trios are ideal for events transitioning from networking to entertainment, as they can easily shift from background ambiance to a more engaging, toe-tapping performance as the night unfolds.",
  },
  {
    heading: 'Quartet',
    body: "A quartet represents the fullest version of a “standard” blues band, offering a rich, balanced sound that feels both professional and immersive. With the addition of a fourth player - often a keyboardist, second guitarist, or harmonica player, the music gains depth, variety, and a stronger stage presence. Quartets are a great fit for corporate events where live music plays a central role, such as company parties, larger receptions, or branded experiences. They deliver enough energy to command attention while still maintaining the sophistication expected in a corporate environment.",
  },
  {
    heading: 'Quintet',
    body: "A quintet typically introduces a new sonic dimension, often through a horn player or a dedicated vocalist/harmonica performer. This added layer elevates both the sound and the visual impact of the band, making it feel more like a show. The presence of a saxophone or trumpet instantly adds punch, melody, and excitement. Quintets are ideal for corporate events where you want to make a statement: larger gatherings, milestone celebrations, or events where music is a focal point rather than background.",
  },
  {
    heading: 'Sextet, Septet & Octet (Larger Bands)',
    body: "For maximum impact, larger blues bands featuring six to eight musicians deliver a dynamic, high-energy experience that's impossible to ignore. With multiple horns, a full rhythm section, and often a dedicated frontperson, these ensembles create a powerful visual and sonic presence that can anchor an entire event. They're particularly effective for galas, large corporate parties, and end-of-year celebrations where entertainment is a headline feature. Beyond volume and energy, larger bands offer greater variety in arrangements and textures, bringing the full spectrum of Chicago blues to life in a way that feels bold, celebratory, and unforgettable.",
  },
];

export default function BandSizingGuide() {
  return (
      <main className="p-5 flex flex-col gap-6 scroll-smooth">
        <section id="hero" className={`flex flex-col gap-6 justify-center items-center mx-auto w-full rounded-xl p-6 text-center max-w-4xl`}>
            <h1 className="flex flex-col gap-1 font-black text-5xl">
                Blues Band Sizing Guide
            </h1>
            <h2 className='text-xl'>Wondering what size band is best for your event? We&apos;ll help you dial in the perfect lineup.</h2>
        </section>

        {bandSizingSections.map((section, i) => (
            <section key={i} className="rounded-xl p-6 flex flex-col justify-start gap-2 mx-auto w-full max-w-4xl">
                <h2 className="font-bold text-3xl">{section.heading}</h2>
                <p>{section.body}</p>
            </section>
        ))}
        <FaqSection />
      </main>
  );
}