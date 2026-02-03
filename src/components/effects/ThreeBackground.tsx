import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';
import styles from './ThreeBackground.module.css';

interface FloatingShapeProps {
  position: [number, number, number];
  color: string;
  shape: 'box' | 'sphere' | 'torus';
}

function FloatingShape({ position, color, shape }: FloatingShapeProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.001;
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        {shape === 'box' && <boxGeometry args={[1, 1, 1]} />}
        {shape === 'sphere' && <sphereGeometry args={[0.6, 32, 32]} />}
        {shape === 'torus' && <torusGeometry args={[0.5, 0.2, 16, 100]} />}
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.6}
          wireframe
        />
      </mesh>
    </Float>
  );
}

function Scene() {
  const shapes = useMemo(() => {
    const colors = ['#667eea', '#764ba2', '#4facfe', '#00f2fe', '#f093fb'];
    const shapeTypes: ('box' | 'sphere' | 'torus')[] = ['box', 'sphere', 'torus'];
    const result: FloatingShapeProps[] = [];

    for (let i = 0; i < 8; i++) {
      result.push({
        position: [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 10 - 5,
        ],
        color: colors[Math.floor(Math.random() * colors.length)],
        shape: shapeTypes[Math.floor(Math.random() * shapeTypes.length)],
      });
    }

    return result;
  }, []);

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      {shapes.map((shape, index) => (
        <FloatingShape key={index} {...shape} />
      ))}
    </>
  );
}

const ThreeBackground: React.FC = React.memo(() => {
  return (
    <div className={styles.threeContainer}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        dpr={[1, 2]}
      >
        <Scene />
      </Canvas>
    </div>
  );
});

ThreeBackground.displayName = 'ThreeBackground';

export default ThreeBackground;
