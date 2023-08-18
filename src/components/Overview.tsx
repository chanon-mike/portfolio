import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';
import SectionWrapper from './wrapper/SectionWrapper';
import { useTranslation } from 'next-i18next';

const Overview = () => {
  const { t } = useTranslation('overview');
  const bio = t('bio', { returnObjects: true });

  return (
    <div className="flex justify-start flex-col px-10 mt-12 text-text">
      <motion.div
        variants={textVariant()}
        className="flex flex-row gap-1 w-fit font-mono mb-5 md:text-5xl text-4xl"
      >
        <h1 className="font-bold text-accent">01.</h1>
        <h1 className="font-thin">Overview</h1>
      </motion.div>

      <motion.div variants={fadeIn('right', '', 0.1, 1)} className="text-base font-thin">
        <div className="mb-5">
          <p>{t('description')}</p>
        </div>

        <ul>
          {bio.map((b) => (
            <li key={b.year}>
              <span className="font-bold">{b.year} </span>
              <span>{b.event}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Overview, 'overview');
