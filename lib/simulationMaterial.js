'use client';

import { extend } from '@react-three/fiber';
import * as THREE from 'three';
import { fragmentShader } from './fragmentShader';

function getPoint(vector, size, data, offset) {
  vector.set(
    Math.random() * 2 - 1,
    Math.random() * 2 - 1,
    Math.random() * 2 - 1
  );
  if (vector.length() > 1) {
    return getPoint(vector, size, data, offset);
  }
  return vector.normalize().multiplyScalar(size).toArray(data, offset);
}

function getSphere(count, size, vector = new THREE.Vector4()) {
  const data = new Float32Array(count * 4);
  for (let index = 0; index < count * 4; index += 4) {
    getPoint(vector, size, data, index);
  }
  return data;
}

class SimulationMaterial extends THREE.ShaderMaterial {
  constructor() {
    const positionsTexture = new THREE.DataTexture(
      getSphere(512 * 512, 128),
      512,
      512,
      THREE.RGBAFormat,
      THREE.FloatType
    );
    positionsTexture.needsUpdate = true;
    super({
      vertexShader: `varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,
      fragmentShader,
      uniforms: {
        positions: { value: positionsTexture },
        uTime: { value: 0 },
        uCurlFreq: { value: 0.25 },
      },
    });
  }
}

extend({ SimulationMaterial });
