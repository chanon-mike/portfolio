import { motion } from 'framer-motion';
import SectionWrapper from './wrapper/SectionWrapper';
import { logoVariant, textVariant } from '../utils/motion';

import Link from 'next/link';
import { useTranslation } from 'next-i18next';

type ProjectCardProps = {
  id: string;
  name: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
};

const ProjectCard = (project: ProjectCardProps) => {
  return (
    <Link href={project.link} key={project.name}>
      <motion.div
        variants={logoVariant()}
        className="flex flex-col max-w-sm rounded-xl overflow-hidden shadow-2xl bg-foreground cursor-pointer flex-grow"
      >
        <img className="aspect-auto w-full" src={project.image} alt={project.name} />
        <div className="px-6 py-4 flex flex-grow flex-col">
          <h2 className="font-bold mb-2 text-text lg:text-lg text-md">{project.name}</h2>
          <p className="flex-grow text-secondary lg:text-sm text-sm">{project.description}</p>
        </div>
        <div className="px-6 pb-3">
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
    </Link>
  );
};

const Project = () => {
  const { t } = useTranslation('project');
  const projectList = t('projectList', { returnObjects: true });

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
