import RippleCanvas from './canvas/Ripple';

const Hero = () => {
  return (
    <section id="hero" className="relative w-full h-screen mx-auto">
      <div className="absolute inset-0 top-[120px] max-w-[1920px] mx-auto px-10 flex items-start gap-4 min-[1280px]:flex-row min-[320px]:flex-col">
        <div className="w-full lg:pl-20 max-w-2xl">
          <h1 className="text-text font-mono font-bold lg:text-[55px] sm:text-[45px] text-[35px] mt-2 sm:whitespace-nowrap">
            Hi I&apos;m <span className="text-accent">chanon_mike</span>
          </h1>
          <p className="text-text font-mono font-light lg:text-[26px] sm:text-[20px] text-[16px] lg:leading-[30px] mt-2">
            A 3rd year CS student <br className="sm:block hidden" />
            developing full-stack web applications
          </p>
        </div>

        <RippleCanvas />
      </div>
    </section>
  );
};

export default Hero;
