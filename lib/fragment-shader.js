import glsl from 'babel-plugin-glsl/macro';

export const fragmentShader = glsl`uniform sampler2D positions;
uniform float uTime;
uniform float uCurlFreq;
varying vec2 vUv;
#pragma glslify: curl = require(glsl-curl-noise2)
#pragma glslify: noise = require(glsl-noise/classic/3d.glsl)      
void main() {
  float t = uTime * 0.015;
  vec3 pos = texture2D(positions, vUv).rgb; // basic simulation: displays the particles in place.
  vec3 curlPos = texture2D(positions, vUv).rgb;
  pos = curl(pos * uCurlFreq + t);
  curlPos = curl(curlPos * uCurlFreq + t);
  curlPos += curl(curlPos * uCurlFreq * 2.0) * 0.5;
  curlPos += curl(curlPos * uCurlFreq * 4.0) * 0.25;
  curlPos += curl(curlPos * uCurlFreq * 8.0) * 0.125;
  curlPos += curl(pos * uCurlFreq * 16.0) * 0.0625;
  gl_FragColor = vec4(mix(pos, curlPos, noise(pos + t)), 1.0);
}`;
