import type { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  title: 'chanon_mike',
  description: 'chanon_mike portfolio',
  openGraph: {
    type: 'website',
    title: 'chanon_mike',
    description: 'chanon_mike portfolio',
    images: [
      {
        url: 'https://chanon-mike.vercel.app/website.png',
        width: 800,
        height: 600,
        alt: 'portfolio',
      },
    ],
    siteName: 'SiteName',
  },
};

export default config;
