import './globals.css';
import './globals.css';

import type { AppProps } from 'next/app';
import { M_PLUS_1p, Ubuntu } from 'next/font/google';
import { useRouter } from 'next/router';
import { appWithTranslation } from 'next-i18next';
import { DefaultSeo } from 'next-seo';

import SEO from '../../next-seo.config';
import StarsCanvas from '../components/canvas/Stars';
import Footer from '../components/Footer';
import GoogleAnalytics from '../components/GoogleAnalytics';
import Navbar from '../components/Navbar';

const ubuntu = Ubuntu({ weight: ['300', '400', '500', '700'], subsets: ['latin'] });
const sawarabi = M_PLUS_1p({ weight: ['300', '400', '500', '700'], subsets: ['latin'] });

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const currentLocale = router.locale ?? 'en';

  return (
    <>
      <DefaultSeo {...SEO} />
      <GoogleAnalytics />

      <main className={`${currentLocale === 'en' ? ubuntu.className : sawarabi.className}`}>
        <Navbar />
        <div className="fixed w-full h-full -z-20">
          <StarsCanvas />
        </div>
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
};

export default appWithTranslation(App);
