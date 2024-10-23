// RocketCursor.js
import React, { useEffect } from 'react';

const RocketCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor');

    const mouseMoveHandler = (event) => {
      cursor.style.top = `${event.clientY}px`;
      cursor.style.left = `${event.clientX}px`;
    };

    window.addEventListener('mousemove', mouseMoveHandler);

    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, []);

  return (
    <>
      <div className="cursor">🚀</div>
    </>
  );
};

export default RocketCursor;
