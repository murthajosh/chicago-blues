import Image from 'next/image';

interface Props {
  title?: string;
}

const techStack = [
  { name: 'Figma', logo: 'figma.svg' },
  { name: 'HTML', logo: 'html.svg' },
  { name: 'CSS', logo: 'css.svg' },
  { name: 'Sass', logo: 'sass.svg' },
  { name: 'JavaScript', logo: 'javascript.svg' },
  { name: 'TypeScript', logo: 'typescript.svg' },
  { name: 'React', logo: 'react.svg' },
  { name: 'NextJS', logo: 'nextjs.svg' },
  { name: 'Bootstrap', logo: 'bootstrap.svg' },
  { name: 'ReactBootstrap', logo: 'reactbootstrap.svg' },
  { name: 'Tailwind', logo: 'tailwind.svg' },
  { name: 'Jira', logo: 'jira.svg' },
  { name: 'Slack', logo: 'slack.svg' },
];

const ToolkitSection: React.FC<Props> = ({ title = 'Toolkit' }) => {
  return (
    <section id="toolkit" className="flex flex-col gap-3 w-full mx-auto">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <ul className="flex flex-wrap gap-3 bg-blue-400/5 backdrop-blur-md rounded-xl p-6 w-full">
        {techStack.map((tech) => (
          <li key={tech.name} className="py-2 px-3 rounded-full bg-blue-300/20 flex items-center gap-2">
            <Image
              src={`/tech-logos/${tech.logo}`}
              alt={tech.name}
              width={24}
              height={24}
            />
            <span>{tech.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ToolkitSection;
