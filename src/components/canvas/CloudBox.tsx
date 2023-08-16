import { Canvas } from '@react-three/fiber';
import type * as THREE from 'three';
import { useRef, useLayoutEffect } from 'react';

type MomentData = {
  color: number;
  position: number[];
};

const randomPos = () => {
  const min = 5;
  const max = -5;
  return Math.random() * (max - min) + min;
};

type MomentProps = {
  data: MomentData;
  position?: number[];
};

const Moment = ({ data }: MomentProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useLayoutEffect(() => {
    if (meshRef.current === null) return;
    meshRef.current.position.x = data.position[0];
    meshRef.current.position.y = data.position[1];
    meshRef.current.position.z = data.position[2];
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry attach="geometry" args={[0.1, 0.08, 0.003]} />
      <meshStandardMaterial color={data.color} />
    </mesh>
  );
};

type CloudProps = {
  momentsData: MomentData[];
};

const Cloud = ({ momentsData }: CloudProps) => {
  // const vec = new THREE.Vector3();

  return (
    <instancedMesh>
      {momentsData.map((moment, i) => {
        // Set position here so it isn't reset on state change
        // for individual moment.
        return <Moment key={i} data={moment} />;
      })}
    </instancedMesh>
  );
};

const CloudBox = () => {
  const colorList = [0x8c89cc, 0xa38ecf, 0x8673aa, 0xffffff, 0xffffff, 0xffffff];
  const momentsArray = [];
  for (let i = 0; i < 500; i++) {
    momentsArray.push({
      color: colorList[Math.floor(Math.random() * colorList.length)],
      position: [randomPos(), randomPos(), randomPos()],
    });
  }

  return (
    <Canvas linear camera={{ position: [0, 0, 5] }} gl={{ preserveDrawingBuffer: true }}>
      <ambientLight />
      <directionalLight position={[150, 150, 150]} intensity={1} />
      <Cloud momentsData={momentsArray} />
    </Canvas>
  );
};

export default CloudBox;
