'use client';

import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import type { FC } from 'react';
import { Wordmark } from '../Wordmark';
import { Particles } from './Particles';

export const Hero: FC = () => {
  const logoRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current) {
      return undefined;
    }

    setTimeout(() => {
      if (!canvasRef.current || !logoRef.current) {
        return;
      }
      logoRef.current.style.opacity = '1';
      canvasRef.current.style.opacity = '1';
    }, 200);

    return undefined;
  }, []);

  return (
    <div className="relative flex h-[60vh] min-h-[500px] w-full items-center justify-center overflow-hidden text-center">
      <div
        ref={logoRef}
        className="pointer-events-none z-10 opacity-0 transition-opacity duration-1000"
      >
        <Wordmark />
      </div>
      <div
        ref={canvasRef}
        className="hidden opacity-0 transition-opacity duration-1000 sm:block"
      >
        <Canvas
          camera={{ fov: 35, position: [0, 0, 5.75] }}
          className="!pointer-events-none !absolute sm:!pointer-events-auto top-0 left-0 h-full w-full overflow-hidden "
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
