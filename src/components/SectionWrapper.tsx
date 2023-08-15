import { motion } from 'framer-motion';

const SectionWrapper = (Component: () => JSX.Element, idName: string) => {
  return function hoc() {
    return (
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className=" max-w-7xl mx-auto relative z-0"
      >
        <span id={idName} />
        <Component />
      </motion.section>
    );
  };
};

export default SectionWrapper;
