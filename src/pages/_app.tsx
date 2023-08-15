import type { AppProps } from 'next/app';
import { Ubuntu } from 'next/font/google';
import './globals.css';

const ubuntu = Ubuntu({ weight: ['300', '400', '500', '700'], subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={ubuntu.className}>
      {/* <main className="font-mono"> */}
      <Component {...pageProps} />
    </main>
  );
}
