import { motion } from 'framer-motion';
import { projectList } from '../../../components/Project';
import {
  ProjectBadgeList,
  ProjectDescription,
  ProjectExternalLink,
  ProjectImage,
  ProjectTitle,
} from '../../../components/ProjectDetail';
import PageWrapper from '../../../components/wrapper/PageWrapper';
import type { ProjectLink } from '../../../types';
import { fadeIn } from '../../../utils/motion';

const projectLink: ProjectLink[] = [
  {
    title: 'Website',
    name: 'Online Othello',
    link: 'https://online-othello-frontend.onrender.com/',
  },
  {
    title: 'Source',
    name: 'GitHub',
    link: 'https://github.com/chanon-mike/online-othello',
  },
];

const project = projectList.filter((project) => project.name === 'Online Othello')[0];

const Page = () => {
  return (
    <motion.div variants={fadeIn('down', '', 0, 0.25)}>
      <ProjectImage src={project.image} alt={project.name} />

      <ProjectTitle>{project.name}</ProjectTitle>

      <ProjectBadgeList tech={project.tech} />

      <ProjectDescription>
        <p className="indent-4">
          Online Othello game with lobby features. Players can create a room and invite their
          friends to play together. This application was a new challenge for me in term of
          technology. Most of the tech stack here is my first time, such as Fastify, Frourio,
          Firebase, Prisma, etc. It is also my first time created real-time application and online
          features.
        </p>
      </ProjectDescription>

      <ProjectExternalLink projectList={projectLink} />
    </motion.div>
  );
};

export default PageWrapper(Page);
