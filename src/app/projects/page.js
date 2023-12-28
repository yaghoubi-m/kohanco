'use client';
import { MyApp } from '@/MyApp';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import NewsField from '@/components/Home/newsfield/NewsField';
import Description from '@/components/Projects/descrption/Description';
// import Gallery from '@/components/Projects/gallery/Gallery';
// import { GalleryCopy } from '@/components/Projects/gallery/Gallerycopy';
import { Test } from '@/components/Projects/gallery/test';
import { useState, useRef, useEffect, useLayoutEffect } from 'react';

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

const Projects = () => {
  
  return (
    <>
      {/* <Header /> */}
      <Description />
      {/* <Gallery /> */}

      <MyApp />

      {/* <Test
          style={{ width: '95%', height: '100%', border: '1px solid green' }}
          // width={600}
          // height={400}
          items={items}
          logoWidth={7}
          logoHeight={10}
          itemWidth={itemWidth}
          itemHeight={itemHeight}
          verticalGap={5}
          horizontalGap={2}
          Logo={0}
          randomness={0}
        /> */}

      {/* <NewsField /> */}
      {/* <Footer /> */}
      {/* <GalleryCopy /> */}
      {/* <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          fontSize: '2rem',
          color: '#FFF ',
        }}
      >
        <div
          style={{
            width: '200px',
            height: '300px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'gray',
            zIndex: '1',
          }}
        ></div>
        {items.map((i, inx) => (
          <div
            style={{
              width: '200px',
              height: '300px',
              border: '1px solid #000',
              margin: '5px',
              backgroundColor: '#feb000',
            }}
            key={inx}
          >
            {i}
          </div>
        ))}
      </div> */}
    </>
  );
};

export default Projects;
