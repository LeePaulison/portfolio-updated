'use client'
import React from 'react';
import AnimatedThumb from "./animatedThumb";

export const IntermediatePage = ({ children }) => {
  const mainRef = React.useRef(null);
  return (
    <div className='relative flex flex-col h-screen overflow-hidden'>
      <main className='flex-grow overflow-y-auto' ref={mainRef}>
        <section className='container'>{children}</section>
      </main>
      <AnimatedThumb containerRef={mainRef} />
    </div>
  );
};

