import dynamic from 'next/dynamic';
import type { FC } from 'react';
import '@/lib/simulationMaterial';
import '@/lib/dofPointsMaterial';

const Hero = dynamic(
  async () =>
    import(
      /* webpackChunkName: "Hero" */
      '@/components/Hero'
    ).then((mod) => mod.Hero),
  {
    ssr: false,
  }
);

const Home: FC = () => {
  return (
    <div>
      <Hero />
    </div>
  );
};

export default Home;
