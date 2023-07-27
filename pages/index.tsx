import dynamic from 'next/dynamic';
import { projects } from '@/data/projects';
import { Footer } from '@/components/Footer';
import { Project } from '@/components/Project';
import type { FC } from 'react';
import '@/lib/simulationMaterial';
import '@/lib/dofPointsMaterial';

const Hero = dynamic(
  async () =>
    import(
      /* webpackChunkName: "Hero" */
      '@/components/Hero'
      // eslint-disable-next-line promise/prefer-await-to-then
    ).then((mod) => mod.Hero),
  {
    ssr: false,
  }
);

const Home: FC = () => (
  <div>
    <div className="h-screen min-h-[500px]">
      <Hero />
    </div>
    <div className="mx-auto w-full max-w-[31rem] px-6">
      <div className="py-4">
        <h2 className="text-xs font-medium uppercase tracking-widest">
          Studio Projects
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        {projects.map((project) => (
          <Project key={project.name} {...project} />
        ))}
      </div>
    </div>
    <Footer />
  </div>
);

export default Home;
