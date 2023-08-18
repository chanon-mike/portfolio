import type { AppProps } from 'next/app';
import { Ubuntu } from 'next/font/google';
import './globals.css';
import StarsCanvas from '../components/canvas/Stars';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { appWithTranslation } from 'next-i18next';

const ubuntu = Ubuntu({ weight: ['300', '400', '500', '700'], subsets: ['latin'] });

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main className={`${ubuntu.className}`}>
      <Navbar />
      <div className="fixed w-full h-full -z-20">
        <StarsCanvas />
      </div>
      <Component {...pageProps} />
      <Footer />
    </main>
  );
};

export default appWithTranslation(App);
