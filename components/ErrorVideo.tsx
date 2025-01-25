import Link from 'next/link';
import type { FC } from 'react';

export const ErrorVideo: FC = () => (
  <div className="relative flex h-screen min-h-[300px] items-center justify-center overflow-hidden bg-black text-center">
    <Link
      href="/"
      className="relative h-[300px] w-[300px] border border-transparent outline-none transition focus-visible:border-white"
    >
      <div className="pointer-events-none absolute top-0 left-0 flex h-full w-full items-center justify-center overflow-hidden">
        <video autoPlay loop muted>
          <source src="/video/404-robot.mp4" type="video/mp4" />
        </video>
      </div>
    </Link>
  </div>
);
