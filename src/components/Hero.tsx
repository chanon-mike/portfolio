import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { FaDev } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { SiQiita } from 'react-icons/si';

import RippleCanvas from './canvas/Ripple';

const Hero = () => {
  return (
    <section id="hero" className="relative w-full h-screen mx-auto">
      <div className="absolute inset-0 top-[120px] max-w-[1920px] mx-auto flex items-start gap-4 min-[1280px]:flex-row min-[320px]:flex-col">
        <div className="w-full max-w-lg lg:ml-20 px-10 lg:pr-0 lg:pl-10 font-mono">
          <h1 className="text-text font-bold lg:text-[55px] sm:text-[45px] text-[35px] mt-2 sm:whitespace-nowrap">
            Hi I&apos;m <span className="text-accent">chanon-mike</span>
          </h1>
          <p className="text-text font-light lg:text-[26px] sm:text-[20px] text-[16px] lg:leading-[30px] mt-2">
            A 3rd year CS student <br className="sm:block hidden" />
            an aspiring software engineer
          </p>
          <div className="pl-2 pt-2">
            <Link
              href="https://github.com/chanon-mike"
              className="flex flex-row gap-3 mt-3 items-end text-text lg:text-sm text-xs hover:text-main"
            >
              <FaGithub className="lg:text-2xl text-lg" />
              GitHub
            </Link>
            <Link
              href="https://twitter.com/chanon_mike"
              className="flex flex-row gap-3 mt-3 items-end text-text lg:text-sm text-xs hover:text-main"
            >
              <FaSquareXTwitter className="lg:text-2xl text-lg" />
              Twitter (X)
            </Link>
            <Link
              href="https://dev.to/chanon-mike"
              className="flex flex-row gap-3 mt-3 items-end text-text lg:text-sm text-xs hover:text-main"
            >
              <FaDev className="lg:text-2xl text-lg" />
              Dev.to
            </Link>
            <Link
              href="https://qiita.com/chanon-mike"
              className="flex flex-row gap-3 mt-3 items-end text-text lg:text-sm text-xs hover:text-main"
            >
              <SiQiita className="lg:text-2xl text-lg" />
              Qiita
            </Link>
          </div>
        </div>

        <span className="w-full h-5/6 -z-10 overflow-hidden">
          <RippleCanvas />
        </span>
      </div>
    </section>
  );
};

export default Hero;
