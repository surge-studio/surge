"use client";

import { extend } from "@react-three/fiber";
import {
  DataTexture,
  FloatType,
  RGBAFormat,
  ShaderMaterial,
  Vector4,
} from "three";
import { fragmentShader } from "./fragment-shader";

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

function getSphere(count, size, vector = new Vector4()) {
  const data = new Float32Array(count * 4);
  for (let index = 0; index < count * 4; index += 4) {
    getPoint(vector, size, data, index);
  }
  return data;
}

class SimulationMaterial extends ShaderMaterial {
  constructor() {
    const positionsTexture = new DataTexture(
      getSphere(512 * 512, 128),
      512,
      512,
      RGBAFormat,
      FloatType
    );
    positionsTexture.needsUpdate = true;
    super({
      fragmentShader,
      uniforms: {
        positions: { value: positionsTexture },
        uCurlFreq: { value: 0.25 },
        uTime: { value: 0 },
      },
      vertexShader: `varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }`,
    });
  }
}

extend({ SimulationMaterial });
