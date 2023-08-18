import { motion } from 'framer-motion';
import {
  ProjectBadgeList,
  ProjectDescription,
  ProjectExternalLink,
  ProjectImage,
  ProjectTitle,
} from '../../../components/ProjectDetail';
import PageWrapper from '../../../components/wrapper/PageWrapper';
import { fadeIn } from '../../../utils/motion';
import { useTranslation } from 'next-i18next';
import type { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Page = () => {
  const { t } = useTranslation(['traindelay', 'project']);

  const projectList = t('projectList', { returnObjects: true, ns: 'project' });
  const project = projectList.filter((project) => project.id === 'traindelay')[0];
  const projectLink = t('projectLink', { returnObjects: true, ns: 'traindelay' });

  return (
    <motion.div variants={fadeIn('down', '', 0, 0.25)}>
      <ProjectImage src={project.image} alt={project.name} />

      <ProjectTitle>{project.name}</ProjectTitle>

      <ProjectBadgeList tech={project.tech} />

      <ProjectDescription>
        <p className="indent-4">
          {t('description.1.1')}
          <span className="text-main font-normal">{t('description.1.2')}</span>
          {t('description.1.3')}
          <span className="text-main font-normal">{t('description.1.4')}</span>
          {t('description.1.5')}
        </p>
        <h2 className="text-lg mt-2 mb-1 font-normal border-b-main border-b-2 w-fit">
          {t('challenges')}
        </h2>
        <p className="indent-4">{t('description.2')}</p>
      </ProjectDescription>

      <ProjectExternalLink projectLink={projectLink} />

      <div className="flex flex-col gap-2">
        <ProjectImage src="/projects/tokyo-train-delay2.png" alt="Tokyo Train Delay2" />
        <ProjectImage src="/projects/tokyo-train-delay3.png" alt="Tokyo Train Delay3" />
      </div>
    </motion.div>
  );
};

export default PageWrapper(Page);

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['project', 'traindelay'])),
  },
});
