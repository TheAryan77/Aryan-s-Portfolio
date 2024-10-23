import React, { useState, useRef, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { myProjects } from '../constants';
import CanvasLoader from '../components/CanvasLoader';
import { Center, Stars, OrbitControls } from '@react-three/drei';
import Democomputer from '../components/Democomputer';
import Astronaut from '../components/Astronaut';
const projectcnt = myProjects.length;

const Projects = () => {
    const SpaceBackground = () => {
        return (
          <Stars
            radius={100} // Radius of the stars
            depth={50} // Depth of the star field
            count={5000} // Number of stars
            factor={4} // Size of the stars
            saturation={0} // Saturation of the star colors
            fade // Enable fading effect
          />
        );
      };

  const [index, setIndex] = useState(0);
  const currentProject = myProjects[index];

  const handleNavigation = (direction) => {
    setIndex((prevIndex) => {
      if (direction === 'previous') {
        return prevIndex === 0 ? projectcnt - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectcnt - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  return (
    <section className="c-space my-20">
      <p className="head-text">My Projects</p>
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        {/* Project Description */}
        <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0">
            <img
              src={currentProject.spotlight}
              alt="spotlight"
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>
          <div
            className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
            style={currentProject.logoStyle}
          >
            <img src={currentProject.logo} alt="logo" className="w-10 h-10 shadow-sm" />
          </div>
          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animateText">
              {currentProject.title}
            </p>
            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-5 mt-[-3px]">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo">
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>
            <a
              className="flex gap-2 cursor-pointer text-white-600"
              href={currentProject.href}
              target="_blank"
              rel="noreferrer"
            >
              <p>Check live site or project</p>
              <img className="w-3 h-3 mt-1" src="/assets/arrow-up.png" alt="" />
            </a>
          </div>
          <div className="flex justify-between items-center mt-3">
            <button className="arrow-btn" onClick={() => handleNavigation("previous")}>
              <img src="/assets/left-arrow.png" alt="left-arrow" className="w-4 h-4" />
            </button>
            <button className="arrow-btn" onClick={() => handleNavigation("next")}>
              <img src="/assets/right-arrow.png" alt="right-arrow" className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Canvas Container */}
        <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full flex items-center justify-center">
          <Canvas>
            <ambientLight intensity={Math.PI / 2} />
            <directionalLight position={[10, 10, 5]} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                  <Democomputer position={[0, 0.5, 0]} scale={0.8} texture={currentProject.texture} />
                  
                </group>
              </Suspense>
            </Center>
            <OrbitControls  maxPolarAngle={Math.PI / 2} />
            {/* <Starfield /> */}
            <SpaceBackground/>
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Projects;
