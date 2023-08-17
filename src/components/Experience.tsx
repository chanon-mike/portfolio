import { Experience } from '../types';
import { fadeIn, logoVariant } from '../utils/motion';
import SectionWrapper from './wrapper/SectionWrapper';
import { motion } from 'framer-motion';

const experienceList: Experience[] = [
  {
    company: 'CA Tech Kids, Inc.',
    position: 'Programming Mentor',
    date: 'Jul 2022 ~ Present',
    description: [
      'Teaching QUREO, Scratch, and Unity to elementary and middle school students.',
      'Translating QUREO programming materials from Japanese to English',
    ],
    imageSrc: 'company_icon/techkid_icon.webp',
  },
  {
    company: 'Diamond head Co.,Ltd.',
    position: 'Backend Developer Intern',
    date: 'Aug 2022 ~ Sep 2022',
    description: [
      'Developed new features using Domain Driven Design and Django as part of the Point Management System team for an ecommerce website.',
      'Completed 1/3 of the assigned tasks from the Work Breakdown Structure (WBS) which was ahead of schedule, delivering it 1 week earlier than planned.',
    ],
    imageSrc: 'company_icon/diamondhead_icon.webp',
  },
];

const Experience = () => {
  return (
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
  );
};

export default SectionWrapper(Experience, 'experience');
