import Link from 'next/link';
import type { FC } from 'react';

export const Error: FC = () => (
  <div className="relative flex overflow-hidden h-screen min-h-[300px] items-center justify-center bg-black text-center">
    <Link
      href="/"
      className="relative w-[300px] h-[300px] outline-none transition border border-transparent focus-visible:border-white"
    >
      <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full overflow-hidden pointer-events-none">
        <video autoPlay loop muted>
          <source src="/video/404-robot.mp4" type="video/mp4" />
        </video>
      </div>
    </Link>
  </div>
);
