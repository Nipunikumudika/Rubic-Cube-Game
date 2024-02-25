import React, { useEffect, useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { useFrame } from "react-three-fiber";

// ... (your imports)

const RubiksCubeModel = ({
  index,
  nodesSubset,
  drag,
  onDragChange,
  mouseDownPlane,
  mouseUpPlane,
  mouseDownCube,
  mouseUpCube,
  set,
  xyzdirection,
  direction,
}) => {
  const cubeRefs = useRef([]);
  const orbitRef = useRef();
  const initialRotation = [Math.PI / 6, Math.PI / 4, 0];
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
      const clickedPlane = groupRef.current.children[0].children.find(
        (child) => child === event.object
      );
      if (clickedPlane) {
        mouseUpPlane(clickedPlane.name);
        mouseUpCube(index);
        DraggingDown(set);
        console.log(direction);
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
        if (direction == "a") {
          if (xyzdirection == "x") {
            targetRot = groupRef.current.children[0].rotation.x - Math.PI / 2;
          } else if (xyzdirection == "y") {
            targetRot = groupRef.current.children[0].rotation.y - Math.PI / 2;
          } else if (xyzdirection == "z") {
            targetRot = groupRef.current.children[0].rotation.z - Math.PI / 2;
          }
          Up();
        } else if(direction == "c"){
          if (xyzdirection == "x") {
            targetRot = groupRef.current.children[0].rotation.x + Math.PI / 2;
          } else if (xyzdirection == "y") {
            targetRot = groupRef.current.children[0].rotation.y + Math.PI / 2;
          } else if (xyzdirection == "z") {
            targetRot = groupRef.current.children[0].rotation.z + Math.PI / 2;
          }

          Down();
        }
      }
    }
  };

  const Down = async () => {
    if (xyzdirection == "x") {
      while (
        Math.abs(groupRef.current.children[0].rotation.x - targetRot) >= 0.001
      ) {
        groupRef.current.children[0].rotation.x += Math.PI / 30;
        await new Promise((resolve) => requestAnimationFrame(resolve));
        await new Promise((resolve) => setTimeout(resolve, 1));
      }
    } else if (xyzdirection == "y") {
      while (
        Math.abs(groupRef.current.children[0].rotation.y - targetRot) >= 0.001
      ) {
        groupRef.current.children[0].rotation.y += Math.PI / 30;
        await new Promise((resolve) => requestAnimationFrame(resolve));
        await new Promise((resolve) => setTimeout(resolve, 1));
      }
    } else if (xyzdirection == "z") {
      while (
        Math.abs(groupRef.current.children[0].rotation.z - targetRot) >= 0.001
      ) {
        groupRef.current.children[0].rotation.z += Math.PI / 30;
        await new Promise((resolve) => requestAnimationFrame(resolve));
        await new Promise((resolve) => setTimeout(resolve, 1));
      }
    }
  };

  const Up = async () => {
    if (xyzdirection == "x") {
      while (
        Math.abs(groupRef.current.children[0].rotation.x - targetRot) >= 0.001
      ) {
        groupRef.current.children[0].rotation.x -= Math.PI / 30;
        await new Promise((resolve) => requestAnimationFrame(resolve));
        await new Promise((resolve) => setTimeout(resolve, 1));
      }
    } else if (xyzdirection == "y") {
      while (
        Math.abs(groupRef.current.children[0].rotation.y - targetRot) >= 0.001
      ) {
        groupRef.current.children[0].rotation.y -= Math.PI / 30;
        await new Promise((resolve) => requestAnimationFrame(resolve));
        await new Promise((resolve) => setTimeout(resolve, 1));
      }
    } else if (xyzdirection == "z") {
      while (
        Math.abs(groupRef.current.children[0].rotation.z - targetRot) >= 0.001
      ) {
        groupRef.current.children[0].rotation.z -= Math.PI / 30;
        await new Promise((resolve) => requestAnimationFrame(resolve));
        await new Promise((resolve) => setTimeout(resolve, 1));
      }
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
