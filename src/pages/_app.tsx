import type { AppProps } from 'next/app';
import { Ubuntu, M_PLUS_1p } from 'next/font/google';
import './globals.css';
import StarsCanvas from '../components/canvas/Stars';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { appWithTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

const ubuntu = Ubuntu({ weight: ['300', '400', '500', '700'], subsets: ['latin'] });
const sawarabi = M_PLUS_1p({ weight: ['300', '400', '500', '700'], subsets: ['latin'] });

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const currentLocale = router.locale ?? 'en';

  console.log(currentLocale);

  return (
    <main className={`${currentLocale === 'en' ? ubuntu.className : sawarabi.className}`}>
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
