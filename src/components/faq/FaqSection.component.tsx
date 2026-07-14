import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export interface FaqItem {
  question: string;
  answer: string;
}

interface Props {
  title?: string;
  items?: FaqItem[];
}

export const defaultFaqItems: FaqItem[] = [
    {
    question: "How many musicians do I need for my event?",
    answer: `Start with the room and the mood. Solo and duo builds are great for intimate settings, while trios and quartets give you more groove and a fuller sound in larger spaces.`,
  },
    {
    question: "How much does a blues band cost in Chicago?",
    answer: `Rates vary based on many factors. When you book with ChicagoBluesBands.com, your total depends on lineup size and event length. Get a fast quote today!`,
  },
  {
    question: "Can the band perform other genres?",
    answer: `Yes. Blues is the core sound, but our players also cover soul, R&B, Motown, and classic roots repertoire to fit the crowd and format.`,
  },
  {
    question: "Does the band take breaks?",
    answer: `Yes. A common format is a first set up to one hour, then 15 minutes off / 45 minutes on for subsequent hours. We can also adjust set lengths around speeches, toasts, or program cues.`,
  },
  {
    question: "Does the band take song requests?",
    answer: `We can accommodate select requests within reason and when shared in advance, but we are not able to tailor entire setlists beyond our standard classic Chicago Blues repertoire.`,
  },
  {
    question: "Do you provide a sound system?",
    answer: `Yes. We bring the essentials for the band setup, and we can provide a microphone/PA option for announcements when needed.`,
  },
  {
    question: "Am I required to provide meals for the band?",
    answer: `No, band meals are not required in our agreements.`
  },
    {
    question: "Do you travel outside of Chicago?",
    answer: `Yes. We regularly travel beyond city limits.`
  },
  {
    question: "How does payment work?",
    answer: `After we confirm details, we send a contract and secure payment link. A 50% deposit reserves the date, with the balance due within 7 days after the event.`,
  },
];

const FaqSection: React.FC<Props> = ({
  title = 'Frequently asked questions',
  items = defaultFaqItems,
}) => {
  return (
    <section id='faq' className='mx-auto w-full flex flex-col gap-6 max-w-6xl'>
      <h2 className="text-3xl font-black">{title}</h2>

      <Accordion type="single" collapsible className='flex flex-col gap-2'>
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index + 1}`}
            className='w-full bg-slate-100/50 rounded-xl p-6 shadow-non border-0'
          >
            <AccordionTrigger className='cursor-pointer'>
              {item.question}
            </AccordionTrigger>
            <AccordionContent>
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FaqSection;