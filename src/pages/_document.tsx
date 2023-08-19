import Document, { Html, Head, Main, NextScript } from 'next/document';
import type { DocumentProps } from 'next/document';
import i18nextConfig from '../../next-i18next.config';

type Props = DocumentProps & {
  // add custom document props
};

class MyDocument extends Document<Props> {
  render() {
    const currentLocale = this.props.__NEXT_DATA__.locale ?? i18nextConfig.i18n.defaultLocale;
    return (
      <Html lang={currentLocale}>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Personal portfolio fo Chanon Limpipolpaibul (chanon_mike)"
          />
          <meta name="author" content="Chanon Limpipolpaibul" />
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="keywords"
            content="portfolio, chanon_mike, Chanon Limpipolpaibul, NextJS, Threejs, framer-motion"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
