'use client';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import NewsField from '@/components/Home/newsfield/NewsField';
import Description from '@/components/Projects/descrption/Description';
// import Gallery from '@/components/Projects/gallery/Gallery';
// import { GalleryCopy } from '@/components/Projects/gallery/Gallerycopy';
import { Test } from '@/components/Projects/gallery/test';
import { useState } from 'react';

const Projects = () => {
  const [number, setNumber] = useState(100);
  const items = [...Array(number).keys()].map((i) => i + 1);
  const a = Math.floor(items.length / 2) - 1;

  const f = () => {
    if (items.length % 2 == 0) {
      return items.length / 2;
    } else {
      return items.length / 2 - 1;
    }
  };
  console.log(Math.floor(f()));
  return (
    <>
      {/* <Header /> */}
      <Description />
      {/* <Gallery /> */}
      <div
        className="flex items-center h-[70vh] w-full"
        style={{ justifyContent: 'center' }}
      >
        <Test
          style={{ border: '1px solid green' }}
          width={600}
          height={400}
          items={items}
          logoWidth={7}
          logoHeight={10}
          itemWidth={10}
          itemHeight={13}
          verticalGap={4}
          horizontalGap={2}
          Logo={0}
          randomness={3}
        />
      </div>
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
