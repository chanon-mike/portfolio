import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import CanvasLoader from './CanvasLoader';

const Box = (props: JSX.IntrinsicElements['mesh']) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(() => {
    if (ref.current) ref.current.rotation.y += 0.01;
  });

  return (
    <mesh {...props} ref={ref} scale={3}>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#844FDA" />
    </mesh>
  );
};

const BoxCanvas = () => {
  return (
    <Canvas dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box />
      </Suspense>
    </Canvas>
  );
};

export default BoxCanvas;
