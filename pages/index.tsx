import dynamic from 'next/dynamic';
import Link from 'next/link';
import { projects } from '@/data/projects';
import { Project } from '@/components/Project';
import { Logomark } from '@/components/Logomark';
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
    <div className="h-[60vh] min-h-[500px]">
      <Hero />
    </div>
    <div className="mx-auto w-full max-w-[42rem] px-6">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
        {projects.map((project) => (
          <Project key={project.name} {...project} />
        ))}
      </div>
      <div className="my-24 flex items-center justify-center gap-4">
        <Logomark />
        <h2 className="text-sm font-medium">
          Digital product studio by{' '}
          <Link
            href="https://www.haydenbarnett.com"
            target="_blank"
            className="inline-block text-white underline-offset-2 outline-none focus-visible:underline sm:inline"
          >
            Hayden Barnett
          </Link>
        </h2>
      </div>
    </div>
  </div>
);

export default Home;
