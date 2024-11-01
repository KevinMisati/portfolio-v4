import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';

const HeroCamera = ({ isMobile, children }) => {
  const group = useRef();

  useFrame((state, delta) => {
    //easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta);

    easing.damp3(state.camera.position, [-15, 27, 0], 0.25, delta);
    //state.camera.lookAt(0, 0, 0);

    if (!isMobile) {
      easing.dampE(group.current.rotation, [-state.pointer.y / 3, state.pointer.x / 5, 0], 0.25, delta);
    }
  });

  return <group ref={group}>{children}</group>;
};

export default HeroCamera;