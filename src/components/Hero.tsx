import RippleCanvas from './canvas/Ripple';

const Hero = () => {
  return (
    <section id="hero" className="relative w-full h-screen mx-auto">
      <div className="absolute inset-0 top-[120px] max-w-[1920px] mx-auto px-10 flex items-start gap-4 min-[1280px]:flex-row min-[320px]:flex-col">
        <div className="w-full max-w-lg lg:ml-20">
          <h1 className="text-text font-mono font-bold lg:text-[55px] sm:text-[45px] text-[35px] mt-2 sm:whitespace-nowrap">
            Hi I&apos;m <span className="text-accent">chanon_mike</span>
          </h1>
          <p className="text-text font-mono font-light lg:text-[26px] sm:text-[20px] text-[16px] lg:leading-[30px] mt-2">
            A 3rd year CS student <br className="sm:block hidden" />
            an aspiring software engineer
          </p>
        </div>

        <span className="w-full h-5/6 -z-10 overflow-hidden">
          <RippleCanvas />
        </span>
      </div>
    </section>
  );
};

export default Hero;
