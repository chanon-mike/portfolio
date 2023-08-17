import { motion } from 'framer-motion';
import type { Bio } from '../types';
import { fadeIn, textVariant } from '../utils/motion';
import SectionWrapper from './SectionWrapper';

const bio: Bio[] = [
  {
    year: '2002',
    event: 'Born in Chiang Mai, Thailand',
  },
  {
    year: '2019',
    event: 'Exchange in Saitama via YFU Full Scholarship',
  },
  {
    year: '2021 to present',
    event: 'INIAD, Toyo University Full Scholarship',
  },
];

const Overview = () => {
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
          <p>
            Chanon Limpipolpaibul is a 3rd year student from INIAD, Toyo University with a passion
            for building applications he wants. He loves in planning, development all the way of
            solving real-life problems with code, specialized in full-stack web development.
          </p>
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
