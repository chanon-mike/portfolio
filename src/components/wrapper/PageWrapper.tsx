import { motion } from 'framer-motion';

const PageWrapper = (Component: () => JSX.Element) => {
  return function hoc() {
    return (
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-20 mb-10 lg:w-3/4 xl:w-1/2 lg:mx-auto md:mx-20 mx-5 text-text flex flex-col justify-center"
      >
        <Component />
      </motion.div>
    );
  };
};

export default PageWrapper;
