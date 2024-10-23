import React from 'react'
import { useGLTF } from '@react-three/drei'
import { MeshStandardMaterial } from 'three'

const Threejs = (props) => {
  const { nodes } = useGLTF('/models/three.js.glb')

  // Create a new silvery material
  const silverMaterial = new MeshStandardMaterial({
    color: 0xC0C0C0, // Silver color
    metalness: 1,     // Full metallic
    roughness: 0.2,   // Slight roughness
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5.geometry}
        material={silverMaterial} // Use the new silvery material
        rotation={[0, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/models/three.js.glb')
export default Threejs;
