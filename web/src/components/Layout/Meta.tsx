import Head from 'next/head';
import React from 'react';

const Meta: React.FC<{
  title: string;
  description: string;
}> = ({ title, description }) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{title}</title>

      {/* TODO: research other meta content types to add */}
      <meta content={description} name="description" />
      <meta content={description} property="og:description" />
      <meta content={description} name="twitter:description" />
      {/* TODO: add meta for tweets */}
    </Head>
  );
};

export default Meta;
