
import { HandshakeIcon, StarsIcon, Music4Icon, HelpingHand, StarIcon, BicepsFlexedIcon, GuitarIcon } from 'lucide-react';

const WhySection: React.FC = () => {
  return (
    <section className="rounded-xl p-6 flex flex-col justify-start items-center gap-8 mx-auto w-full max-w-6xl">
      <h2 className="font-bold text-3xl text-left w-full">Why book with us?</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-8">
          <div className="w-full flex flex-col gap-3 border border-1 border-blue-100 rounded-xl p-6">
            <div className="flex gap2 align-center justify-start">
            <StarIcon className="text-blue-500" size={24} />
            <StarIcon className="text-blue-500" size={24} />
            <StarIcon className="text-blue-500" size={24} />
            <StarIcon className="text-blue-500" size={24} />
            <StarIcon className="text-blue-500" size={24} />
            </div>
              <h3 className="font-bold text-xl text-">Quality</h3>
              <p className="">Our Blues bands have the look, the chops and the know-how to take your event to the next level.</p>
          </div>

          <div className="w-full flex flex-col gap-3 border border-1 border-blue-100 rounded-xl p-6">
              <GuitarIcon className="text-blue-500" size={24} />
              <h3 className="font-bold text-xl text-">Experience</h3>
              <p className="">The musicians on our roster have spent decades honing their craft in the Chicago Blues scene. </p>
          </div>

          <div className="w-full flex flex-col gap-3 border border-1 border-blue-100 rounded-xl p-6">
              <HandshakeIcon className="text-blue-500" size={24} />
              <h3 className="font-bold text-xl text-">Transparency</h3>
              <p className="">Our pricing model is simple with no sneaky upsells or surprise hidden fees.</p>
          </div>

          <div className="w-full flex flex-col gap-3 border border-1 border-blue-100 rounded-xl p-6">
              <BicepsFlexedIcon className="text-blue-500" size={24} />
              <h3 className="font-bold text-xl text-">Flexibility</h3>
              <p className="">We work within the constraints of your venue and schedule to make sure your event flows.</p>
          </div>
      </div>
    </section>
  );
};

export default WhySection;
