/* eslint-disable react/no-unknown-property */
import * as THREE from 'three';
import { useMemo, useRef } from 'react';
import { createPortal, useFrame } from '@react-three/fiber';
import { useFBO } from '@react-three/drei';
import type { FC } from 'react';

type DofPointsMaterialProps = {
  uniforms: {
    positions: { value: THREE.Texture };
    uTime: { value: number };
    uFocus: { value: number };
    uFov: { value: number };
    uBlur: { value: number };
  };
};

type SimulationMaterialProps = {
  uniforms: {
    uTime: { value: number };
    uCurlFreq: { value: number };
  };
};

export const Particles: FC = () => {
  const focus = 6.0;
  const speed = 5.0;
  const aperture = 5.0;
  const fov = 200;
  const curl = 0.5;
  const size = 512;
  const simRef = useRef<SimulationMaterialProps>();
  const renderRef = useRef<DofPointsMaterialProps>();
  // Set up FBO
  const scene = useMemo(() => new THREE.Scene(), []);
  const camera = useMemo(
    () => new THREE.OrthographicCamera(-1, 1, 1, -1, 1 / 2 ** 53, 1),
    []
  );
  const positions = useMemo(
    () =>
      new Float32Array([
        -1, -1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, 1, 1, 0, -1, 1, 0,
      ]),
    []
  );
  const uvs = useMemo(
    () => new Float32Array([0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0]),
    []
  );
  const target = useFBO(size, size, {
    minFilter: THREE.NearestFilter,
    magFilter: THREE.NearestFilter,
    format: THREE.RGBAFormat,
    type: THREE.FloatType,
  });
  // Normalize points
  const particles = useMemo(() => {
    const length = size * size;
    const points = new Float32Array(length * 3);
    for (let index = 0; index < length; index += 1) {
      const i3 = index * 3;
      points[i3 + 0] = (index % size) / size;
      points[i3 + 1] = index / size / size;
    }
    return points;
  }, [size]);
  // Update FBO and pointcloud every frame
  useFrame((state) => {
    state.gl.setRenderTarget(target);
    state.gl.clear();
    state.gl.render(scene, camera);
    state.gl.setRenderTarget(null);
    if (renderRef.current) {
      renderRef.current.uniforms.positions.value = target.texture;
      renderRef.current.uniforms.uTime.value = state.clock.elapsedTime;
      renderRef.current.uniforms.uFocus.value = THREE.MathUtils.lerp(
        renderRef.current.uniforms.uFocus.value,
        focus,
        0.1
      );
      renderRef.current.uniforms.uFov.value = THREE.MathUtils.lerp(
        renderRef.current.uniforms.uFov.value,
        fov,
        0.1
      );
      renderRef.current.uniforms.uBlur.value = THREE.MathUtils.lerp(
        renderRef.current.uniforms.uBlur.value,
        (5.6 - aperture) * 9,
        0.1
      );
    }
    if (simRef.current) {
      simRef.current.uniforms.uTime.value = state.clock.elapsedTime * speed;
      simRef.current.uniforms.uCurlFreq.value = THREE.MathUtils.lerp(
        simRef.current.uniforms.uCurlFreq.value,
        curl,
        0.1
      );
    }
  });
  return (
    <>
      {createPortal(
        <mesh>
          {/* @ts-expect-error material */}
          <simulationMaterial ref={simRef} />
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={positions.length / 3}
              array={positions}
              itemSize={3}
            />
            <bufferAttribute
              attach="attributes-uv"
              count={uvs.length / 2}
              array={uvs}
              itemSize={2}
            />
          </bufferGeometry>
        </mesh>,
        scene
      )}
      <points>
        {/* @ts-expect-error material */}
        <dofPointsMaterial ref={renderRef} />
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particles.length / 3}
            array={particles}
            itemSize={3}
          />
        </bufferGeometry>
      </points>
    </>
  );
};
