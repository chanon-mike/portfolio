import { motion } from 'framer-motion';
import { fadeIn, logoVariant } from '../utils/motion';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';

const Internship = () => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation('experience');
  const experienceList = t('experienceList', { returnObjects: true });

  return (
    <div>
      <input id="expandCollapse" checked={open} type="checkbox" className="peer sr-only" />
      <motion.label
        variants={fadeIn('', '', 0, 0.6)}
        htmlFor="expandCollapse"
        className="w-full flex justify-center items-center bg-main hover:bg-accent text-text transition-colors duration-500 ease-in-out rounded"
        onClick={() => setOpen(!open)}
      >
        {t('internship')}
      </motion.label>
      <div className="overflow-hidden h-0 peer-checked:h-fit peer-checked:overflow-scroll">
        <motion.ol variants={fadeIn('', '', 0, 0.3)} className="relative ml-20 mr-6 sm:mr-10 mt-10">
          {experienceList.map((experience) => (
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
        </motion.ol>
      </div>
    </div>
  );
};

export default Internship;
