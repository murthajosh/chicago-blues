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
    answer: `Our smallest groups can fill a large hall with sound, and our largest groups can play quietly enough for intimate spaces - so we tell clients to think about the visual affect you're hoping to achieve in your event space.`,
  },
    {
    question: "How much does a jazz band cost in Chicago?",
    answer: `Pricing can vary widely - and so can quality. That's why we've made it our mission to provide pricing you can understand and quality you can trust!`,
  },
  {
    question: "Can the band perform other genres?",
    answer: `While Jazz is our specialty, we pride ourselves on flexibility. We don't provide full party bands, however Chicago Jazz Assembly groups can perform a wide range of styles, including but not limited to Blues, Soul, Motown, Folk and more!`,
  },
  {
    question: "Does the band take breaks?",
    answer: `We begin with a one-hour set. After that, each hour consists of a 15-minute break + 45-minutes of music. We can provide pre-recorded music during set breaks if necessary.`,
  },
  {
    question: "Does the band take song requests?",
    answer: `While we generally don't custom tailor entire setlists, we're happy to accomodate requests within reason. Let us know if there are certain songs you or your guests would love to hear!`,
  },
  {
    question: "Do you provide a sound system?",
    answer: `Yes, we provide all necessary sound equipment for the Jazz band. If you require a microphone and PA for announcements or speeches, one can be provided free of charge.`,
  },
  {
    question: "Am I required to provide meals for the band?",
    answer: `No. Our contracts do not require meals for the band. One less thing to worry about!`
  },
    {
    question: "Do you travel outside of Chicago?",
    answer: `Yes. Our booking quotes include mileage at a rate of $2 per performer / mile outside of Cook County. If your event is nearby, it amounts to a nominal amount - this policy just helps ensure that performers are compensated fairly for long-distance travel.`
  },
  {
    question: "How does payment work?",
    answer: `Once we confirm the details of your booking, you'll receive a contract and a link to a secure payment portal. We require a 50% deposit to complete your booking, with the remaining 50% to be paid within 7 days of services rendered.`,
  },
];

const FaqSection: React.FC<Props> = ({
  title = 'Frequently asked questions',
  items = defaultFaqItems,
}) => {
  return (
    <section id='faq' className='mx-auto w-full max-w-4xl flex flex-col gap-3'>
      <h2 className="text-2xl font-black">{title}</h2>

      <Accordion type="single" collapsible className='flex flex-col gap-2'>
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index + 1}`}
            className='bg-slate-400/5 backdrop-blur-md rounded-xl px-6 py-2 w-full border-0'
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