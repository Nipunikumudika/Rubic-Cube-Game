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
  const [isDraggingUp, setDraggingUp] = useState(false);
  const [isDraggingDown, setDraggingDown] = useState(false);
  const startYRef = useRef(null);
  let rot=0;

  const handlePointerDown = (event) => {
    startYRef.current = event.clientY;
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    event.stopPropagation();
  };

  const handlePointerMove = (event) => {
    const startY = startYRef.current;
    if (startY !== null) {
      const deltaY = event.clientY - startY;
      if (deltaY > 0) {
        setDraggingDown(true); 
      } else if (deltaY < 0) {
        setDraggingUp(true); 
      }
    }
  };

  const handlePointerUp = () => {
    window.removeEventListener('pointermove', handlePointerMove);
    window.removeEventListener('pointerup', handlePointerUp);
  };

  useFrame(() => {
    if (isDraggingDown ) {
      cubeRefs.current.forEach((cubeRef, index) => {
        cubeRef.current.rotation.z += 0.01;
        rot=cubeRef.current.rotation.z+0.001;
        let a=Math.abs(rot %( Math.PI / 2));
        if (a<=0.01) {
          setDraggingDown(false);
          rot=0;
        }
      });
    }

    if (isDraggingUp ) {
      cubeRefs.current.forEach((cubeRef, index) => {
        cubeRef.current.rotation.z -= 0.01;
        rot=cubeRef.current.rotation.z+0.001;
        let a=Math.abs(rot %( Math.PI / 2));
        if (a<=0.01) {
          setDraggingUp(false);
          rot=0;
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
