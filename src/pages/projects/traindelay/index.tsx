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
import type { ProjectLink } from '../../../@types';
import { fadeIn } from '../../../utils/motion';

const projectLink: ProjectLink[] = [
  {
    title: 'Award',
    name: 'Special Prize - 4th Open Data Challenge for Public Transportation in Tokyo',
    link: 'https://tokyochallenge.odpt.org/2021/award/06.html#iniad3',
  },
  {
    title: 'Source',
    name: 'GitHub',
    link: 'https://github.com/chanon-mike/train-delay-team14',
  },
  {
    title: 'Demo',
    name: 'YouTube',
    link: 'https://youtu.be/BbSIhEUqbEE',
  },
  {
    title: 'Presentation',
    name: 'Lightning Talk - Tokyo Train Delay',
    link: 'https://drive.google.com/file/d/1rDAJv_f4vfR9QSpTJS_72NsBAEK2xq8K/view',
  },
  {
    title: 'Presentation',
    name: 'Final Presentation - Tokyo Train Delay',
    link: 'https://drive.google.com/file/d/1H20a9v7KwEb7Z4fjw_jCsYDN_URRZPMf/view',
  },
];

const project = projectList.filter((project) => project.name === 'Tokyo Train Delay')[0];

const Page = () => {
  return (
    <motion.div variants={fadeIn('down', '', 0, 0.25)}>
      <ProjectImage src={project.image} alt={project.name} />

      <ProjectTitle>{project.name}</ProjectTitle>

      <ProjectBadgeList tech={project.tech} />

      <ProjectDescription>
        <p className="indent-4">
          Web Application, Twitter bot and LINE bot providing train delay information in Tokyo.
          Utilized Tokyo-transportation open data APIs to provide real-time train delay updates for
          the Tokyo area. Ensured language support for Japanese and English, resulting in over
          <span className="text-main font-normal"> 330 </span>
          followers over all Twitter bot accounts and receiving a
          <span className="text-main font-normal">
            {' '}
            special award in the 4th Open Data Challenge for Public Transportation in Tokyo
          </span>
          .
        </p>
        <h2 className="text-lg mt-2 mb-1 font-normal border-b-main border-b-2 w-fit">Challenges</h2>
        <p className="indent-4">
          In Japan, when train delay happened, the train company will announce the delay on their
          website and station. However, the announcement is mostly in Japanese, and the information
          is not centralized. Which means, each train company will announce the delay on their own
          website. Therefore, this application is created to provide a centralized platform for
          train delay information. Utilizing web application, and social media platform such as
          Twitter and LINE, to provide train delay information in English and Japanese.
        </p>
      </ProjectDescription>

      <ProjectExternalLink projectList={projectLink} />

      <div className="flex flex-col gap-2">
        <ProjectImage src="/projects/tokyo-train-delay2.png" alt="Tokyo Train Delay2" />
        <ProjectImage src="/projects/tokyo-train-delay3.png" alt="Tokyo Train Delay3" />
      </div>
    </motion.div>
  );
};

export default PageWrapper(Page);
