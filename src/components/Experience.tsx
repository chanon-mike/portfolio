import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';
import Internship from './Internship';

import { fadeIn, logoVariant } from '../utils/motion';
import SectionWrapper from './wrapper/SectionWrapper';

const Experience = () => {
  const { t } = useTranslation('experience');
  const experienceList = t('experienceList', { returnObjects: true });

  return (
    <>
      <motion.ol
        variants={fadeIn('', '', 0, 0.3)}
        className="relative border-l border-text ml-20 mr-6 sm:mr-10"
      >
        {experienceList.map((experience, i) => (
          <li className="mb-10 ml-6" key={experience.company}>
            <motion.img
              variants={logoVariant()}
              className="absolute aspect-square rounded-full -left-6"
              width={50}
              height={50}
              src={experience.imageSrc}
              alt={experience.company}
            />

            <motion.div variants={fadeIn('up', '', 0, 0.5)} className="ml-4">
              <h3 className="flex items-center mb-1 text-lg font-semibold text-text">
                {experience.company}
                {i === 0 && (
                  <span className="bg-main md:text-sm text-xs text-text mx-3 px-2 py-0.5 rounded mb-1 overflow-auto">
                    Latest
                  </span>
                )}
              </h3>
              <span className="flex flex-row items-start gap-2 leading-none mb-3 text-xs md:text-sm font-normal text-secondary">
                <h4>{experience.position}</h4>
                <p>|</p>
                <time>{experience.date}</time>
              </span>
              <ul className="mb-4 ml-4 sm:text-base text-sm font-thin text-text list-disc marker:text-light">
                {experience.description.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </motion.div>
          </li>
        ))}
        <motion.div
          variants={fadeIn('', '', 0, 0.3)}
          className="absolute w-2 aspect-square rounded-full -left-1 bottom-0 bg-text"
        />
      </motion.ol>
      <Internship />
    </>
  );
};

export default SectionWrapper(Experience, 'experience');
