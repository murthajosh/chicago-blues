
import Link from "next/link";
import FaqSection from "@/components/faq/FaqSection.component";
import { BookingForm } from '@/components/booking-form/BookingForm.component';
import { CheckCircle, XIcon } from 'lucide-react';


export default function Pricing() {
  return (
      <main className="p-5 flex flex-col gap-12 scroll-smooth">
        <section id="hero" className={`flex flex-col md:grid md:grid-cols-2 gap-6 justify-center items-center mx-auto w-full bg-blue-600/5 rounded-xl p-6`}>
            <div className="flex flex-col gap-6">
                <h1 className="flex flex-col gap-1 font-black text-5xl text-center">
                    Our pricing is simple.
                </h1>
                <h2 className='text-xl text-center'>$250 per musician per hour, with a $1,000 minimum booking.</h2>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-lg min-w-[324]">
                <BookingForm />
            </div>
        </section>

        <section className="rounded-xl p-6 flex flex-col justify-start items-center gap-8 mx-auto w-full max-w-4xl">
            <h2 className="font-bold text-3xl">Real Pricing Examples</h2>

            <div className="flex flex-col gap-6 w-full md:flex-row md:justify-between">
                <div className="border-2 rounded-xl w-full p-3 flex flex-col gap-3">
                    <h3 className="font-bold text-xl text-">Classic Blues Trio</h3>
                    <ul className="">
                        <li>(3 musicians x $250 = $750)</li>
                        <li>x 2 hours</li>
                    </ul>
                    <p className="font-bold">Total: $1,500</p>
                </div>

                <div className="border-2 rounded-xl w-full p-3 flex flex-col gap-3">
                    <h3 className="font-bold text-xl text-">Rockin&apos; Blues Quartet</h3>
                    <ul className="">
                        <li>(4 musicians x $250 = $1,000)</li>
                        <li>x 3 hours</li>
                    </ul>
                    <p className="font-bold">Total: $3,000</p>
                </div>

                <div className="border-2 rounded-xl w-full p-3 flex flex-col gap-3">
                    <h3 className="font-bold text-xl text-">5-Piece Blues Band</h3>
                    <ul className="">
                        <li>(5 musicians x $250 = $1,250)</li>
                        <li>x 4 hours</li>
                    </ul>
                    <p className="font-bold">Total: $5,000</p>
                </div>
            </div>

        </section>

        <section className="rounded-xl p-6 flex flex-col justify-start gap-8 mx-auto w-full max-w-4xl">
            <h2 className="font-bold text-3xl">Hassle-free, guaranteed.</h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="flex flex-col gap-3">
                    <h3 className="font-bold text-xl">Included with every booking</h3>
                    <ul className="flex flex-col gap-3">
                        <li className="flex gap-1 items-center"><CheckCircle className="text-green-500" size={16}/>Pro Chicago Blues musicians</li>
                        <li className="flex gap-1 items-center"><CheckCircle className="text-green-500" size={16}/>An authentic soundtrack to your event</li>
                        <li className="flex gap-1 items-center"><CheckCircle className="text-green-500" size={16}/>Fast communication and flexibility</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-3">
                    <h3 className="font-bold text-xl">You DON&apos;T need to worry about</h3>
                    <ul className="flex flex-col gap-3">
                        <li className="flex gap-1 items-center"><XIcon className="text-red-500" size={16}/>Hidden fees</li>
                        <li className="flex gap-1 items-center"><XIcon className="text-red-500" size={16}/>Feeding the band</li>
                        <li className="flex gap-1 items-center"><XIcon className="text-red-500" size={16}/>Validating parking</li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="rounded-xl p-6 flex flex-col justify-start gap-8 mx-auto w-full max-w-4xl">
            <h2 className="font-bold text-3xl">Sample Band Builds</h2>

            <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-blue-400/5 p-4 rounded space-y-3">
                    <h3 className="font-bold">Intimate Duo</h3>
                    <ul className="space-y-2">
                        <li>Blues Vocalist + Guitar</li>
                        <li>Great for smaller dinners and formal settings</li>
                    </ul>
                    <Link
                        href='/'
                        className={`text-sm cursor-pointer font-bold px-4 py-2 rounded-full transition-all duration-500 bg-slate-900  text-white hover:scale-110 mx-auto w-max`}
                    >
                        Book it now!
                    </Link>
                </div>
                <div className="bg-blue-400/5 p-4 rounded space-y-3">
                    <h3 className="font-bold">Classic Blues Trio</h3>
                    <ul className="space-y-2">
                        <li>Guitar + Bass + Drums</li>
                        <li>Ideal for cocktail hours and networking receptions</li>
                    </ul>
                    <Link
                        href='/'
                        className={`text-sm cursor-pointer font-bold px-4 py-2 rounded-full transition-all duration-500 bg-slate-900  text-white hover:scale-110 mx-auto w-max`}
                    >
                        Book it now!
                    </Link>
                </div>
                <div className="bg-blue-400/5 p-4 rounded space-y-3">
                    <h3 className="font-bold">Electric Blues Quartet</h3>
                    <ul className="space-y-2">
                        <li>Electric Guitar + Keys + Bass + Drums</li>
                        <li>Great when you want music to lead the room</li>
                    </ul>
                    <Link
                        href='/'
                        className={`text-sm cursor-pointer font-bold px-4 py-2 rounded-full transition-all duration-500 bg-slate-900  text-white hover:scale-110 mx-auto w-max`}
                    >
                        Book it now!
                    </Link>
                </div>
                <div className="bg-blue-400/5 p-4 rounded space-y-3">
                    <h3 className="font-bold">Chicago Blues Quintet</h3>
                    <ul className="space-y-2">
                        <li>Vocal + Guitar + Keys + Bass + Drums</li>
                        <li>Best for high-energy receptions and parties</li>
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