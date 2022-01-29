import type { NextPage } from 'next';
import Head from 'next/head';

import { Error } from '@components';

const Error404: NextPage = () => {
  return (
    <>
      <Head>
        <title>Surge // 404</title>
      </Head>
      <Error />
    </>
  );
};

export default Error404;
