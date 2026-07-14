import { CheckCircle, XIcon } from 'lucide-react';

const IncludedSection: React.FC = () => {
  return (
        <section className="rounded-xl flex flex-col justify-start gap-8 mx-auto w-full max-w-6xl">
          <h2 className="font-bold text-3xl">What&apos;s included with my booking?</h2>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-6">
              <div className="flex flex-col gap-3">
                  <ul className="flex flex-col gap-3">
                      <li className="flex gap-3 items-center"><CheckCircle className="text-green-500" size={24}/>An authentic and unforgettable soundtrack to your event</li>
                      <li className="flex gap-3 items-center"><CheckCircle className="text-green-500" size={24}/>Peace of mind with our hassle-free guarantee</li>
                      <li className="flex gap-3 items-center"><CheckCircle className="text-green-500" size={24}/>All sound equipment the band requires</li>
                  </ul>
              </div>

              <div className="flex flex-col gap-3">
                  <ul className="flex flex-col gap-3">
                      <li className="flex gap-3 items-center"><CheckCircle className="text-green-500" size={24}/>Fast communication and flexibility</li>
                      <li className="flex gap-3 items-center"><CheckCircle className="text-green-500" size={24}/>A simple flat rate - no upcharges for parking, travel or band meals</li>
                  </ul>
              </div>
          </div>
        </section>
  );
};

export default IncludedSection;
