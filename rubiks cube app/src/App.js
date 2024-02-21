import React, { Suspense, useMemo, useState } from "react";
import { Canvas } from "react-three-fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
import RubiksCubeModel from "./RubiksCubeModel";
import "./App.css";
import { useLoader } from "react-three-fiber";

const RubiksCube = () => {
  const { scene } = useLoader(GLTFLoader, "/rubikcube.gltf");
  const [drag, setDrag] = useState(true);

  const nodesSubset1 = useMemo(() => scene.children.slice(0, 9), [scene]);
  const nodesSubset2 = useMemo(() => scene.children.slice(9, 18), [scene]);
  const nodesSubset3 = useMemo(() => scene.children.slice(18, 27), [scene]);

  const handleDragChange = (newDrag) => {
    setDrag(newDrag);
  };

  return (
    <Canvas>
      <ambientLight />
      <Suspense fallback={null}>
        <RubiksCubeModel nodesSubset={nodesSubset1} drag={drag} onDragChange={handleDragChange} />
        <RubiksCubeModel nodesSubset={nodesSubset2} drag={drag} onDragChange={handleDragChange} />
        <RubiksCubeModel nodesSubset={nodesSubset3} drag={drag} onDragChange={handleDragChange} />
      </Suspense>
      <pointLight position={[10, 10, 10]} />
    </Canvas>
  );
};

export default RubiksCube;
