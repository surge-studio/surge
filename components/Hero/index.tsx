'use client';

import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Wordmark } from '../Wordmark';
import { Particles } from './Particles';
import type { FC } from 'react';

export const Hero: FC = () => (
  <section className="relative flex h-screen min-h-[600px] w-full items-center justify-center overflow-hidden text-center">
    <div className="z-10">
      <Wordmark />
    </div>
    <Canvas
      camera={{ fov: 25, position: [0, 0, 6] }}
      className="!absolute left-0 top-0 h-full w-full overflow-hidden"
    >
      <OrbitControls
        makeDefault
        autoRotate
        autoRotateSpeed={-4}
        rotateSpeed={0.5}
        enableZoom={false}
        enablePan={false}
      />
      <Particles />
    </Canvas>
  </section>
);
