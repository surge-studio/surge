import type { NextPage } from 'next';
import Head from 'next/head';

import { Footer, Header, Hero, Strategy, Development, More } from '@components';

const Home: NextPage = () => {
  const meta = {
    title: 'Surge // Growth Agency',
    description:
      "We grow tech companies. We'll work with you to map a path to achieving product-market fit, and then to scale up and grow your business.",
  };
  return (
    <>
      <Header />
      <Hero />
      <Strategy />
      <Development />
      <More />
      <Footer />
    </>
  );
};

export default Home;
