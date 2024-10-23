import { button } from 'leva'
import { space } from 'postcss/lib/list'
import React, { useState } from 'react'


    const Button = ({ name, isBeam = true, containerClass }) => {
        const [iscopied,setiscopied] = useState(false);

        const handleclick = () =>{
            navigator.clipboard.writeText('8808240726');
            setiscopied(true);
            alert("Aryan's phone number has been copied to your clipboard!")
            setTimeout(() => {
               setiscopied(false) 
            }, 4000);
        }
        return (
          <button onClick={handleclick} className={`mt-10 w-full btn ${containerClass}`}>
            {isBeam && (
              <span className='relative flex h-3 w-3'>
                <span className='absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping' />
                <span className='relative inline-flex rounded-full h-3 w-3 bg-green-500' />
              </span>
            )}
            {name} <span className='waving-hand'><i>&#128222;</i></span> <img src={iscopied?'/assets/tick.svg':''} alt="" />
          </button>
        );
      }
      
 

export default Button
