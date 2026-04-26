
import Link from "next/link";
import FaqSection from "@/components/faq/FaqSection.component";
import { BookingForm } from '@/components/booking-form/BookingForm.component';

export default function Pricing() {
  return (
      <main className="p-5 flex flex-col gap-12 scroll-smooth">
        <section id="hero" className={`flex flex-col md:grid md:grid-cols-2 gap-6 justify-center items-center mx-auto w-full bg-blue-400/5 rounded-xl p-6`}>
            <div className="flex flex-col gap-6">
                <h1 className="flex flex-col gap-1 font-black text-5xl text-center">
                    Our pricing is simple.
                </h1>
                <h2 className='text-xl text-center'>$200 per musician per hour, that's it.</h2>

            </div>
            <div className="rounded-xl bg-white p-6 shadow-lg min-w-[324]">
                <BookingForm />
            </div>
        </section>

        <section className="rounded-xl p-6 flex flex-col justify-start gap-8 mx-auto w-full max-w-4xl">
            <h2 className="font-bold text-2xl">Real Pricing Examples</h2>

            <div className="flex flex-col gap-3">
                <h3 className="font-bold text-xl text-blue-400">Example 1</h3>
                <ul className="">
                    <li>Blues Trio (3 musicians x $200 = $600)</li>
                    <li>2 hours</li>
                </ul>
                <p className="font-bold">Total: $1,200</p>
            </div>

            <div className="flex flex-col gap-3">
                <h3 className="font-bold text-xl text-blue-400">Example 2</h3>
                <ul className="">
                    <li>Blues Quartet (4 musicians x $200 = $800)</li>
                    <li>3 hours</li>
                </ul>
                <p className="font-bold">Total: $2,400</p>
            </div>

            <div className="border-l-2 border-red-500 ps-3">
            <h3 className="font-bold text-xl text-blue-400">Example 3</h3>
                <ul className="ps-3 py-3">
                    <li>Blues Quintet (5 musicians x $200 = $1,000)</li>
                    <li>4 hours</li>
                </ul>
                <p className="font-bold">Total: $4,000</p>
            </div>
        </section>

        <section className="bg-blue-400/5 backdrop-blur-md rounded-xl p-6 flex flex-col justify-start gap-8 mx-auto w-full max-w-4xl">
            <h2 className="font-bold text-2xl">What&apos;s Included</h2>

            <div className="border-l-2 border-green-400 ps-3">
                <h3 className="font-bold">Included with every booking:</h3>
                <ul className="ps-3 py-3 list-disc">
                    <li>Professional Chicago blues musicians who look great and sound even better.</li>
                    <li>Total flexibility to customize the band.</li>
                    <li>Free PA system available for announcements and speeches.</li>
                </ul>
            </div>

            <div className="border-l-2 border-red-400 ps-3">
                <h3 className="font-bold">You DON&apos;T need to worry about:</h3>
                <ul className="ps-3 py-3 list-disc">
                    <li>Hidden production fees</li>
                    <li>Renting a sound system</li>
                    <li>Feeding the band (we do not require band meals in our contracts.)</li>
                    <li>Validating parking (we cover this expense for our performers when needed.)</li>
                </ul>
            </div>
        </section>

        <section className="bg-slate-400/5 backdrop-blur-md rounded-xl p-6 flex flex-col justify-start gap-8 mx-auto w-full max-w-4xl">
            <h2 className="font-bold text-2xl">What &quot;Hours On-Site&quot; means</h2>

            <div className="flex flex-col gap-3">
                <p>Blues bands are lightweight and flexible.</p>
                <p>We typically arrive shortly before playing and leave right after - so you’re only paying for the time you actually need music.</p>
                <p>If you’d like us set up early (for example, before guests arrive or during dinner transitions), we simply include that time in the hourly total so musicians are compensated fairly.</p>
            </div>
        </section>

        <section className="bg-slate-400/5 backdrop-blur-md rounded-xl p-6 flex flex-col justify-start gap-8 mx-auto w-full max-w-4xl">
            <h2 className="font-bold text-2xl">Sample Band Builds</h2>

            <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white p-3 rounded">
                    <h3 className="font-bold">Intimate Duo</h3>
                    <ul className="ps-3 py-3 list-disc">
                        <li>Blues Vocalist + Guitar</li>
                    <li>Great for smaller dinners and celebrations</li>
                    <li>Warm texture without overpowering conversation</li>
                        <li>Starting as low as $400</li>
                    </ul>
                    <Link
                        href='/'
                        className={`text-sm cursor-pointer font-bold px-4 py-2 rounded-full transition-all duration-500 bg-slate-900  text-white hover:scale-110 mx-auto w-max`}
                    >
                        Book it now!
                    </Link>
                </div>
                <div className="bg-white p-3 rounded">
                    <h3 className="font-bold">Classic Blues Trio</h3>
                    <ul className="ps-3 py-3 list-disc">
                        <li>Guitar + Bass + Drums</li>
                        <li>Ideal for cocktail hours and networking receptions</li>
                        <li>Steady groove with room-friendly volume</li>
                        <li>Starting as low as $600</li>
                    </ul>
                    <Link
                        href='/'
                        className={`text-sm cursor-pointer font-bold px-4 py-2 rounded-full transition-all duration-500 bg-slate-900  text-white hover:scale-110 mx-auto w-max`}
                    >
                        Book it now!
                    </Link>
                </div>
                <div className="bg-white p-3 rounded">
                    <h3 className="font-bold">Electric Blues Quartet</h3>
                    <ul className="ps-3 py-3 list-disc">
                        <li>Electric Guitar + Keys + Bass + Drums</li>
                        <li>Fuller sound with an energetic feel</li>
                        <li>Great when you want music to lead the room</li>
                        <li>Starting as low as $800</li>
                    </ul>
                    <Link
                        href='/'
                        className={`text-sm cursor-pointer font-bold px-4 py-2 rounded-full transition-all duration-500 bg-slate-900  text-white hover:scale-110 mx-auto w-max`}
                    >
                        Book it now!
                    </Link>
                </div>
                <div className="bg-white p-3 rounded">
                    <h3 className="font-bold">Chicago Blues Quintet</h3>
                    <ul className="ps-3 py-3 list-disc">
                        <li>Vocal + Guitar + Keys + Bass + Drums</li>
                        <li>Powerful, soulful, and dance-friendly</li>
                        <li>Best for high-energy receptions and parties</li>
                        <li>Starting as low as $1000</li>
                    </ul>
                    <Link
                        href='/'
                        className={`text-sm cursor-pointer font-bold px-4 py-2 rounded-full transition-all duration-500 bg-slate-900  text-white hover:scale-110 mx-auto w-max`}
                    >
                        Book it now!
                    </Link>
                </div>
            </div>
        </section>
        <FaqSection />
      </main>
  );
}