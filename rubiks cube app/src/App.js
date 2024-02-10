import React, { Suspense, useMemo,useRef,useState ,useEffect} from 'react';
import { Canvas ,useFrame} from 'react-three-fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';
import { useLoader } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import './App.css';

const RubiksCube = () => {
  const { scene } = useLoader(GLTFLoader, '/rubikcube.gltf');
  const initialRotation = [Math.PI / 6, Math.PI / 4, 0];
  scene.rotation.set(...initialRotation);

  const nodesSubset1 = useMemo(() => scene.children.slice(0, 9), [scene]);//only one layer
  const nodesSubset2 = useMemo(() => scene.children.slice(9), [scene]);//two layers

  const [rotationSubset1, setRotationSubset1] = useState(initialRotation);
  const [rotationSubset2, setRotationSubset2] = useState(initialRotation);

  return (
    <Canvas>
      <ambientLight />
      {/* <OrbitControls enableZoom={false} /> */}
      <Suspense fallback={null}>
        <group position={[0, 0, 0]} rotation={rotationSubset1}>
          <RubiksCubeModel nodesSubset={nodesSubset1} rotation={rotationSubset1} setRotation={setRotationSubset1}/>
        </group>
        <group position={[0, 0, 0]} rotation={rotationSubset1}>
          <RubiksCubeModel nodesSubset={nodesSubset2} rotation={rotationSubset2} setRotation={setRotationSubset2}/>
        </group>
      </Suspense>
      <pointLight position={[10, 10, 10]} />
    </Canvas>
  );
};

const RubiksCubeModel = ({ nodesSubset,rotation, setRotation }) => {
  const cubeRefs = useRef([]);
  const [isDragging, setDragging] = useState(false);
 let rot=0;

  const handlePointerDown = (event) => {
    console.log(Math.PI/2);
    event.stopPropagation();
    setDragging(true);    
  };

  useFrame(() => {
    if (isDragging ) {
      console.log(rot<Math.PI/2);
      cubeRefs.current.forEach((cubeRef, index) => {
        cubeRef.current.rotation.z += 0.01;
        rot=cubeRef.current.rotation.z+0.001;
        if (rot %( Math.PI / 2)<=0.01) {
          setDragging(false);
        }
      });
    }
  });



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
