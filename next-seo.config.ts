import type { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  title: 'chanon-mike',
  description: 'Personal portfolio of Chanon Limpipolpaibul (chanon-mike)',
  openGraph: {
    type: 'website',
    title: 'Chanon Limpipolpaibul Portfolio',
    description: 'Personal portfolio of Chanon Limpipolpaibul (chanon-mike)',
    url: 'https://chanon-mike.vercel.app',
    images: [
      {
        url: 'https://chanon-mike.vercel.app/website.png',
        width: 800,
        height: 600,
        alt: 'portfolio',
      },
    ],
    siteName: 'chanon-mike',
  },
};

export default config;
