import { ErrorVideo } from '@/components/error-video';
import type { NextPage } from 'next';
import Head from 'next/head';

const Error404: NextPage = () => (
  <>
    <Head>
      <title>{'Surge // 404'}</title>
    </Head>
    <ErrorVideo />
  </>
);

export default Error404;
