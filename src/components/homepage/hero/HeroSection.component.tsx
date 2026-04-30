import { BookingForm } from '@/components/booking-form/BookingForm.component';
import styles from './HeroSection.module.scss'

const HeroSection: React.FC = () => {

  return (
    <section id="hero" className={`${styles.hero} flex flex-col md:grid md:grid-cols-2 gap-6 justify-center items-center mx-auto w-full bg-blue-400/5 rounded-xl p-6`}>
      <div className="flex flex-col gap-6 text-center md:text-left">
        <h1 className="flex flex-col gap-1 font-black text-5xl">
          Hire a Chicago Blues band.
        </h1>
        <h2 className='text-xl'>Our simple pricing makes it fast and easy to book an authentic soundtrack for your Chicago event!</h2>
      </div>
      <div className="rounded-xl bg-white p-6 shadow-lg min-w-[324]">
        <BookingForm />
      </div>
    </section>
  );
};

export default HeroSection;
