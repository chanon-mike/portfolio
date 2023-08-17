import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { logoVariant, textVariant } from '../utils/motion';
import { Project } from '../types';

const projectList: Project[] = [
  {
    name: 'Tokyo Train Delay',
    description:
      'Web Application, Twitter bot and LINE bot providing train delay information in Tokyo. Internationalization and responsive is supported.',
    tech: ['Django', 'Bootstrap', 'MongoDB'],
    image: 'projects/tokyo-train-delay.png',
    link: 'projects/tokyo-train-delay',
  },
  {
    name: 'AI-House Automation',
    description: 'Automating dinner reservation process for AI-House HUB-4 student dormitory.',
    tech: [
      'Next.js',
      'TypeScript',
      'FastAPI',
      'DynamoDB',
      'AWS Lambda',
      'Docker',
      'Github Actions',
    ],
    image: 'projects/aihouse-automation.png',
    link: 'projects/aihouse-automation',
  },
  {
    name: 'Naitei Journey',
    description:
      'Job hunting management application that allows students to grasp job hunting status at a glance. Easily managing selection status in the form of a Kanban board.',
    tech: ['Next.js', 'TypeScript', 'FastAPI', 'Docker'],
    image: 'projects/naitei-journey.png',
    link: 'projects/naiteijourney',
  },
  {
    name: 'Online Othello',
    description:
      'Online Othello game with lobby features. Players can create a room and invite their friends to play together.',
    tech: ['Next.js', 'TypeScript', 'Frourio', 'Fastify', 'Firebase', 'Prisma', 'Docker'],
    image: 'projects/online-othello.png',
    link: 'projects/onlineothello',
  },
];

const ProjectCard = (project: Project) => {
  return (
    <motion.div
      variants={logoVariant()}
      className="flex flex-col max-w-sm rounded-xl overflow-hidden shadow-2xl bg-foreground cursor-pointer flex-grow"
    >
      <img className="aspect-auto w-full" src={project.image} alt={project.name} />
      <div className="px-6 py-4 flex flex-grow flex-col">
        <h2 className="font-bold mb-2 text-text lg:text-lg text-sm">{project.name}</h2>
        <p className="flex-grow text-secondary lg:text-sm text-xs">{project.description}</p>
      </div>
      <div className="px-6 pb-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="inline-block bg-background rounded-full px-3 py-1 lg:text-xs text-[10px] text-text mr-1 mb-1"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Project = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="font-mono text-text">
        <div className="flex items-center justify-center gap-1 md:text-[48px] text-[36px]">
          <h1 className="font-bold text-accent">03.</h1>
          <h1 className="font-thin">Projects</h1>
        </div>
        <h3 className="flex justify-center mb-10 mx-4 font-thin text-xs text-center">
          Each one is a unique piece of project that I have worked on.
        </h3>
      </motion.div>

      <div className="grid md:grid-cols-2 justify-items-center items-stretch lg:mx-52 mx-10 gap-10">
        {projectList.map((project) => ProjectCard(project))}
      </div>
    </>
  );
};

export default SectionWrapper(Project, 'projects');
