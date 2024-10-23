import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera,Stars, OrbitControls } from '@react-three/drei';
import CanvasLoader from '../components/CanvasLoader';
import HackerRoom from '../components/HackerRoom';
// import HackerRoom2 from '../components/HackerRoom2';
import {useMediaQuery} from "react-responsive"
import Astronaut from '../components/Astronaut';
import { calculateSizes } from '../constants';
import Chess from '../components/Chess'
import ReactLogo from '../components/ReactLogo'
import Badminton from '../components/Badminton';
import HeroCamera from '../components/HeroCamera';
import Guitar from '../components/Guitar';
import HoverButton from '../components/HoverButton';

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
const Hero = () => {
  const issmall = useMediaQuery({maxWidth:440});
  const ismobile = useMediaQuery({maxWidth:768});
  const istablet = useMediaQuery({minWidth:769, maxWidth:1023});
  const sizes = calculateSizes(issmall,ismobile, istablet); 
  return (
    <section className="min-h-screen w-full flex flex-col relative" id="heroo">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hey, I'm Aryan <span className="waving-hand">&#9995;</span>
        </p>
        <p className="hero_tag text-gray_gradient mb-10">Building Ideas
        into Reality!</p>
      </div>
      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />
              <Astronaut scale={sizes.astronautscale} position={sizes.astronautposition }   />
              
            <HeroCamera ismobile={ismobile}>
            <HackerRoom scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0, -Math.PI , 0]} />
            <group>
              
              <ReactLogo position={sizes.reactLogoPosition} scale={sizes.reactscale} ></ReactLogo>
              <Chess
  position={sizes.chessBoardPosition}
  scale={sizes.chessBoardScale}
  rotation={[-Math.PI/3, Math.PI / 3, Math.PI/3]}
/>

              <Badminton position={sizes.badmintonPosition} scale={sizes.badmintonScale} />
              <Guitar position={sizes.guitarposition} scale={sizes.guitarscale} rotation={[Math.PI / 4, -Math.PI/9, -Math.PI /4]} />
              </group> 
            </HeroCamera>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
          <Stars radius={100} depth={50} count={8000} factor={4} saturation={0} fade />

          <SpaceBackground/>

          <OrbitControls /> 
        </Canvas>
      </div>
      <div className='absolute bottom-10 left-0 right-0 w-full z-10 c-space'>
        <a href="#contact" className='w-fit'>
          <HoverButton name={<><span>Aryan's Stellar Journey</span><span className='thinking-emoji'><i>&#x1f30c;
            </i></span></>} 
          isBeam containerClass='sm:w-fit w-fit w-full sm:min-w-96'/>
        </a>
      </div>
    </section>
  );
};

export default Hero;