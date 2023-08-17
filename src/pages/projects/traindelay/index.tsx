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
    <>
      <ProjectImage src={project.image} alt={project.name} />

      <ProjectTitle>{project.name}</ProjectTitle>

      <ProjectBadgeList tech={project.tech} />

      <ProjectDescription>
        <p className="indent-4">
          Web Application, Twitter bot and LINE bot providing train delay information in Tokyo.
          Utilized Tokyo-transportation open data APIs to provide real-time train delay updates for
          the Tokyo area. Ensured language support for Japanese and English, resulting in over 330
          followers over all Twitter bot accounts and receiving a special award in the 4th Open Data
          Challenge for Public Transportation in Tokyo.
        </p>
      </ProjectDescription>

      <ProjectExternalLink projectList={projectLink} />

      <div className="flex flex-col gap-2">
        <ProjectImage src="/projects/tokyo-train-delay2.png" alt="Tokyo Train Delay2" />
        <ProjectImage src="/projects/tokyo-train-delay3.png" alt="Tokyo Train Delay3" />
      </div>
    </>
  );
};

export default PageWrapper(Page);
