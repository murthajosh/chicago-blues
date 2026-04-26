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
    heading: 'Cocktail Hours & Dinners',
    body: "From client dinners to holiday cocktail parties, we deliver polished live Blues music that creates an upscale atmosphere without overpowering conversation",
    imgUrl: '/assets/img/singer.webp',
  },
  {
    heading: 'Networking Events & Mixers',
    body: "Keep guests engaged and the room energized with professional live Blues music tailored for receptions, mixers, and corporate social events.",
    imgUrl: '/assets/img/trumpeter.webp',
  },
  {
    heading: 'Conventions & Retreats',
    body: "Whether you're celebrating a product launch, a business milestone, or your annual Summer blowout, we match the energy you want. Keep it low-key and intimate or turn it up with a full horn band!",
    imgUrl: '/assets/img/saxophonist.webp',
  }
];

const AboutSection: React.FC<Props> = ({ title = 'Sweet home, Chicago.' }) => {
  return (
    <section id="caseStudies" className="flex flex-col gap-16 w-full max-w-4xl mx-auto">
      <div className="sm: text-center sm:max-w-lg sm:mx-auto">
        <h2 className="text-3xl font-black mb-2">{title}</h2>
        <p className="">Whether you're based in the Windy City or just gathering here, your company's event deserves a sonic backdrop that's as real and vibrant as the city itself!</p>
      </div>

      <div className="flex flex-col gap-16 w-full">
        {aboutRows.map((row, i) => (
          <div
            key={i}
            className={`${styles.aboutRow} grid grid-cols-1 gap-6 items-center sm:grid-cols-2`}
          >
            <div
              className={`text flex flex-col justify-center border-l-2 border-red-500 ps-3 ${
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
