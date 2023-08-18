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
          at specific time. PWA is used to make the website can be installed on the phone, and
          <span className="text-main font-normal"> easily send the form in 2 clicks</span>.
        </p>
        <p className="indent-4">
          There are about <span className="text-main font-normal">7~10 users</span> use this service
          every weekday which include <span className="text-main font-normal">more than 50%</span>{' '}
          of the people who reserve dinner. Frontend is deployed with GitHub Pages, Backend is
          deployed with AWS Lambda and automated with Serverless Framework with CI/CD GitHub
          Actions.
        </p>
        <h2 className="text-lg mt-2 mb-1 font-normal border-b-main border-b-2 w-fit">Challenges</h2>
        <p className="indent-4">
          The start of this project is to automate the reservation process for the cafeteria. Many
          people include me feel the pain of having to enter the same data everytime. So, I decided
          to automate the process by using the data from the previous reservation. After starting
          the project, I received feedbacks from user that they want to be able to reserve dinner in
          advance. And there are another engineering student who want to help, so I worked with him
          to create advance reservation page.
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
