import '../styles/globals.css';
import Head from 'next/head';
import type { FC } from 'react';
import type { AppProps } from 'next/app';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const meta = {
    title: 'Surge // Digital Product Studio',
    description:
      "We grow tech companies. We'll work with you to map a path to achieving product-market fit, and then to scale up and grow your business.",
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="og:image" content="/opengraph.png" />
        <meta name="og:title" content={meta.title} />
        <meta name="og:description" content={meta.description} />
        <meta name="og:site_name" content="Surge" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#080C16" />
        <meta name="msapplication-TileColor" content="#080C16" />
        <meta name="theme-color" content="#080C16" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
