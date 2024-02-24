import React from "react";
import * as THREE from 'three';

const textures = [
  // Replace these arrays with your own 2D texture data
  [[1, 1], [0, 0]],
  [[0, 1], [1, 0]],
  [[1, 0], [0, 1]],
  [[0, 0], [1, 1]],
  [[1, 1], [1, 0]],
  [[0, 1], [0, 0]],
];

function TexturedCube() {
  const materials = textures.map((texture) => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = texture[0].length;
    canvas.height = texture.length;

    texture.forEach((row, rowIndex) => {
      row.forEach((pixel, colIndex) => {
        context.fillStyle = pixel ? '#00FF00' : '#000000';
        context.fillRect(colIndex, rowIndex, 1, 1);
      });
    });

    const textureMap = new THREE.CanvasTexture(canvas);
    return new THREE.MeshBasicMaterial({ map: textureMap });
  });

  return (
    <mesh>
      <boxGeometry attach="geometry" args={[1.82, 1.82, 1.82]} />
      {materials.map((material, index) => (
        <meshBasicMaterial attachArray="material" key={index} {...material}/>
      ))}
    </mesh>
  );
}

export default TexturedCube;
