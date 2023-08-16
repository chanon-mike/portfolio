import Experience from '../components/Experience';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Overview from '../components/Overview';
import StarsCanvas from '../components/canvas/Stars';

export default function Home() {
  return (
    <>
      <div className="absolute w-full h-full mx-auto -z-20">
        <StarsCanvas />
      </div>
      <div className="relative z-0 h-[100%] mb-20">
        <Navbar />
        <Hero />
        <main className="lg:mx-40 sm:mx-16">
          <Overview />
          <Experience />
        </main>
      </div>
    </>
  );
}
