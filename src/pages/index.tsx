import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Overview from '../components/Overview';
import StarsCanvas from '../components/canvas/Stars';

export default function Home() {
  return (
    <main className="relative z-0 bg-background h-[100%] pb-20">
      <section id="top">
        <Navbar />
        <div className="absolute w-full h-[100%] mx-auto -z-20">
          <StarsCanvas />
        </div>
        <Hero />
      </section>

      <Overview />
    </main>
  );
}
