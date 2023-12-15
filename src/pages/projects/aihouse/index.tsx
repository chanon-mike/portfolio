import { motion } from 'framer-motion';
import type { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import {
  ProjectBadgeList,
  ProjectDescription,
  ProjectExternalLink,
  ProjectImage,
  ProjectTitle,
} from '../../../components/ProjectDetail';
import PageWrapper from '../../../components/wrapper/PageWrapper';
import { fadeIn } from '../../../utils/motion';

const Page = () => {
  const { t } = useTranslation(['aihouse', 'project']);

  const projectList = t('projectList', { returnObjects: true, ns: 'project' });
  const project = projectList.filter((project) => project.id === 'aihouse')[0];
  const projectLink = t('projectLink', { returnObjects: true, ns: 'aihouse' });

  return (
    <motion.div variants={fadeIn('down', '', 0, 0.25)}>
      <ProjectImage src={project.image} alt={project.name} />

      <ProjectTitle>{project.name}</ProjectTitle>

      <ProjectBadgeList tech={project.tech} />

      <ProjectDescription>
        <p className="indent-4">
          {t('description.1.1')}
          <strong className="text-main font-normal">{t('description.1.2')}</strong>
        </p>
        <p className="indent-4">
          {t('description.2.1')}
          <strong className="text-main font-normal">{t('description.2.2')}</strong>
          {t('description.2.3')}
          <strong className="text-main font-normal">{t('description.2.4')}</strong>
          {t('description.2.5')}
        </p>
        <h2 className="text-lg mt-2 mb-1 font-normal border-b-main border-b-2 w-fit">
          {t('challenge')}
        </h2>
        <p className="indent-4">{t('description.3')}</p>
      </ProjectDescription>

      <ProjectExternalLink projectLink={projectLink} />

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

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['project', 'aihouse'])),
  },
});
