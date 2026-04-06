import Link from 'next/link';
import Image from "next/image";
import { ArrowRightCircleIcon } from 'lucide-react';

interface Props {
  title?: string;
}

interface CaseStudy {
  title: string;
  description: string;
  imgUrl: string;
  linkUrl: string;
}

const caseStudies: CaseStudy[] = [  {
    title: 'App Nav Overhaul',
    description: 'Modernizing in-app navigation to improve discoverability of revenue-driving features',
    imgUrl: '/assets/case-studies/app-nav-overhaul/app-nav-cover.webp',
    linkUrl: '/case-studies/app-navigation',
  },
  {
    title: 'Unison Design System',
    description: 'Creating a shared design language to update legacy systems and overcome design debt',
    imgUrl: '/assets/case-studies/unison-design-system/unison-design-cover.webp',
    linkUrl: 'case-studies/unison-design-system',
  },
  {
    title: 'In-App Membership Screen',
    description: 'Improving conversion rate with visual design upgrades',
    imgUrl: '/assets/case-studies/app-pro-sign-up/app-pro-cover.webp',
    linkUrl: '/case-studies/app-pro-sign-up',
  },
    {
    title: 'Clarity After Purchase',
    description: 'Boosting customer sentiment and LTV with clear helpful guidance after checkout',
    imgUrl: '/assets/case-studies/web-receipt-clarity/web-receipt-cover.webp',
    linkUrl: 'case-studies/clarity-after-purchase',
  },
  // {
  //   title: 'Responsive Search Frontend',
  //   description: 'Bringing our search results page into the 21st century',
  //   folder: 'test-study-green',
  //   slideCount: 2,
  // },
  //   {
  //   title: 'Clarity After Purchase',
  //   description: 'Your purchase was successful! Great... now what?',
  //   folder: 'test-study-red',
  //   slideCount: 3,
  // },
  //   {
  //   title: 'Unison Design System',
  //   description: 'Aligning basic design tokens across web and mobile apps',
  //   folder: 'test-study-yellow',
  //   slideCount: 5,
  // },
  // {
  //   title: 'Membership Page Redesign',
  //   description: 'Presenting plans and perks properly',
  //   folder: 'test-study-yellow',
  //   slideCount: 5,
  // },
  // {
  //   title: 'Optimzing In-App Purchase Flow',
  //   description: 'Getting out of the way earlier',
  //   folder: 'test-study-yellow',
  //   slideCount: 5,
  // },
];

const CaseStudiesSection: React.FC<Props> = ({ title = 'UX/UI Case Studies' }) => {
  return (
    <section id="caseStudies" className="flex flex-col gap-3 w-full mx-auto">
      <h2 className="text-2xl font-black">{title}</h2>
      <div className="flex flex-col gap-6 w-full">
        {caseStudies.map((study, i) => (
          <Link href={study.linkUrl} key={i} className="flex flex-col gap-2 bg-blue-400/5 hover:bg-blue-400/20 backdrop-blur-md rounded-xl p-6 transition-all duration-500 ">
            <Image
              src={study.imgUrl}
              alt=""
              width={1200}
              height={675}
              className="block w-full h-auto object-contain rounded-xl max-w-full"
            />
            <h3 className="text-lg font-semibold">{study.title}</h3>
           <p>{study.description}</p>

          </Link>
        ))}
      </div>
      <Link href='/contact' className={`flex gap-2 items-center mx-auto mt-3 text-sm cursor-pointer font-bold px-4 py-2 w-max rounded-full transition-all duration-500 border-2 border-blue-500 hover:border-blue-600 text-blue-500 hover:text-blue-600 hover:scale-110`}>
          Contact
          <ArrowRightCircleIcon />
      </Link>
    </section>
  );
};

export default CaseStudiesSection;
