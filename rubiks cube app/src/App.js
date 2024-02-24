import React, { Suspense, useMemo, useState } from "react";
import { Canvas } from "react-three-fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
import RubiksCubeModel from "./RubiksCubeModel";
import "./App.css";
import { useLoader } from "react-three-fiber";
import { useMouseHandlers } from "./mouseEventHandlers";

const RubiksCube = () => {
  const { scene } = useLoader(GLTFLoader, "/rubikcube.gltf");
  const [drag, setDrag] = useState(true);
  const { handleMouseDown, handleMouseUp,handleMouseDownCube,handleMouseUpCube,set } = useMouseHandlers();
  const generateNodesSubset = useMemo(() => {
    const subsets = [];


    for (let i = 0; i <= 26; i++) {
      subsets.push(scene.children.slice(i, i + 1));
    }
    return subsets;
  }, [scene]);

  const handleDragChange = (newDrag) => {
    setDrag(newDrag);
  };



  return (
    <Canvas>
      <ambientLight />
      <Suspense fallback={null}>
        {generateNodesSubset.map((nodesSubset, index) => (
          <RubiksCubeModel
            index={index}
            key={index}
            nodesSubset={nodesSubset}
            drag={drag}
            onDragChange={handleDragChange}
            mouseDownPlane={handleMouseDown}
            mouseUpPlane={handleMouseUp}
            mouseDownCube={handleMouseDownCube}
            mouseUpCube={handleMouseUpCube}
            set={set}
          />
        ))}
      </Suspense>
      <pointLight position={[10, 10, 10]} />
    </Canvas>
  );
};
export default RubiksCube;
