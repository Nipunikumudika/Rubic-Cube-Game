import React, { useEffect,useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { useFrame } from "react-three-fiber";

// ... (your imports)

const RubiksCubeModel = ({ index, nodesSubset, drag, onDragChange, mouseDownPlane, mouseUpPlane, mouseDownCube, mouseUpCube, set,rotation}) => {
  const cubeRefs = useRef([]);
  const orbitRef = useRef();
  const initialRotation = [Math.PI / 6, Math.PI / 4, 0];
  const groupRef = useRef();
  let rotationindex;

  let checkup;
  const handlePointerDown = (event) => {
    const clickedPlane = groupRef.current.children[0].children.find((child) => child === event.object);
    if (clickedPlane) {
      mouseDownPlane(clickedPlane.name);
      mouseDownCube(index);
    }
    checkup = 1;
    onDragChange(false);
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
    event.stopPropagation();
  };

  const handlePointerMove = (event) => {};
  useEffect(() => {
    rotationindex = set;
    DraggingDown(rotationindex);
  }, [set]);

  const handlePointerUp = async (event) => {
    if (checkup == null) {
      const clickedPlane = groupRef.current.children[0].children.find((child) => child === event.object);
      if (clickedPlane) {
        mouseUpPlane(clickedPlane.name);
        mouseUpCube(index);
        DraggingDown(set);
      }
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      event.stopPropagation();
    }
    onDragChange(true);
  };
let targetRot;
  const DraggingDown = async (cubeIndices) => {
    if (cubeIndices != null) {
      if (cubeIndices.includes(index)) {
        targetRot = groupRef.current.children[0].rotation.x + (Math.PI / 2);
          console.log(groupRef.current.children[0].rotation.x);
       Down();
      }
    }
  };


  const Down = async () => {
      while (Math.abs(groupRef.current.children[0].rotation.x - targetRot) >= 0.001) {
        groupRef.current.children[0].rotation.x += Math.PI / 30;
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
            ref={(ref) => (cubeRefs.current[nodeIndex] = ref)} // Assign ref directly, not inside an object
          />
        ))}
      </group>
      <group></group>
      <OrbitControls ref={orbitRef} enableZoom={false} />
    </>
  );
};

export default RubiksCubeModel;

