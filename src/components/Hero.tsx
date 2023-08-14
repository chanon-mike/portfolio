const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto px-10 flex flex-row items-start gap-5">
        <div>
          <h1 className="text-text lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2">
            Hi I&apos;m <span className="text-accent">chanon_mike</span>
          </h1>
          <p className="text-text font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2">
            I&apos;m 3rd year CS student <br className="sm:block hidden" />
            developing full-stack web applications
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
