'use client';

import { CameraShake, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Wordmark } from '../Wordmark/Wordmark';
import { Particles } from './Particles';
import styles from './styles.module.css';
import type { FC } from 'react';

type HeroProps = {};

export const Hero: FC<HeroProps> = () => (
  <section className={styles.section}>
    <Wordmark />
    <Canvas camera={{ fov: 25, position: [0, 0, 6] }} className={styles.canvas}>
      <OrbitControls
        makeDefault
        autoRotate
        autoRotateSpeed={-4}
        rotateSpeed={0.5}
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
