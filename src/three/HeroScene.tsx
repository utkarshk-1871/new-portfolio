"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import type { Mesh } from "three";

function DistortedSphere() {
  const meshRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.15;
      meshRef.current.rotation.x += delta * 0.05;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={meshRef} scale={1.8}>
        <icosahedronGeometry args={[1, 2]} />
        <MeshDistortMaterial
          color="#00d2ff"
          attach="material"
          distort={0.35}
          speed={1.5}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

export function HeroScene() {
  return (
    <div className="h-full w-full" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#9b59ff" />
        <DistortedSphere />
      </Canvas>
    </div>
  );
}
