import { BookingForm } from '@/components/booking-form/BookingForm.component';
import styles from './HeroSection.module.scss'

const HeroSection: React.FC = () => {

  return (
    <section id="hero" className={`${styles.hero} flex flex-col gap-6 justify-center items-center mx-auto w-full bg-slate-400/5 rounded-xl p-6`}>
      <h1 className="flex flex-col gap-1 font-black text-5xl text-center">
        Hire a Chicago jazz band.
      </h1>
      <p className='text-lg text-center'>Build the perfect band for your Chicago event and get a quote fast.</p>
      <div className="rounded-xl bg-white p-6 min-w-[320] max-w-[480] shadow-lg">
        <BookingForm />
      </div>
    </section>
  );
};

export default HeroSection;
