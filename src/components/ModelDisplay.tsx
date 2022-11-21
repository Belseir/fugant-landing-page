import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Camera from "./Camera";
import { FugantModel } from "./FugantModel";

const ModelDisplay = () => {
  return (
    <Canvas>
      <Camera />
      <OrbitControls enableZoom={false} />
      <FugantModel />
    </Canvas>
  );
};

export default ModelDisplay;
