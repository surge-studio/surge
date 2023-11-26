import Head from 'next/head';
import { Error } from '@/components/Error';
import type { NextPage } from 'next';

const Error404: NextPage = () => (
  <>
    <Head>
      <title>Surge // 404</title>
    </Head>
    <Error />
  </>
);

export default Error404;
