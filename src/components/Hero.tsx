import BoxCanvas from './canvas/Box';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto px-10 flex items-start md:flex-row min-[320px]:flex-col">
        <div className="w-full">
          <h1 className="text-text lg:text-[60px] sm:text-[50px] text-[40px] mt-2 whitespace-nowrap">
            Hi I&apos;m <span className="text-accent">chanon_mike</span>
          </h1>
          <p className="text-text font-medium lg:text-[26px] sm:text-[20px] text-[16px] lg:leading-[30px] mt-2">
            I&apos;m 3rd year CS student <br className="sm:block hidden" />
            developing full-stack web applications
          </p>
        </div>

        <BoxCanvas />
      </div>
    </section>
  );
};

export default Hero;
