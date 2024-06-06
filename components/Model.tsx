import { useAnimations, useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Group } from "three";

useGLTF.preload("/robot_playground.glb");

export default function Model() {
  const group = useRef<Group>(null);
  const { nodes, materials, animations, scene } = useGLTF(
    "/robot_playground.glb"
  );
  const { actions, clips } = useAnimations(animations, scene);
  const scroll = useScroll();

  // ******************** CREATE THE ANIMATION *******************
  // ? First we need to pause it
  useEffect(() => {
    //@ts-ignore
    actions["Experiment"].play().paused = true;
    //@ts-ignore
    // actions["Walk"].play().paused = true;
  }, [actions]);
  // ? Then we need to attach it to scroll event
  useFrame(
    () =>
      //@ts-ignore
      (actions["Experiment"].time =
        //@ts-ignore
        (actions["Experiment"]?.getClip().duration * scroll.offset) / 1)
    //@ts-ignore
    // (actions["Walk"].time =
    //@ts-ignore
    // (actions["Walk"].getClip().duration * scroll.offset) / 1)
  );
  return (
    <group ref={group} position={[0, -1.5, 1.5]} scale={[1.25, 1.25, 1.25]}>
      <primitive object={scene} />
      {/* <mesh
        geometry={nodes.MeshName.geometry}
        material={nodes.MeshName.material}
        onClick={() => console.log("Mesh clicked")}
        onPointerOver={() => console.log("Pointer over")}
      /> */}
    </group>
  );
}
