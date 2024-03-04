import React, { useEffect, useRef ,useState} from "react";
import { OrbitControls } from "@react-three/drei";
import { useFrame } from "react-three-fiber";
import * as THREE from "three";

const RubiksCubeModel = ({
  index,
  nodesSubset,
  drag,
  onDragChange,
  mouseDownPlane,
  mouseUpPlane,
  set,
  xyzdirection,
  direction,
  manuallyTriggerPointerEventsRef,
  buttonClicked,
  timerRunning
}) => {
  const cubeRefs = useRef([]);
  const orbitRef = useRef();
  const initialRotation = [Math.PI / 6, Math.PI / 4, 0];
  const groupRef = useRef();
  let rotationindex;

  let checkup;

  let setcubePlane = [
    [1, 24, "Cube024_3"],
    [4, 15, "Cube015_2"],
    [7, 6, "Cube006_2"],
    [10, 6, "Cube006_4"],
    [13, 3, "Cube003_3"],
    [16, 0, "Cube000_3"],
    [30, 0, "Cube000_1"],
    [33, 9, "Cube009_2"],
    [36, 18, "Cube018_3"],
    [39, 18, "Cube018_2"],
    [42, 21, "Cube021_2"],
    [45, 24, "Cube024_2"],
    [2, 25, "Cube025_3"],
    [5, 16, "Cube016_2"],
    [8, 7, "Cube007_2"],
    [11, 7, "Cube007_3"],
    [14, 4, "Cube004_2"],
    [17, 1, "Cube001_3"],
    [29, 1, "Cube001_2"],
    [32, 10, "Cube010_2"],
    [35, 19, "Cube019_3"],
    [38, 19, "Cube019_2"],
    [41, 22, "Cube022_2"],
    [44, 25, "Cube025_2"],
    [3, 26, "Cube026_3"],
    [6, 17, "Cube017_2"],
    [9, 8, "Cube008_2"],
    [12, 8, "Cube008_4"],
    [15, 5, "Cube005_3"],
    [18, 2, "Cube002_4"],
    [28, 2, "Cube002_3"],
    [31, 11, "Cube011_3"],
    [34, 20, "Cube020_4"],
    [37, 20, "Cube020_2"],
    [40, 23, "Cube023_2"],
    [43, 26, "Cube026_2"],
    [48, 26, "Cube026_4"],
    [51, 23, "Cube023_3"],
    [54, 20, "Cube020_3"],
    [19, 18, "Cube018_4"],
    [22, 21, "Cube021_3"],
    [25, 24, "Cube024_4"],
    [47, 17, "Cube017_3"],
    [50, 14, "Cube014_2"],
    [53, 11, "Cube011_2"],
    [20, 9, "Cube009_3"],
    [23, 12, "Cube012_2"],
    [26, 15, "Cube015_3"],
    [46, 8, "Cube008_3"],
    [49, 5, "Cube005_2"],
    [52, 2, "Cube002_2"],
    [21, 0, "Cube000_2"],
    [24, 3, "Cube003_2"],
    [27, 6, "Cube006_3"],
  ];

  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const manuallyTriggerPointerEvents = async () => {
    for (let i = 0; i <50; i++) {
      const randomInteger1 = getRandomInt(0, 53);
      const randomInteger2 = getRandomInt(0, 53);
      mouseDownPlane(setcubePlane[randomInteger1][2]);
      onDragChange(false);
      mouseUpPlane(setcubePlane[randomInteger2][2]);
      await new Promise((resolve) => setTimeout(resolve, 50));
      onDragChange(true);
    }
  };

  useEffect(() => {
    manuallyTriggerPointerEventsRef.current = manuallyTriggerPointerEvents;
  }, [manuallyTriggerPointerEventsRef]);


  const handlePointerDown = (event) => {
    if (!buttonClicked) return;
    const clickedPlane = groupRef.current.children[0].children.find(
      (child) => child === event.object
    );
    if (clickedPlane) {
      mouseDownPlane(clickedPlane.name);
    }
    checkup = 1;
    onDragChange(false);
    window.addEventListener("pointerup", handlePointerUp);
    event.stopPropagation();
  };

  const handlePointerUp = async (event) => {
    if (!buttonClicked) return;
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

  useEffect(() => {
    rotationindex = set;
    Dragging(rotationindex);
  }, [set]);

  const Dragging = async (cubeIndices) => {
    if (cubeIndices != null) {
      if (cubeIndices.includes(index)) {
        if (direction === "a") {
          console.log("up");
          Up();
        } else if (direction === "c") {
          Down();
          console.log("down");
          // console.log(groupRef.current.children[0].rotation);
        }
      }
    }
  };

  const Down = async () => {
    if (xyzdirection === "x") {
      const rotationAxis = new THREE.Vector3(1, 0, 0);
      await rotateOnAxis(rotationAxis, +Math.PI / 2);
      console.log("x+");
    } else if (xyzdirection === "y") {
      const rotationAxis = new THREE.Vector3(0, 1, 0);
      await rotateOnAxis(rotationAxis, +Math.PI / 2);
      console.log("y+");
    } else if (xyzdirection === "z") {
      const rotationAxis = new THREE.Vector3(0, 0, 1);
      await rotateOnAxis(rotationAxis, +Math.PI / 2);
      console.log("z+");
    }
  };

  const Up = async () => {
    if (xyzdirection === "x") {
      const rotationAxis = new THREE.Vector3(1, 0, 0);
      await rotateOnAxis(rotationAxis, -Math.PI / 2);
      console.log("x-");
    } else if (xyzdirection === "y") {
      const rotationAxis = new THREE.Vector3(0, 1, 0);
      await rotateOnAxis(rotationAxis, -Math.PI / 2);
      console.log("y-");
    } else if (xyzdirection === "z") {
      const rotationAxis = new THREE.Vector3(0, 0, 1);
      await rotateOnAxis(rotationAxis, -Math.PI / 2);
      console.log("z-");
    }
  };

  const rotateOnAxis = async (axis, angle) => {
    if(!timerRunning){
      groupRef.current.children[0].rotateOnWorldAxis(axis, angle);
    }else{
      for (let i = 0; i < 15; i++) {
        groupRef.current.children[0].rotateOnWorldAxis(axis, angle / 15);
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
        scale={[0.35, 0.35, 0.35]}
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
      <OrbitControls ref={orbitRef} enableZoom={false} enablePan={false} rotateSpeed={0.05} />
      {/* <axesHelper args={[5]} /> */}
    </>
  );
};

export default RubiksCubeModel;
