import React, { useRef } from 'react'
import { Float, useGLTF } from '@react-three/drei'

const Guitar = (props)=> {
  const { nodes, materials } = useGLTF('/models/guitar.glb')
  return (
    <Float>
    <group {...props} dispose={null}>
      <group position={[0, 0, 0.818]} scale={0.129} 
      ref={(group) => {
        if (group) {
          group.children.forEach((child) => {
            if (child.material) {
              child.material.opacity = 0.75;
              child.material.transparent = true;
            }
          });
        }
      }}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.body2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.body1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials.body_facets_guitar}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.body3}
        />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]} scale={[0.151, 0.118, 0.118]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_11.geometry}
          material={materials['neck-head']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_12.geometry}
          material={materials.neck2}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_9.geometry}
        material={materials.bridge}
        position={[0, 0.017, 1.606]}
        scale={[0.111, 0.021, 0.111]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_14.geometry}
        material={materials['bridge-pins-saddle-nut']}
        position={[0, 0.023, -1.671]}
        scale={0.015}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_16.geometry}
        material={materials.frets}
        position={[0, 0.026, -1.471]}
        scale={[0.112, 0.002, 0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_18.geometry}
        material={materials['string5-6']}
        position={[-0.149, 0.081, 1.52]}
        rotation={[0.513, Math.PI / 2, 0]}
        scale={0.048}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_20.geometry}
        material={materials['string1-2-3-4']}
        position={[-0.031, 0.081, 1.518]}
        rotation={[0.513, Math.PI / 2, 0]}
        scale={0.048}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_22.geometry}
        material={materials.pattern}
        position={[0, 0, 0.82]}
        rotation={[0, 0.691, 0]}
        scale={0.301}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_24.geometry}
        material={materials.tuning}
        position={[0, -0.176, -2.074]}
        rotation={[-0.265, -0.001, -3.118]}
        scale={[0.038, 0.021, 0.038]}
      />
    </group>
    </Float>
  )
}

useGLTF.preload('/models/guitar.glb')


export default Guitar;