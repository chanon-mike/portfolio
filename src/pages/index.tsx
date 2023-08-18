import Experience from '../components/Experience';
import Hero from '../components/Hero';
import Overview from '../components/Overview';
import Project from '../components/Project';
import Skill from '../components/Skill';
import type { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home() {
  return (
    <div className="relative z-0 h-full">
      <Hero />
      <div className="lg:mx-40 sm:mx-16">
        <Overview />
        <Experience />
      </div>
      <Skill />
      <Project />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common', 'overview'])),
  },
});
