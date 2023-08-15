import { PointMaterial, Points, Preload } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { inSphere } from 'maath/random';
import { Suspense, useRef, useState } from 'react';

const Stars = () => {
  const ref = useRef<THREE.Points | null>(null);
  const [sphere] = useState<Float32Array>(() => {
    const result = inSphere(new Float32Array(5000), { radius: 1.2 });
    if (result instanceof Float32Array) {
      return result;
    } else {
      console.error('Unexpected TypedArray returned from inSphere');
      return new Float32Array(5000);
    }
  });

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#8C89CC"
          size={0.0012}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
