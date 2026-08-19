// @ts-nocheck
import { useFBO } from "@react-three/drei";
import { createPortal, useFrame } from "@react-three/fiber";
import type { FC } from "react";
import { useMemo, useRef } from "react";
import {
  FloatType,
  MathUtils,
  NearestFilter,
  OrthographicCamera,
  RGBAFormat,
  Scene,
  type Texture,
} from "three";

interface DofPointsMaterialProps {
  uniforms: {
    positions: { value: Texture };
    uTime: { value: number };
    uFocus: { value: number };
    uFov: { value: number };
    uBlur: { value: number };
  };
}

interface SimulationMaterialProps {
  uniforms: {
    uTime: { value: number };
    uCurlFreq: { value: number };
  };
}

export const Particles: FC = () => {
  const focus = 6.0;
  const speed = 5.0;
  const aperture = 5.0;
  const fov = 5;
  const curl = 0.5;
  const size = 420;
  const simRef = useRef<SimulationMaterialProps | null>(null);
  const renderRef = useRef<DofPointsMaterialProps | null>(null);
  // Set up FBO
  const scene = useMemo(() => new Scene(), []);
  const camera = useMemo(
    () => new OrthographicCamera(-1, 1, 1, -1, 1 / 2 ** 53, 1),
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
    format: RGBAFormat,
    magFilter: NearestFilter,
    minFilter: NearestFilter,
    type: FloatType,
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
  }, []);
  // Update FBO and pointcloud every frame
  useFrame((state) => {
    state.gl.setRenderTarget(target);
    state.gl.clear();
    state.gl.render(scene, camera);
    state.gl.setRenderTarget(null);
    if (renderRef.current) {
      renderRef.current.uniforms.positions.value = target.texture;
      renderRef.current.uniforms.uTime.value = state.clock.elapsedTime;
      renderRef.current.uniforms.uFocus.value = MathUtils.lerp(
        renderRef.current.uniforms.uFocus.value,
        focus,
        0.1
      );
      renderRef.current.uniforms.uFov.value = MathUtils.lerp(
        renderRef.current.uniforms.uFov.value,
        fov,
        0.1
      );
      renderRef.current.uniforms.uBlur.value = MathUtils.lerp(
        renderRef.current.uniforms.uBlur.value,
        (5.6 - aperture) * 9,
        0.1
      );
    }
    if (simRef.current) {
      simRef.current.uniforms.uTime.value = state.clock.elapsedTime * speed;
      simRef.current.uniforms.uCurlFreq.value = MathUtils.lerp(
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
          <simulationMaterial ref={simRef} />
          <bufferGeometry>
            <bufferAttribute
              array={positions}
              attach="attributes-position"
              count={positions.length / 3}
              itemSize={3}
            />
            <bufferAttribute
              array={uvs}
              attach="attributes-uv"
              count={uvs.length / 2}
              itemSize={2}
            />
          </bufferGeometry>
        </mesh>,
        scene
      )}
      <points>
        <dofPointsMaterial ref={renderRef} />
        <bufferGeometry>
          <bufferAttribute
            array={particles}
            attach="attributes-position"
            count={particles.length / 3}
            itemSize={3}
          />
        </bufferGeometry>
      </points>
    </>
  );
};
