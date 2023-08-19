import type { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  title: 'chanon_mike',
  description: 'Personal portfolio of Chanon Limpipolpaibul (chanon_mike)',
  openGraph: {
    type: 'website',
    title: 'Chanon Limpipolpaibul Portfolio',
    description: 'Personal portfolio of Chanon Limpipolpaibul (chanon_mike)',
    url: 'https://chanon-mike.vercel.app',
    images: [
      {
        url: 'https://chanon-mike.vercel.app/website.png',
        width: 800,
        height: 600,
        alt: 'portfolio',
      },
    ],
    siteName: 'chanon_mike',
  },
};

export default config;
