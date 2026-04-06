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
    body: "Your company party shouldn't feel like just another workday. With years of experience performing in corporate settings, Chicago Jazz Assembly performers know how to read the room and set the perfect vibe, from relaxed cocktail hours to upbeat networking sessions.",
    imgUrl: '/assets/img/corporate.webp',
  },
  {
    heading: 'Weddings',
    body: "Bring your wedding to life with music as special as the day itself. From the aisle to the afterparty, Chicago Jazz Assembly ensembles specialize in crafting the perfect soundtrack to romance and celebration.",
    imgUrl: '/assets/img/wedding.webp',
  },
  {
    heading: 'Private parties',
    body: "Set the tone for an unforgettable event. With years of experience at private celebrations, Chicago Jazz Assembly bands create a vibrant, feel-good atmosphere, whether you’re going for laid-back elegance or lively fun!",
    imgUrl: '/assets/img/party.webp',
  }
];

const AboutSection: React.FC<Props> = ({ title = 'Elevate your gathering.' }) => {
  return (
    <section id="caseStudies" className="flex flex-col gap-16 w-full max-w-4xl mx-auto">
      <div className="sm: text-center sm:max-w-md sm:mx-auto">
        <h2 className="text-2xl font-black">{title}</h2>
        <p className="">Take the headache out of booking the perfect live Jazz band for your next Chicago event. Custom build your lineup - from solo piano all the way to a swingin horn band - and get a quote fast! Transparent pricing. Quality 100% guaranteed.   </p>
      </div>

      <div className="flex flex-col gap-16 w-full">
        {aboutRows.map((row, i) => (
          <div
            key={i}
            className={`${styles.aboutRow} grid grid-cols-1 gap-6 items-center sm:grid-cols-2`}
          >
            <div
              className={`text flex flex-col justify-center border-l-2 border-amber-400 ps-3 ${
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
