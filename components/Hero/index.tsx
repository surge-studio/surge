'use client';

import type { FC } from 'react';
import styles from './styles.module.css';
import { Particles } from './Particles';
import { CameraShake, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Wordmark } from '../Wordmark/Wordmark';

type HeroProps = {};

export const Hero: FC<HeroProps> = () => {
  return (
    <section className={styles.section}>
      <Wordmark />
      <Canvas camera={{ fov: 25, position: [0, 0, 6] }} className={styles.canvas}>
        <OrbitControls
          makeDefault
          autoRotate
          autoRotateSpeed={-4}
          enableZoom={false}
          enablePan={false}
        />
        <CameraShake
          yawFrequency={1}
          maxYaw={0.05}
          pitchFrequency={1}
          maxPitch={0.05}
          rollFrequency={0.5}
          maxRoll={0.5}
          intensity={0.2}
        />
        <Particles />
      </Canvas>
    </section>
  );
};
