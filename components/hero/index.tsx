"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import type { FC } from "react";
import { useEffect, useRef } from "react";
import { Wordmark } from "../wordmark";
import { Particles } from "./particles";

export const Hero: FC = () => {
  const logoRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      const canvas = canvasRef.current;
      const logo = logoRef.current;
      if (!(canvas && logo)) {
        return;
      }
      logo.style.opacity = "1";
      canvas.style.opacity = "1";
    }, 200);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="relative flex h-[60vh] min-h-[500px] w-full items-center justify-center overflow-hidden text-center">
      <div
        className="pointer-events-none z-10 opacity-0 transition-opacity duration-1000"
        ref={logoRef}
      >
        <Wordmark />
      </div>
      <div
        className="hidden opacity-0 transition-opacity duration-1000 sm:block"
        ref={canvasRef}
      >
        <Canvas
          camera={{ fov: 35, position: [0, 0, 5.75] }}
          className="!pointer-events-none !absolute sm:!pointer-events-auto top-0 left-0 h-full w-full overflow-hidden"
        >
          <OrbitControls
            autoRotate
            autoRotateSpeed={-4}
            enablePan={false}
            enableZoom={false}
            makeDefault
            rotateSpeed={0.5}
          />
          <Particles />
        </Canvas>
      </div>
    </div>
  );
};
