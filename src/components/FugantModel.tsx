import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { Group } from "three";
import { useFrame } from "@react-three/fiber";
import { useWindowSize } from "../hooks/useWindowSize";

type GLTFResult = GLTF & {
  nodes: {
    Cube002_1: THREE.Mesh;
    Cube002_2: THREE.Mesh;
    Cube001_1: THREE.Mesh;
    Cube001_2: THREE.Mesh;
  };
  materials: {
    Texto: THREE.MeshStandardMaterial;
    Sensor: THREE.MeshStandardMaterial;
  };
};

export function FugantModel(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF(
    "/fugant/model.glb"
  ) as unknown as GLTFResult;

  const ref = useRef() as React.MutableRefObject<Group>;

  useFrame(() => {
    ref.current.rotation.y += 0.01;
  });

  const { width, ..._ } = useWindowSize();

  return (
    <group
      ref={ref}
      {...props}
      dispose={null}
      scale={width * 0.0007 > 1 ? 1 : width * 0.0007}
    >
      <group rotation={[0, 0, Math.PI / 2]} scale={[3.55, 0.87, 2.65]}>
        <mesh geometry={nodes.Cube002_1.geometry}>
          <meshStandardMaterial attach="material" color="rgb(255, 255, 255)" />
        </mesh>
        <mesh geometry={nodes.Cube002_2.geometry} material={materials.Texto} />
      </group>
      <group rotation={[0, 0, Math.PI / 2]} scale={[3.55, 0.87, 2.65]}>
        <mesh geometry={nodes.Cube001_2.geometry} material={materials.Sensor} />
      </group>
    </group>
  );
}

useGLTF.preload("/fugant/model.glb");
