import React, { useRef,useState } from "react";
import { OrbitControls } from "@react-three/drei";
import { useFrame,useThree } from "react-three-fiber";
import { Vector2, Raycaster } from "three";
import * as THREE from 'three';

const RubiksCubeModel = ({ nodesSubset, drag, onDragChange }) => {
  const cubeRefs = useRef([]);
  const orbitRef = useRef();
  const startYRef = useRef(0);
  const initialRotation = [Math.PI / 6, Math.PI / 4, 0];
  const groupRef = useRef();
  const [mouse, setMouse] = useState(new THREE.Vector2());
  const [startY, setStartY] = useState(null);
  const { camera } = useThree();

  // Raycaster for intersection testing
  const raycaster = new THREE.Raycaster();

let x,y,z;
  const handlePointerDown = (event) => {
   x= orbitRef.current.object.position.x
   y= orbitRef.current.object.position.y
   z= orbitRef.current.object.position.z
console.log(z);
  setStartY(event.clientY);

// console.log(y);
    // mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    startYRef.current = event.clientY;
    onDragChange(false);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerup", handlePointerUp, { passive: true });
    event.stopPropagation();
  };

  let deltaY;

  const handlePointerMove = (event) => {

    const startY = startYRef.current;
    // console.log(startY );
    if (startY !== null) {
      const endY = event.clientY
      console.log(z );
      // console.log(y);
      if(z>-0.03){
        console.log("okokokokoko");
        deltaY = endY - startY;
      }else{
        console.log("nononooonoo");
        deltaY = startY - endY;
      }
      // deltaY = endY - startY;
    }
  };

  let targetRot = 0;

  const handlePointerUp = async () => {
    window.removeEventListener("pointermove", handlePointerMove);
    window.removeEventListener("pointerup", handlePointerUp);
    if (deltaY > 0) {
      cubeRefs.current.forEach((cubeRef) => {
        targetRot = cubeRef.current.rotation.z + Math.PI / 2;
      });
      DraggingDown();
      deltaY = 0;
    } else if (deltaY < 0) {
      cubeRefs.current.forEach((cubeRef) => {
        targetRot = cubeRef.current.rotation.z - Math.PI / 2;
      });
      DraggingUp();
      deltaY = 0;
    }
    onDragChange(true);
  };

  const DraggingDown = async () => {
    cubeRefs.current.forEach(async (cubeRef) => {
      while (Math.abs(cubeRef.current.rotation.z - targetRot) >= 0.001) {
        cubeRef.current.rotation.z += Math.PI / 10;
        await new Promise((resolve) => requestAnimationFrame(resolve));
        await new Promise((resolve) => setTimeout(resolve, 1));
      }
    });
    onDragChange(true);
  };

  const DraggingUp = async () => {
    cubeRefs.current.forEach(async (cubeRef) => {
      while (Math.abs(cubeRef.current.rotation.z - targetRot) >= 0.001) {
        cubeRef.current.rotation.z -= Math.PI / 10;
        await new Promise((resolve) => requestAnimationFrame(resolve));
        await new Promise((resolve) => setTimeout(resolve, 1));
      }
    });
    onDragChange(true);
  };

  useFrame(() => {
    orbitRef.current.enabled = drag;
    orbitRef.current.update();
  });

  return (
    <>
      <group classname="group"
        ref={groupRef}
        scale={[0.3, 0.3, 0.3]}
        rotation={initialRotation}
        onPointerDown={handlePointerDown}
      >
        {nodesSubset.map((node, index) => (
          <primitive
            key={index}
            object={node}
            ref={(ref) => (cubeRefs.current[index] = { current: ref })}
          />
        ))}
      </group>
      <OrbitControls ref={orbitRef}  />
    </>
  );
};

export default RubiksCubeModel;
