import Link from 'next/link';
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
import { motion } from 'framer-motion';
import { fadeIn } from '../../../utils/motion';

const projectLink: ProjectLink[] = [
  {
    title: 'Website',
    name: 'Naitei Journey',
    link: 'https://naitei-journey.vercel.app/',
  },
  {
    title: 'Source',
    name: 'GitHub',
    link: 'https://github.com/chanon-mike/naitei-journey',
  },
  {
    title: 'Demo',
    name: 'YouTube',
    link: 'https://www.youtube.com/watch?v=cjXLNUXjS8U',
  },
  {
    title: 'Presentation',
    name: 'First Round - Geekten 2023',
    link: 'https://drive.google.com/file/d/1zswW8g6aLywxphShpBWBJPh7SLemN3t-/view?usp=sharing',
  },
];

const project = projectList.filter((project) => project.name === 'Naitei Journey')[0];

const Page = () => {
  return (
    <motion.div variants={fadeIn('down', '', 0, 0.25)}>
      <ProjectImage src={project.image} alt={project.name} />

      <ProjectTitle>{project.name}</ProjectTitle>

      <ProjectBadgeList tech={project.tech} />

      <ProjectDescription>
        <p className="indent-4">
          Job hunting management application that allows students to grasp job hunting status at a
          glance. User can easily managing selection status in the form of a Kanban board. User can
          enter applied position information such as company name, posiiton, url, current
          application status, application flow, etc. These data will be saved to the server and can
          be accessed every time logged in.
        </p>
        <p className="indent-4">
          This project is developed in a team of 2 people. My responsibility is including frontend
          design, backend server and deployment. This application is developed in Geek Project,
          <Link
            className="text-main"
            href="https://talent.supporterz.jp/events/2ceb6278-e220-4675-b367-ca4f15af8d27/"
          >
            {' '}
            Monthly Hackathon vol.7{' '}
          </Link>
          and presented in
          <Link className="text-main" href="https://talent.supporterz.jp/geekten/2023/">
            {' '}
            Geekten 2023
          </Link>
          .
        </p>
      </ProjectDescription>

      <ProjectExternalLink projectList={projectLink} />

      <div className="flex flex-col gap-2">
        <ProjectImage src="/projects/naitei-journey2.png" alt="Naitei Journey2" />
      </div>
    </motion.div>
  );
};

export default PageWrapper(Page);
