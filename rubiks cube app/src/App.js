import React, { Suspense, useMemo, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
import { useLoader } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import "./App.css";

const RubiksCube = () => {
  const { scene } = useLoader(GLTFLoader, "/rubikcube.gltf");
  const initialRotation = [Math.PI / 6, Math.PI / 4, 0];
  scene.rotation.set(...initialRotation);

  const nodesSubset1 = useMemo(() => scene.children.slice(0, 9), [scene]); //only one layer
  const nodesSubset2 = useMemo(() => scene.children.slice(9), [scene]); //two layers

  const [rotationSubset1, setRotationSubset1] = useState(initialRotation);
  const [rotationSubset2, setRotationSubset2] = useState(initialRotation);

  return (
    <Canvas>
      <ambientLight />
      {/* <OrbitControls enableZoom={false} /> */}
      <Suspense fallback={null}>
        <group position={[0, 0, 0]} rotation={rotationSubset1}>
          <RubiksCubeModel
            nodesSubset={nodesSubset1}
            rotation={rotationSubset1}
            setRotation={setRotationSubset1}
          />
        </group>
        <group position={[0, 0, 0]} rotation={rotationSubset1}>
          <RubiksCubeModel
            nodesSubset={nodesSubset2}
            rotation={rotationSubset2}
            setRotation={setRotationSubset2}
          />
        </group>
      </Suspense>
      <pointLight position={[10, 10, 10]} />
    </Canvas>
  );
};

const RubiksCubeModel = ({ nodesSubset, rotation, setRotation }) => {
  const cubeRefs = useRef([]);
  const startYRef = useRef(null);

  const handlePointerDown = (event) => {
      console.log("down");
      startYRef.current = event.clientY;
      window.addEventListener("pointermove", handlePointerMove);
      window.addEventListener("pointerup", handlePointerUp);
      event.stopPropagation();
    
  };

  let deltaY;

  const handlePointerMove = (event) => {
      console.log("move");
      const startY = startYRef.current;
      if (startY !== null) {
        deltaY = event.clientY - startY;
      }
    
  };
  let targetRot=0;
  const handlePointerUp =async () => {
      console.log("up");
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      if (deltaY > 0) {
        cubeRefs.current.forEach((cubeRef, index) => {
          targetRot = cubeRef.current.rotation.z + (Math.PI / 2);
          console.log(targetRot);
        });
        DraggingDown();
        deltaY = 0;
      } else if (deltaY < 0) {
        cubeRefs.current.forEach((cubeRef, index) => {
          targetRot = cubeRef.current.rotation.z - (Math.PI / 2);
          console.log("why");
        });
        DraggingUp();
        deltaY = 0;
      }
    
  };

  const DraggingDown = async () => {
    cubeRefs.current.forEach(async (cubeRef, index) => {
      while (Math.abs(cubeRef.current.rotation.z - targetRot) >= 0.001) {
        cubeRef.current.rotation.z += Math.PI / 50;
        await new Promise((resolve) => requestAnimationFrame(resolve));
        await new Promise((resolve) => setTimeout(resolve, 1));
      }
    });
  };

  const DraggingUp = async () => {
    cubeRefs.current.forEach(async (cubeRef, index) => {
      while (Math.abs(cubeRef.current.rotation.z - targetRot) >= 0.001) {
        cubeRef.current.rotation.z -= Math.PI / 50;
        await new Promise((resolve) => requestAnimationFrame(resolve));
        await new Promise((resolve) => setTimeout(resolve, 1));
      }
    });
  };

  return (
    <group scale={[0.3, 0.3, 0.3]} onPointerDown={handlePointerDown}>
      {nodesSubset.map((node, index) => (
        <primitive
          key={index}
          object={node}
          ref={(ref) => (cubeRefs.current[index] = { current: ref })}
        />
      ))}
    </group>
  );
};

export default RubiksCube;
