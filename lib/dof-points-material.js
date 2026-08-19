"use client";

import { extend } from "@react-three/fiber";
import { NormalBlending, ShaderMaterial } from "three";

class DofPointsMaterial extends ShaderMaterial {
  constructor() {
    super({
      blending: NormalBlending,
      depthWrite: false,
      fragmentShader: `uniform float uOpacity;
      varying float vDistance;
      void main() {
        vec2 cxy = 2.0 * gl_PointCoord - 1.0;
        if (dot(cxy, cxy) > 1.0) discard;
        gl_FragColor = vec4(vec3(1.0), (1.04 - clamp(vDistance * 1.5, 0.0, 1.0)));
      }`,
      transparent: true,
      uniforms: {
        positions: { value: null },
        uBlur: { value: 30 },
        uFocus: { value: 5.1 },
        uFov: { value: 50 },
        uTime: { value: 0 },
      },
      vertexShader: `uniform sampler2D positions;
      uniform float uTime;
      uniform float uFocus;
      uniform float uFov;
      uniform float uBlur;
      varying float vDistance;
      void main() { 
        vec3 pos = texture2D(positions, position.xy).xyz;
        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        vDistance = abs(uFocus - -mvPosition.z);
        gl_PointSize = (step(1.0 - (1.0 / uFov), position.x)) * vDistance * uBlur;
      }`,
    });
  }
}

extend({ DofPointsMaterial });
