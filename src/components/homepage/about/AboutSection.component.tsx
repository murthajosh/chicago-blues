import Image from "next/image";
import styles from '../about/AboutSection.module.scss';

interface Props {
  title?: string;
}

interface AboutRow {
  heading: string;
  body: string;
  imgUrl: string;
}

const aboutRows: AboutRow[] = [  {
    heading: 'Corporate events',
    body: "From networking mixers to office holiday galas, we shape the set around your event. Expect polished players, quick communication, and music that sets the perfect mood.",
    imgUrl: '/assets/img/singer.webp',
  },
  {
    heading: 'Weddings',
    body: "Your wedding music should feel personal, not generic. We build custom blues-forward ensembles for ceremonies, cocktail hour, dinner, and dance sets with smooth transitions all night.",
    imgUrl: '/assets/img/trumpeter.webp',
  },
  {
    heading: 'Private parties',
    body: "Birthday, anniversary, house concert, or backyard blowout, we match the energy you want. Keep it low-key and intimate or turn it up with a full rhythm section.",
    imgUrl: '/assets/img/saxophonist.webp',
  }
];

const AboutSection: React.FC<Props> = ({ title = 'Chicago events, built your way.' }) => {
  return (
    <section id="caseStudies" className="flex flex-col gap-16 w-full max-w-4xl mx-auto">
      <div className="sm: text-center sm:max-w-md sm:mx-auto">
        <h2 className="text-2xl font-black">{title}</h2>
        <p className="">No package traps and no mystery pricing. Choose your instrumentation, share your timeline, and get a fast quote from working Chicago musicians who know how to read a room.</p>
      </div>

      <div className="flex flex-col gap-16 w-full">
        {aboutRows.map((row, i) => (
          <div
            key={i}
            className={`${styles.aboutRow} grid grid-cols-1 gap-6 items-center sm:grid-cols-2`}
          >
            <div
              className={`text flex flex-col justify-center border-l-2 border-amber-700 ps-3 ${
                i % 2 === 1 ? "sm:order-2" : ""
              }`}
            >
              <h3 className="text-xl font-black w-full">{row.heading}</h3>
              <p>{row.body}</p>
            </div>

            <div className={`flex justify-center ${i % 2 === 1 ? "sm:order-1" : ""}`}>
              <Image
                src={row.imgUrl}
                alt=""
                width={600}
                height={400}
                className="w-75 rounded-xl h-auto max-w-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
