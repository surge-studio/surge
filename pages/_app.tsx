import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import type { FC } from "react";

const App: FC<AppProps> = ({ Component, pageProps }) => {
  const meta = {
    description:
      "Digital product studio by Hayden Barnett. Experimenting with new technologies and applications.",
    title: "Surge // Digital Product Studio",
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
        <meta content="/opengraph-image.png" name="og:image" />
        <meta content={meta.title} name="og:title" />
        <meta content={meta.description} name="og:description" />
        <meta content="Surge" name="og:site_name" />
        <link
          href="/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href="/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <link href="/site.webmanifest" rel="manifest" />
        <link color="#080C16" href="/safari-pinned-tab.svg" rel="mask-icon" />
        <meta content="#080C16" name="msapplication-TileColor" />
        <meta content="#080C16" name="theme-color" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
