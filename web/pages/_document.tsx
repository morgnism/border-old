import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => (
  <Html>
    <Head>
      <meta charSet="UTF-8" />

      {/* TODO: add meta for other device favicons */}
      <link rel="icon" href="/favicon.ico" />

      {/* TODO: add linked fonts */}
      {/* TODO: add google analytics */}
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
