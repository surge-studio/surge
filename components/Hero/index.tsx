'use client';

import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useRef, useEffect } from 'react';
import { Wordmark } from '../Wordmark';
import { Particles } from './Particles';
import type { FC } from 'react';

export const Hero: FC = () => {
  const logoRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return undefined;

    setTimeout(() => {
      if (!canvasRef.current || !logoRef.current) return;
      logoRef.current.style.opacity = '1';
      canvasRef.current.style.opacity = '1';
    }, 200);

    return undefined;
  }, []);

  return (
    <div className="relative flex h-[60vh] min-h-[500px] w-full items-center justify-center overflow-hidden text-center">
      <div
        ref={logoRef}
        className="z-10 transition-opacity duration-1000 opacity-0 pointer-events-none"
      >
        <Wordmark />
      </div>
      <div
        ref={canvasRef}
        className="hidden transition-opacity duration-1000 opacity-0 sm:block"
      >
        <Canvas
          camera={{ fov: 35, position: [0, 0, 5.75] }}
          className="!pointer-events-none !absolute left-0 top-0 h-full w-full overflow-hidden sm:!pointer-events-auto "
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
      </div>
    </div>
  );
};
