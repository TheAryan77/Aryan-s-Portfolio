import React from 'react'

const HoverButton = ({ name, isBeam = true, containerClass }) => {
  return (
    <button className={`mt-10 w-full btn ${containerClass}`}>
            {isBeam && (
              <span className='relative flex h-3 w-3'>
                <span className='absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping' />
                <span className='relative inline-flex rounded-full h-3 w-3 bg-green-500' />
              </span>
            )}
            {name}
            
          </button>
  )
}

export default HoverButton
