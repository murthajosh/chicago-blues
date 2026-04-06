import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface Props {
  // Define props here
  title?: string;
}

const EducationSection: React.FC<Props> = ({ title = 'Education' }) => {
  return (
    <section id='education' className='mx-auto w-full flex flex-col gap-3'>

      <h2 className="text-2xl font-black">{title}</h2>
      <Accordion type="single" collapsible className='flex flex-col gap-2'>
            <AccordionItem value="item-1" className='bg-blue-400/5 backdrop-blur-md rounded-xl p-6 w-full border-0'>
                <AccordionTrigger className='cursor-pointer'>JavaScript @ General Assembly</AccordionTrigger>
                <AccordionContent>
                When I was promoted to Jr. Developer at HDpiano, my responsibilities expanded beyond design into frontend code - building layouts, styling components, and solving interaction challenges. I had a working knowledge of JavaScript, but I wanted more depth. This course gave me that foundation, reinforcing core JS concepts and introducing me to modern tools like React, Bootstrap, and Tailwind. It rounded out my skill set and gave me the confidence to contribute not just as a designer who codes, but as a developer who designs.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className='bg-blue-400/5 backdrop-blur-md rounded-xl p-6 w-full border-0'>
                <AccordionTrigger className='cursor-pointer'>Frontend Development @ General Assembly </AccordionTrigger>
                <AccordionContent>
                UI designers are translators, bridging humans and machines. On one side are users and stakeholders; on the other, code and servers. To be effective in that role, I knew I needed to stretch both ways. I already had the UX skills to connect with people, and this frontend development course was my first deep dive into the technical side. I learned to write well-structured semantic HTML, style it with efficient CSS, and bring it to life with Vanilla JavaScript, all while focusing on accessibility and responsive design - skills that helped me understand how interfaces are really built.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className='bg-blue-400/5 backdrop-blur-md rounded-xl p-6 w-full border-0'>
                <AccordionTrigger className='cursor-pointer'>UX/UI Design Immersive @ Flatiron(Designation)</AccordionTrigger>
                <AccordionContent>
                I began my shift from full-time musician to digital designer in an in-person design immersive in downtown Chicago. After the fundamentals, I leaned into the UI track, collaborating with UX peers on real client projects. We researched, sketched, prototyped, tested, iterated and repeated the cycle to deliver polished, professional designs. It was hands-on, fast-paced, and the perfect training ground for turning creativity into practical impact.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className='bg-blue-400/5 backdrop-blur-md rounded-xl p-6 w-full border-0'>
                <AccordionTrigger className='cursor-pointer'>BA in Jazz Studies @ University of North Texas</AccordionTrigger>
                <AccordionContent>
                I see design the way I see music - both are about arranging patterns to move people. Colors set the mood and volume, negative space creates rhythm, contrast creates attention, and continuity guides the eye and ear. Whether it&apos;s a song or a sign-up flow, the goal is the same: create an experience that connects.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    </section>
  );
};

export default EducationSection;