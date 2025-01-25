import { Logomark } from '@/components/Logomark';
import { Project } from '@/components/Project';
import { projects } from '@/data/projects';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import type { FC } from 'react';
import '@/lib/simulationMaterial';
import '@/lib/dofPointsMaterial';
import { Wordmark } from '@/components/Wordmark';

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

const Home: FC = () => (
  <div>
    <div className="hidden sm:flex sm:h-[60vh] sm:min-h-[500px]">
      <Hero />
    </div>
    <div className="relative flex h-[256px] w-full items-center justify-center sm:hidden">
      <Wordmark />
    </div>
    <div className="mx-auto w-full max-w-[42rem] px-6">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
        {projects.map((project) => (
          <Project key={project.name} {...project} />
        ))}
      </div>
      <div className="my-24 flex flex-col items-center justify-center gap-8 text-center">
        <Logomark />
        <h2 className="font-medium text-sm">
          Digital product studio by{' '}
          <Link
            href="https://www.haydenbarnett.com"
            target="_blank"
            className="inline-block text-gray-300 underline-offset-2 outline-none transition hover:text-white focus-visible:underline sm:inline"
          >
            Hayden Barnett
          </Link>
        </h2>
      </div>
    </div>
  </div>
);

export default Home;
