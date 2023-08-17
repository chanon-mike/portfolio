import Experience from '../components/Experience';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Overview from '../components/Overview';
import Project from '../components/Project';
import Skill from '../components/Skill';

export default function Home() {
  return (
    <div className="relative z-0 h-full">
      <Navbar />
      <Hero />
      <div className="lg:mx-40 sm:mx-16">
        <Overview />
        <Experience />
      </div>
      <Skill />
      <Project />
    </div>
  );
}
