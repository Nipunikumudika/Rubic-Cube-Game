import React, { useEffect, useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { useFrame } from "react-three-fiber";
import * as THREE from 'three';

const RubiksCubeModel = ({
  index,
  nodesSubset,
  drag,
  onDragChange,
  mouseDownPlane,
  mouseUpPlane,
  mouseDownCube,
  set,
  xyzdirection,
  direction,
}) => {
  const cubeRefs = useRef([]);
  const orbitRef = useRef();
  const initialRotation = [Math.PI / 6, Math.PI/4, 0];
  const groupRef = useRef();
  let rotationindex;

  let checkup;
  const handlePointerDown = (event) => {
    const clickedPlane = groupRef.current.children[0].children.find(
      (child) => child === event.object
    );
    if (clickedPlane) {
      mouseDownPlane(clickedPlane.name);
      mouseDownCube(index);
    }
    checkup = 1;
    onDragChange(false);
    window.addEventListener("pointerup", handlePointerUp);
    event.stopPropagation();
  };

  useEffect(() => {
    rotationindex = set;
    Dragging(rotationindex);
  }, [set]);

  const handlePointerUp = async (event) => {
    if (checkup == null) {
      const clickedPlane = groupRef.current.children[0].children.find(
        (child) => child === event.object
      );
      if (clickedPlane) {
        mouseUpPlane(clickedPlane.name);
      }
      window.removeEventListener("pointerup", handlePointerUp);
      event.stopPropagation();
    }
    onDragChange(true);
  };

  let targetRot;
  const Dragging = async (cubeIndices) => {
    if (cubeIndices != null) {
      if (cubeIndices.includes(index)) {
        if (direction === "a") {
          if (xyzdirection === "x") {
            targetRot = groupRef.current.children[0].rotation.x - Math.PI / 2;           
          } else if (xyzdirection === "y") {
            targetRot = groupRef.current.children[0].rotation.y - Math.PI / 2;
          } else if (xyzdirection === "z") {
            targetRot = groupRef.current.children[0].rotation.z - Math.PI / 2;
          }
          console.log("up");
          Up();
          
        } else if(direction === "c"){
          if (xyzdirection === "x") {
            targetRot = groupRef.current.children[0].rotation.x + Math.PI / 2;
          } else if (xyzdirection === "y") {
            targetRot = groupRef.current.children[0].rotation.y + Math.PI / 2;
          } else if (xyzdirection === "z") {
            targetRot = groupRef.current.children[0].rotation.z + Math.PI / 2;
          }
          Down();
          console.log("down");
          // console.log(groupRef.current.children[0].rotation);
        }
      }
    }
  };

  const Down = async () => {
    if (xyzdirection === "x") {
      const rotationAxis = new THREE.Vector3(1,0, 0);
      await rotateOnAxis(rotationAxis, +Math.PI / 2);
      console.log("x+");
    } else if (xyzdirection === "y") {
      const rotationAxis = new THREE.Vector3(0, 1, 0);
      await rotateOnAxis(rotationAxis, +Math.PI / 2);
      console.log("y+");
    } else if (xyzdirection === "z") {
      const rotationAxis = new THREE.Vector3(0,0,1); 
      await rotateOnAxis(rotationAxis, +Math.PI / 2);
      console.log("z+");
    }
  };
  
  const Up = async () => {
    if (xyzdirection === "x") {
      const rotationAxis = new THREE.Vector3(1,0, 0); 
      await rotateOnAxis(rotationAxis, -Math.PI / 2);
      console.log("x-");
    } else if (xyzdirection === "y") {
      const rotationAxis = new THREE.Vector3(0, 1, 0);
      await rotateOnAxis(rotationAxis, -Math.PI / 2);
      console.log("y-");
    } else if (xyzdirection === "z") {
      const rotationAxis = new THREE.Vector3(0,0,1); 
      await rotateOnAxis(rotationAxis, -Math.PI / 2);
      console.log("z-");
    }
  };
  
  const rotateOnAxis = async (axis, angle) => {  
    for (let i = 0; i < 15; i++) {
      groupRef.current.children[0].rotateOnWorldAxis(axis, angle / 15);
      await new Promise((resolve) => requestAnimationFrame(resolve));
      await new Promise((resolve) => setTimeout(resolve, 1));
    }
  };
  



  useFrame(() => {
    orbitRef.current.enabled = drag;
    orbitRef.current.update();
  });

  return (
    <>
      <group
        className="group"
        ref={groupRef}
        scale={[0.3, 0.3, 0.3]}
        rotation={initialRotation}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
      >
        {nodesSubset.map((node, nodeIndex) => (
          <primitive
            key={nodeIndex}
            object={node}
            ref={(ref) => (cubeRefs.current[nodeIndex] = ref)} 
          />
        ))}
      </group>
      <group></group>
      <OrbitControls ref={orbitRef} enableZoom={false} rotateSpeed={0.05} />
      {/* <axesHelper args={[5]} /> */}
    </>
  );
};

export default RubiksCubeModel;
