export const textVariant = (delay?: number) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 1.25,
        delay,
      },
    },
  };
};

export const fadeIn = (
  direction: '' | 'left' | 'right' | 'up' | 'down',
  type: string,
  delay: number,
  duration: number,
) => {
  return {
    hidden: {
      x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
      y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease: 'easeOut',
      },
    },
  };
};

export const logoVariant = () => {
  return {
    hidden: {
      x: -50,
      opacity: 0,
      scale: 0.5,
    },
    show: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        duration: 0.5,
      },
    },
  };
};
