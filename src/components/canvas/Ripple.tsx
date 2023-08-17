import { Preload } from '@react-three/drei';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Suspense, useCallback, useMemo, useRef } from 'react';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import CanvasLoader from './CanvasLoader';

const Ripple = () => {
  const bufferRef = useRef<THREE.BufferAttribute | null>(null);
  const imgTexture = useLoader(TextureLoader, 'circle.png');

  // sin((x^2 + y^2 + 3) * 2) * 0.2 for ripple effect
  const t = useRef(0);
  const f = 0.001;
  const a = -25;
  const graph = useCallback(
    (x: number, z: number) => {
      return Math.sin(f * (x ** 2 + z ** 2 + t.current)) * a;
    },
    [t, f, a],
  );

  const count = 50;
  const sep = 2;
  const positions = useMemo(() => {
    const positions = [];

    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        const x = sep * (xi - count / 2);
        const z = sep * (zi - count / 2);
        const y = graph(x, z);
        positions.push(x, y, z);
      }
    }
    return new Float32Array(positions);
  }, [count, sep, graph]);

  useFrame(() => {
    t.current += 30;

    if (!bufferRef.current) return;

    const positions = bufferRef.current.array;

    let i = 0;
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        const x = sep * (xi - count / 2);
        const z = sep * (zi - count / 2);

        positions[i + 1] = graph(x, z);
        i += 3;
      }
    }

    bufferRef.current.needsUpdate = true;
  });

  return (
    <points>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          ref={bufferRef}
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        attach="material"
        map={imgTexture}
        color={0xffffff}
        size={0.5}
        sizeAttenuation
        transparent={false}
        alphaTest={0.5}
        opacity={1.0}
      />
    </points>
  );
};

const RippleCanvas = () => {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 100, 0] }} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <Ripple />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default RippleCanvas;
