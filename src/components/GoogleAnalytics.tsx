import { useRouter } from 'next/router';
import Script from 'next/script';
import { useEffect } from 'react';

import { GA_MEASUREMENT_ID, pageview } from '@/utils/gtag';

const GoogleAnalytics = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouterChange = (url: string) => {
      pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouterChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouterChange);
    };
  }, [router.events]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
