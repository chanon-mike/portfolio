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
    name: 'AI-House Automation',
    link: 'https://chanon-mike.github.io/aihouse-automation/',
  },
  {
    title: 'Source',
    name: 'GitHub',
    link: 'https://github.com/chanon-mike/aihouse-automation',
  },
];

const project = projectList.filter((project) => project.name === 'AI-House Automation')[0];

const Page = () => {
  return (
    <motion.div variants={fadeIn('down', '', 0, 0.25)}>
      <ProjectImage src={project.image} alt={project.name} />

      <ProjectTitle>{project.name}</ProjectTitle>

      <ProjectBadgeList tech={project.tech} />

      <ProjectDescription>
        <p className="indent-4">
          Automating dinner reservation process for AI-House HUB-4 student dormitory. The data
          entered in the form is keep as a client local storage, so user can automated the
          reservation process without having to login. The reservation process is send to the server
          and saved in the database. Cron task is used to send the reservation form to the cafeteria
          at specific time.
        </p>
        <p className="indent-4">
          There are about 7~10 users use this service every weekday which include more than 50% of
          the people who reserve dinner. Frontend is deployed with GitHub Pages, Backend is deployed
          with AWS Lambda and automated with Serverless Framework with CI/CD GitHub Actions.
        </p>
      </ProjectDescription>

      <ProjectExternalLink projectList={projectLink} />

      <div className="flex flex-col gap-2">
        <ProjectImage
          src="/projects/aihouse-diagram.png"
          alt="AI-House Automation System Diagram"
        />
      </div>
    </motion.div>
  );
};

export default PageWrapper(Page);
