import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations, Float } from '@react-three/drei';
import { Color, TextureLoader } from 'three';

const Astronaut = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/models/animated_floating_astronaut_in_space_suit_loop.glb');
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const animationName = 'floating';
    if (actions[animationName]) {
      actions[animationName].play();
    }

    // Update materials with new colors and shininess
    materials.material_0.color = new Color(0x00ccff); // Face color (white)
    materials.material_1.color = new Color(0xff6600); // Suit color (blue)
    materials.material_2.color = new Color(0xffffff); // Other part color (red)

    // Set metallic and roughness for shininess
    materials.material_0.metalness = 0.7; // Increase for shininess
    materials.material_0.roughness = 0.1; // Lower for smoother surface
    materials.material_1.metalness = 0.7; 
    materials.material_1.roughness = 0.1; 
    materials.material_2.metalness = 0.5; 
    materials.material_2.roughness = 0.2; 

   
  }, [actions, materials]);

  return (
    <>
      <Float speed={4} damping={0.8} rotationIntensity={10} floatIntensity={3} floatingRange={[-2, 3, 3]}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} color={0xd3d3d3} />

        <group ref={group} {...props} dispose={null}>
          <group name="Sketchfab_Scene">
            <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={1.315}>
              <group name="root">
                <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
                  <group name="RootNode0_0" scale={0.01}>
                    <group name="skeletal3_6">
                      <group name="GLTF_created_0">
                        <primitive object={nodes.GLTF_created_0_rootJoint} />
                        <skinnedMesh
                          name="Object_99"
                          geometry={nodes.Object_99.geometry}
                          material={materials.material_0} // Face (white)
                          skeleton={nodes.Object_99.skeleton}
                        />
                        <skinnedMesh
                          name="Object_100"
                          geometry={nodes.Object_100.geometry}
                          material={materials.material_1} // Suit (blue)
                          skeleton={nodes.Object_100.skeleton}
                        />
                        <skinnedMesh
                          name="Object_103"
                          geometry={nodes.Object_103.geometry}
                          material={materials.material_1} // Another part of suit
                          skeleton={nodes.Object_103.skeleton}
                        />
                        <skinnedMesh
                          name="Object_106"
                          geometry={nodes.Object_106.geometry}
                          material={materials.material_2} // Additional part (red)
                          skeleton={nodes.Object_106.skeleton}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </Float>
    </>
  );
};

useGLTF.preload('/models/animated_floating_astronaut_in_space_suit_loop.glb');

export default Astronaut;
