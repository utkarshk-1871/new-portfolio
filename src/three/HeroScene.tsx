"use client";

import { useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  MeshDistortMaterial,
  Points,
  PointMaterial,
} from "@react-three/drei";
import type { Mesh } from "three";

import { useThemeColors } from "@/three/useThemeColors";

const PARTICLE_POSITIONS = (() => {
  const count = 160;
  const arr = new Float32Array(count * 3);
  let seed = 42;
  const random = () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };

  for (let i = 0; i < count; i += 1) {
    arr[i * 3] = (random() - 0.5) * 10;
    arr[i * 3 + 1] = (random() - 0.5) * 10;
    arr[i * 3 + 2] = (random() - 0.5) * 5;
  }
  return arr;
})();

function DistortedGlobe({
  primary,
  accent,
  mouse,
}: {
  primary: string;
  accent: string;
  mouse: { x: number; y: number };
}) {
  const meshRef = useRef<Mesh>(null);
  const wireRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.12;
      meshRef.current.rotation.x += delta * 0.04;
      meshRef.current.position.x = mouse.x * 0.25;
      meshRef.current.position.y = mouse.y * 0.18;
    }
    if (wireRef.current) {
      wireRef.current.rotation.y -= delta * 0.06;
      wireRef.current.rotation.x += delta * 0.02;
      wireRef.current.position.x = mouse.x * 0.15;
      wireRef.current.position.y = mouse.y * 0.1;
    }
  });

  return (
    <group>
      <mesh ref={wireRef} scale={2.35}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial
          color={accent}
          wireframe
          transparent
          opacity={0.28}
        />
      </mesh>

      <Float speed={1.5} rotationIntensity={0.35} floatIntensity={0.55}>
        <mesh ref={meshRef} scale={1.75}>
          <icosahedronGeometry args={[1, 2]} />
          <MeshDistortMaterial
            color={primary}
            attach="material"
            distort={0.38}
            speed={1.8}
            roughness={0.15}
            metalness={0.85}
            emissive={accent}
            emissiveIntensity={0.2}
          />
        </mesh>
      </Float>
    </group>
  );
}

function FloatingShapes({
  accent,
  primary,
}: {
  accent: string;
  primary: string;
}) {
  return (
    <>
      <Float speed={2.2} rotationIntensity={0.8} floatIntensity={1.2}>
        <mesh position={[2.1, 0.8, 0.4]} rotation={[0.4, 0.6, 0.2]}>
          <boxGeometry args={[0.35, 0.35, 0.35]} />
          <meshStandardMaterial
            color={primary}
            emissive={accent}
            emissiveIntensity={0.25}
            metalness={0.6}
            roughness={0.3}
          />
        </mesh>
      </Float>

      <Float speed={1.8} rotationIntensity={1} floatIntensity={0.9}>
        <mesh position={[-1.9, -0.6, 0.8]}>
          <torusGeometry args={[0.22, 0.06, 12, 24]} />
          <meshStandardMaterial
            color={accent}
            emissive={primary}
            emissiveIntensity={0.2}
            metalness={0.7}
            roughness={0.25}
          />
        </mesh>
      </Float>

      <Float speed={2.5} rotationIntensity={0.6} floatIntensity={1}>
        <mesh position={[1.4, -1.3, -0.3]} rotation={[0.8, 0, 0.5]}>
          <coneGeometry args={[0.18, 0.35, 4]} />
          <meshStandardMaterial
            color={accent}
            emissive={primary}
            emissiveIntensity={0.15}
            metalness={0.5}
            roughness={0.35}
          />
        </mesh>
      </Float>

      <Float speed={1.6} rotationIntensity={0.5} floatIntensity={0.7}>
        <mesh position={[-1.2, 1.4, -0.5]}>
          <octahedronGeometry args={[0.16, 0]} />
          <meshStandardMaterial
            color={primary}
            emissive={accent}
            emissiveIntensity={0.3}
            metalness={0.75}
            roughness={0.2}
          />
        </mesh>
      </Float>
    </>
  );
}

function ParticleField({ color }: { color: string }) {
  const positions = useMemo(() => PARTICLE_POSITIONS, []);

  return (
    <Points positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color={color}
        size={0.04}
        sizeAttenuation
        depthWrite={false}
        opacity={0.65}
      />
    </Points>
  );
}

function SceneContent({ mouse }: { mouse: { x: number; y: number } }) {
  const { primary, accent } = useThemeColors();

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[5 + mouse.x * 2, 5 + mouse.y * 2, 5]}
        intensity={1.25}
      />
      <pointLight position={[-5, -5, -5]} intensity={0.55} color={accent} />
      <ParticleField color={accent} />
      <DistortedGlobe primary={primary} accent={accent} mouse={mouse} />
      <FloatingShapes accent={accent} primary={primary} />
    </>
  );
}

export function HeroScene() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  return (
    <div
      className="h-full w-full"
      aria-hidden="true"
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
        const y = -((event.clientY - rect.top) / rect.height - 0.5) * 2;
        setMouse({ x, y });
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <SceneContent mouse={mouse} />
      </Canvas>
    </div>
  );
}
