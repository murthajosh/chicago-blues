
import FaqSection from "@/components/faq/FaqSection.component";
import { BookingForm } from '@/components/booking-form/BookingForm.component';
import { CheckCircle, XIcon } from 'lucide-react';


export default function Pricing() {
  return (
      <main className="p-5 flex flex-col gap-12 scroll-smooth">
        <section id="hero" className={`flex flex-col md:grid md:grid-cols-2 gap-6 justify-center items-center mx-auto w-full rounded-xl p-6 max-w-6xl`}>
            <div className="flex flex-col gap-6 text-center md:text-left">
                <h1 className="flex flex-col gap-1 font-black text-5xl">
                    Our pricing is simple.
                </h1>
                <h2 className='text-xl'>
                    <ul className="flex flex-col gap-3">
                        <li>$250 per musician per hour</li>
                        <li>$1,000 minimum booking</li>
                    </ul>
                </h2>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-lg min-w-[324]">
                <BookingForm />
            </div>
        </section>

        <section className="rounded-xl p-6 flex flex-col justify-start gap-8 mx-auto w-full max-w-6xl">
            <h2 className="font-bold text-3xl">Hassle-free, guaranteed.</h2>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-6">
                <div className="flex flex-col gap-3">
                    <ul className="flex flex-col gap-3">
                        <li className="flex gap-3 items-center"><CheckCircle className="text-green-500" size={24}/>We bring our own audio equipment.</li>
                        <li className="flex gap-3 items-center"><CheckCircle className="text-green-500" size={24}/>We handle our own parking fees.</li>
                        <li className="flex gap-3 items-center"><CheckCircle className="text-green-500" size={24}/>We don&apos;t require meals for the musicians.</li>
                    </ul>
                </div>

                <div className="flex flex-col gap-3">
                    <ul className="flex flex-col gap-3">
                        <li className="flex gap-3 items-center"><CheckCircle className="text-green-500" size={24}/>We don&apos;t charge mileage within the Chicago metro area.</li>
                        <li className="flex gap-3 items-center"><CheckCircle className="text-green-500" size={24}/>We are prompt and punctual.</li>
                        <li className="flex gap-3 items-center"><CheckCircle className="text-green-500" size={24}/>We look good, we sound good and we play to the room.</li>
                    </ul>
                </div>
            </div>
        </section>
        <FaqSection />
      </main>
  );
}