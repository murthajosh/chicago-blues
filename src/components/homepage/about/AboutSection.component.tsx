import Image from "next/image";
import styles from '../about/AboutSection.module.scss';
import logoMark from '../../../../public/assets/img/cbbLogoMark.svg'

interface Props {
  title?: string;
}

interface AboutRow {
  heading: string;
  body: string;
  imgUrl: string;
}

const aboutRows: AboutRow[] = [  {
    heading: 'Galas & Dinners',
    body: "From client dinners to holiday cocktail parties, we deliver polished live Blues music that creates an upscale atmosphere without overpowering conversation.",
    imgUrl: '/assets/img/bassist.webp',
  },
  {
    heading: 'Networking Events & Mixers',
    body: "Keep guests engaged and the room energized with professional live Blues music tailored for receptions, mixers, and corporate social events.",
    imgUrl: '/assets/img/guitarist.webp',
  },
  {
    heading: 'Conventions & Retreats',
    body: "Getting the gang together? Make it a gathering to remember. Nothing brings people together like authentic live Blues music!",
    imgUrl: '/assets/img/harmonica.webp',
  },
  {
    heading: 'Parties & Celebrations',
    body: "Whether you're celebrating a product launch, a business milestone, or your annual Summer blowout, we match the energy you want. Keep it low-key and intimate or turn it up with a full horn band!",
    imgUrl: '/assets/img/horns.webp',
  }
];

const AboutSection: React.FC<Props> = ({ title = 'We do Blues, Chicago style.' }) => {
  return (
    <section className="flex flex-col gap-16 w-full mx-auto max-w-6xl">
      <div className="flex flex-col gap-3 items-center text-center max-w-xl mx-auto">
        <div className="flex gap-3 align-center">
          {[...Array(4)].map((_, i) => (
            <Image
              key={i}
              src={logoMark}
              alt=""
              width={48}
              height={48}
              className=""
            />
          ))}
        </div>
        <h2 className="text-3xl font-black mb-2">{title}</h2>
        <p className="">Whether you&apos;re based in the Windy City or just gathering here, your company&apos;s event deserves a sonic backdrop as real and vibrant as the city itself!</p>
        {/* <p className="font-bold">Listen to an audio sample</p>
        <audio controls src="/BluesSampler.mp3">
          Your browser does not support the audio element.
        </audio> */}
      </div>

      <div className="flex flex-col gap-16 w-full">
        {aboutRows.map((row, i) => (
          <div
            key={i}
            className={`${styles.aboutRow} text-center sm:text-left grid grid-cols-1 gap-6 items-center sm:grid-cols-2 bg-slate-100/50 rounded-xl p-6`}
          >
            <div
              className={`flex flex-col justify-center gap-4 ${
                i % 2 === 1 ? "sm:order-2" : ""
              }`}
            >
              <h3 className="text-2xl font-black w-full">{row.heading}</h3>
              <p>{row.body}</p>
            </div>

            <div className={`flex justify-center ${i % 2 === 1 ? "sm:order-1" : ""}`}>
              <Image
                src={row.imgUrl}
                alt=""
                width={600}
                height={400}
                className="w-75 rounded-full h-auto max-w-full object-cover"
              />
              {/* <p>****</p> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
