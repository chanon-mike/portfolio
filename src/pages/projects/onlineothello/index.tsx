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
          Online Othello game with lobby features. Player can create a room and invite other player
          to join. Player can also join a room that is already created and spectate the game.
        </p>
        <h2 className="text-lg mt-2 mb-1 font-normal border-b-main border-b-2 w-fit">Challenges</h2>
        <p className="indent-4">
          This application was created in the INIAD Developer Circle. The goal of this project is to
          create a real-time online application. This application was a new challenge for me in term
          of technology. Most of the tech stack here is my first time, such as Fastify, Frourio,
          Firebase, Prisma, etc. It is also my first time created real-time application and online
          features.
        </p>
      </ProjectDescription>

      <ProjectExternalLink projectList={projectLink} />
    </motion.div>
  );
};

export default PageWrapper(Page);
