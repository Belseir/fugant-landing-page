import { useFrame, useThree } from "@react-three/fiber";
import { MutableRefObject, useRef } from "react";
import { SpotLight, Vector3 } from "three";

const Camera = () => {
  const ref = useRef() as MutableRefObject<SpotLight>;
  const camera = useThree(({ camera }) => camera);

  useThree(({ camera }) => {
    camera.position.set(-9, 0, 0);
  });

  useFrame((state) => {
    state.camera.lookAt(new Vector3(0, 0, 0));
    state.camera.updateProjectionMatrix();
    ref.current?.position.set(
      camera.position.x,
      camera.position.y,
      camera.position.z
    );
  });

  return (
    <spotLight
      ref={ref}
      position={[-9, 0, 0]}
      angle={0.7}
      penumbra={1}
      castShadow
    />
  );
};

export default Camera;
