import React, { useState } from 'react'
import { workExperiences } from '../constants';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Avatar from './Avatar';
import { Suspense } from 'react';
import CanvasLoader from './CanvasLoader';
const Achievements = () => {
  const [animationname,setanimationname] = useState('idle');

  return (
    <section className='c-space my-20'>
      <div className='w-full text-white-600'>
        <h3 className='head-text'>My Achievements</h3>
        <h4 className='sub-text'>Believe or not It's my Avatar!😅 (hover or click on each)</h4>
        <div className='work-container'>
          <div className='work-canvas'>
            <Canvas>
              <ambientLight intensity={7}/>
              <spotLight position={[10,10,10]} angle={0.15} penumbra={1}/>
              <directionalLight position={[10,10,10]} intensity={0.5} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2}/>
              <Suspense fallback={<CanvasLoader/>}>
                <Avatar position-y={-3} scale={2.9} animationName={animationname}/>
              </Suspense>


            </Canvas>
          </div>
          <div className='work-content'>
            <div className='sm:py-10 py-5 sm:px-5 px-2.5'>
              {workExperiences.map(({id,name,pos,duration,title,icon,animation})=>(
                <div 
                key={id} 
                className='work-content_container group' 
                onClick={() => {setanimationname(animation.toLowerCase())
                  // console.log(animation);

                }
              } 
                onPointerOver={() => setanimationname(animation.toLowerCase())
                  
                }
                onPointerOut={() => setanimationname('idle')}>
              
                  <div className='flex flex-col h-full justify-start items-center py-2'>
                    <div className='work-content_logo'>
                      <img src={icon} alt="logo" className='w-full h-full'/>
                    </div>
                    <div className='work-content_bar'/>
                  </div>
                  <div className='sm:p-5 px-2.5 py-5'>
                    <p className='font-bold text-white-800'>{name}</p>
                    <p className='text-sm mb-5'>{pos}--{duration}</p>
                    <p className='group-hover:text-white transition ease-in-out duration-500'>{title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Achievements;
