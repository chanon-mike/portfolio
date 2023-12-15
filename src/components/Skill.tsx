import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';

import { Skill } from '@/@types';
import { fadeIn, logoVariant, textVariant } from '@/utils/motion';

import SkillIcon from './SkillIcon';
import SectionWrapper from './wrapper/SectionWrapper';

const programmingSkills: Skill[] = [
  {
    name: 'Python',
    icon: '/skills_icon/Python-Dark.svg',
  },
  {
    name: 'JavaScript',
    icon: '/skills_icon/JavaScript.svg',
  },
  {
    name: 'TypeScript',
    icon: '/skills_icon/TypeScript.svg',
  },
  {
    name: 'Go',
    icon: '/skills_icon/GoLang.svg',
  },
  {
    name: 'C',
    icon: '/skills_icon/C.svg',
  },
  {
    name: 'OCaml',
    icon: '/skills_icon/OCaml.svg',
  },
  {
    name: 'Java',
    icon: '/skills_icon/Java-Dark.svg',
  },
];

const frontendSkills: Skill[] = [
  {
    name: 'Next.js',
    icon: '/skills_icon/NextJS-Dark.svg',
  },
  {
    name: 'React',
    icon: '/skills_icon/React-Dark.svg',
  },
  {
    name: 'HTML',
    icon: '/skills_icon/HTML.svg',
  },
  {
    name: 'CSS',
    icon: '/skills_icon/CSS.svg',
  },
  {
    name: 'TailwindCSS',
    icon: '/skills_icon/TailwindCSS-Dark.svg',
  },
];

const backendSkills: Skill[] = [
  {
    name: 'FastAPI',
    icon: '/skills_icon/FastAPI.svg',
  },
  {
    name: 'Django',
    icon: '/skills_icon/Django.svg',
  },
  {
    name: 'Flask',
    icon: '/skills_icon/Flask-Dark.svg',
  },
  {
    name: 'Express',
    icon: '/skills_icon/ExpressJS-Dark.svg',
  },
  {
    name: 'Rails',
    icon: '/skills_icon/Rails.svg',
  },
];

const databaseSkills: Skill[] = [
  {
    name: 'PostgreSQL',
    icon: '/skills_icon/PostgreSQL-Dark.svg',
  },
  {
    name: 'MongoDB',
    icon: '/skills_icon/MongoDB.svg',
  },
  {
    name: 'DynamoDB',
    icon: '/skills_icon/DynamoDB-Dark.svg',
  },
];

const otherSkills: Skill[] = [
  {
    name: 'NodeJS',
    icon: '/skills_icon/NodeJS-Dark.svg',
  },
  {
    name: 'Linux',
    icon: '/skills_icon/Linux-Dark.svg',
  },
  {
    name: 'Git',
    icon: '/skills_icon/Git.svg',
  },
  {
    name: 'Docker',
    icon: '/skills_icon/Docker.svg',
  },
  {
    name: 'AWS',
    icon: '/skills_icon/AWS-Dark.svg',
  },
  {
    name: 'Heroku',
    icon: '/skills_icon/Heroku.svg',
  },
  {
    name: 'GitHub Actions',
    icon: '/skills_icon/GithubActions-Dark.svg',
  },
];

const Skill = () => {
  const { t } = useTranslation('skill');
  const skillList = [
    {
      name: t('programming'),
      skills: programmingSkills,
    },
    {
      name: t('frontend'),
      skills: frontendSkills,
    },
    {
      name: t('backend'),
      skills: backendSkills,
    },
    {
      name: t('database'),
      skills: databaseSkills,
    },
    {
      name: t('others'),
      skills: otherSkills,
    },
  ];

  return (
    <>
      <motion.div variants={textVariant()} className="font-mono text-text">
        <div className="flex items-center justify-center gap-1 md:text-[48px] text-[36px]">
          <h1 className="font-bold text-accent">02.</h1>
          <h1 className="font-thin">Skills</h1>
        </div>
        <h3 className="flex justify-center mb-10 font-thin text-xs">{t('skillTime')}</h3>
      </motion.div>

      <motion.h3 variants={textVariant()} />

      {skillList.map((skill) => (
        <div key={skill.name} className="my-5">
          <motion.h2
            variants={fadeIn('right', '', 0, 0.25)}
            className="flex justify-center text-[20px] font-mono text-text mb-1"
          >
            {skill.name}
          </motion.h2>
          <div className="flex flex-row flex-wrap gap-1 justify-center">
            {skill.skills.map((skill) => (
              <motion.div key={skill.name} variants={logoVariant()}>
                <SkillIcon name={skill.name} src={skill.icon} />
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default SectionWrapper(Skill, 'skills');
