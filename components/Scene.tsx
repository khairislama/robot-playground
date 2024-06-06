"use client";

import { Suspense, useRef } from "react";
import { Html, ScrollControls, useProgress, Stats } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import Model from "./Model";

function Loader() {
  const { progress, active } = useProgress();

  return <Html center>{progress.toFixed(1)} % loaded</Html>;
}

function CameraControls() {
  // camera zoom in and out
  const { camera, gl } = useThree();
  useFrame(() => {
    camera.position.x = Math.sin(Date.now() / 1000) * 5; // Make camera moves in sin along the x axis
    camera.lookAt(0, 0, 0); // Always look at the center of the scene
  });
  return null;
}

export default function Scene() {
  return (
    <Canvas gl={{ antialias: true }} dpr={[1, 1.5]} className="relative h-svh">
      <Stats showPanel={0} /> {/* Show panel 0 (fps) - 1 (MS) - 2 (MB) */}
      {/* This light is like the sun (shadow and one source point) */}
      <directionalLight position={[-5, -5, 5]} intensity={4} />
      {/* This light is like augmenting luminosity */}
      {/* <ambientLight intensity={50} /> */}
      <CameraControls />
      <Suspense fallback={<Loader />}>
        <ScrollControls damping={0.5} pages={3}>
          <Model />
        </ScrollControls>
        <EffectComposer>
          <Bloom
            luminanceThreshold={0.3}
            luminanceSmoothing={0.9}
            height={300}
          />
        </EffectComposer>
      </Suspense>
      {/* <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} /> */}
    </Canvas>
  );
}
