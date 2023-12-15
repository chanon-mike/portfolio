import { motion } from 'framer-motion';
import type { GetStaticProps } from 'next';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import {
  ProjectBadgeList,
  ProjectDescription,
  ProjectExternalLink,
  ProjectImage,
  ProjectTitle,
} from '@/components/ProjectDetail';
import PageWrapper from '@/components/wrapper/PageWrapper';
import { fadeIn } from '@/utils/motion';

const Page = () => {
  const { t } = useTranslation(['naiteijourney', 'project']);

  const projectList = t('projectList', { returnObjects: true, ns: 'project' });
  const project = projectList.filter((project) => project.id === 'naiteijourney')[0];
  const projectLink = t('projectLink', { returnObjects: true, ns: 'naiteijourney' });

  return (
    <motion.div variants={fadeIn('down', '', 0, 0.25)}>
      <ProjectImage src={project.image} alt={project.name} />

      <ProjectTitle>{project.name}</ProjectTitle>

      <ProjectBadgeList tech={project.tech} />

      <ProjectDescription>
        <p className="indent-4">{t('description.1')}</p>
        <p className="indent-4">
          {t('description.2.1')}
          <Link
            className="text-main"
            href="https://talent.supporterz.jp/events/2ceb6278-e220-4675-b367-ca4f15af8d27/"
          >
            {t('description.2.2')}
          </Link>
          {t('description.2.3')}
          <Link className="text-main" href="https://talent.supporterz.jp/geekten/2023/">
            {t('description.2.4')}
          </Link>
          {t('description.2.5')}
        </p>
        <h2 className="text-lg mt-2 mb-1 font-normal border-b-main border-b-2 w-fit">
          {t('challenges')}
        </h2>
        <p className="indent-4">{t('description.3')}</p>
      </ProjectDescription>

      <ProjectExternalLink projectLink={projectLink} />

      <div className="flex flex-col gap-2">
        <ProjectImage src="/projects/naitei-journey2.png" alt="Naitei Journey2" />
      </div>
    </motion.div>
  );
};

export default PageWrapper(Page);

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['project', 'naiteijourney'])),
  },
});
