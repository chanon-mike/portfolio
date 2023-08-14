import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { generateStripeTexture } from '../../utils/generateStripeTexture';

const TypographySphere = () => {
  const mount = useRef(null);
  const textureTextInput = 'chanon_mike';

  useEffect(() => {
    if (mount.current === null) return;

    // Scene and renderer
    const canvas: HTMLCanvasElement = mount.current;
    const width = window.innerWidth;
    const height = window.innerHeight;

    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: true });
    renderer.setSize(width, height);

    // Material and texture
    const colors = {
      main: '#3A3A3A',
      secondary: '#DEDEDE',
    };

    const ballTexture = new THREE.Texture(generateStripeTexture(textureTextInput, colors));
    ballTexture.needsUpdate = true;
    ballTexture.wrapS = THREE.RepeatWrapping;
    ballTexture.wrapT = THREE.RepeatWrapping;
    ballTexture.repeat.set(4, 4);

    const ballMaterial = new THREE.MeshPhongMaterial({
      map: ballTexture,
    });

    // Object
    const geometry = new THREE.SphereGeometry(30, 32, 32);
    const mesh = new THREE.Mesh(geometry, ballMaterial);
    mesh.rotation.z = 45;
    mesh.rotation.x = 550;
    mesh.rotation.y = -206;
    scene.add(mesh);

    // Camera and Light
    const camera = new THREE.PerspectiveCamera(400, width / height, 0.1, 1000);
    camera.position.z = 80;

    const light = new THREE.AmbientLight('rgb(100%, 100%, 100%), 1, 0');
    light.position.set(-200, 30, -30);
    scene.add(light);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      ballTexture.offset.y -= 0.01;
      camera.rotation.z += 0.001;
      renderer.render(scene, camera);
    };
    animate();
  });
};

export default TypographySphere;
