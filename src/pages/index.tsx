import Experience from '../components/Experience';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Overview from '../components/Overview';
import Skill from '../components/Skill';
import StarsCanvas from '../components/canvas/Stars';

export default function Home() {
  return (
    <>
      <div className="fixed w-full h-full -z-20">
        <StarsCanvas />
      </div>
      <div className="relative z-0 h-full mb-20">
        <Navbar />
        <Hero />
        <div className="lg:mx-40 sm:mx-16">
          <Overview />
          <Experience />
        </div>
        <Skill />
      </div>
    </>
  );
}
