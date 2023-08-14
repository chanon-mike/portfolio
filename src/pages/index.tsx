import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <main className="relative z-0 bg-background h-screen">
      <div>
        <Navbar />
        <Hero />
      </div>
    </main>
  );
}
