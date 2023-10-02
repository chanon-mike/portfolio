import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';

const Internship = () => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation('experience');
  const internshipList = t('internshipList', { returnObjects: true });

  return (
    <motion.div variants={fadeIn('', '', 0, 0.6)} className="mx-5">
      <input id="expandCollapse" checked={open} type="checkbox" className="peer sr-only" />
      <label
        htmlFor="expandCollapse"
        className="w-full p-1 flex justify-center items-center bg-light hover:bg-accent text-text transition-colors duration-500 ease-in-out rounded cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        {t('internship')}
      </label>
      <div className="overflow-hidden h-0 peer-checked:h-[700px] peer-checked:overflow-scroll transition-[height] duration-400 ease-in-out">
        <ol className="relative border-l border-text ml-20 mr-6 sm:mr-10 mt-5">
          {internshipList.map((internship) => (
            <li className="mb-10 ml-6" key={internship.company}>
              <img
                className="absolute aspect-square rounded-full -left-6"
                width={50}
                height={50}
                src={internship.imageSrc}
                alt={internship.company}
              />

              <div className="ml-4">
                <h3 className="flex items-center mb-1 text-lg font-semibold text-text">
                  {internship.company}
                </h3>
                <span className="flex flex-row items-start gap-2 leading-none mb-3 text-xs md:text-sm font-normal text-secondary">
                  <h4>{internship.position}</h4>
                  <p>|</p>
                  <time>{internship.date}</time>
                </span>
                <ul className="mb-4 ml-4 sm:text-base text-sm font-thin text-text list-disc marker:text-light">
                  {internship.description.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
          <div className="absolute w-2 aspect-square rounded-full -left-1 bottom-0 bg-text" />
        </ol>
      </div>
    </motion.div>
  );
};

export default Internship;
