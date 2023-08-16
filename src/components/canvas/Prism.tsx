import { Preload } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useRef } from 'react';

type PrismProps = {
  position?: [number, number, number];
  initialRotation?: [number, number, number];
};

const Prism = ({ position, initialRotation }: PrismProps) => {
  const mesh = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (mesh.current === null) return;
    mesh.current.rotation.y = mesh.current.rotation.x -= 0.01;
  });

  return (
    <mesh ref={mesh} position={position} rotation={initialRotation}>
      <coneGeometry attach="geometry" args={[1, 2.5, 3]} />
      <meshBasicMaterial color={0xffffff} />
    </mesh>
  );
};

const generateRandomPosition = (): [number, number, number] => {
  const random = (min: number, max: number) => Math.random() * (max - min) + min;
  return [random(-5, 5), random(-5, 5), random(-5, 5)];
};

const generateRandomRotation = (): [number, number, number] => {
  return [Math.random() * Math.PI * 2, Math.random() * Math.PI * 2, Math.random() * Math.PI * 2];
};

const PrismCanvas = () => {
  const prismsCount = 10;
  const randomData = Array.from({ length: prismsCount }, () => ({
    position: generateRandomPosition(),
    initialRotation: generateRandomRotation(),
  }));

  return (
    <Canvas camera={{ position: [0, 0, 0], fov: 75 }}>
      <Suspense fallback={null}>
        {randomData.map((data, index) => (
          <Prism key={index} position={data.position} initialRotation={data.initialRotation} />
        ))}
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default PrismCanvas;
