'use client'
import { useState, useLayoutEffect, useEffect, useRef } from 'react';
import { MyGallery } from './MyGallery';
import styles from "./MyApp.module.css"
export function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      // console.log(window.innerHeight)
      setSize([window?.innerWidth, window?.innerHeight]);
      // console.log(size)
    }
    window?.addEventListener('resize', updateSize);
    updateSize();
    return () => window?.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

export function MyApp() {
  //   const [number, setNumber] = useState(100);
  //   const items = [...Array(number).keys()].map((i) => i + 1);
  const [itemWidth, setItemWidth] = useState(0);
  const [itemHeight, setItemHeight] = useState(0);
  // const [conW, setconW] = useState(0);
  const [width, height] = useWindowSize();
  const [number, setNumber] = useState(80);
  const items = [...Array(number).keys()].map((i) => i + 1);
  // const a = Math.floor(items.length / 2) - 1;
  const ref = useRef();
  // console.log(width, height);
  useEffect(() => {
    // setconW(width);
    // console.log(height)
    // const itemWidth = ref.current.clientWidth;
    setItemWidth((170 / width) * 100);
    setItemHeight((218 / height) * 100);
    // console.log(itemHeight,itemWidth)
    // console.log(itemWidth);
  }, [height, itemWidth, width]);

  return (
    <>
      {/*<div className="h-10 flex items-center justify-center ">*/}
      {/*  <input*/}
      {/*    className="h-10 w-20 p-4"*/}
      {/*    value={number}*/}
      {/*    onChange={(e) => setNumber(Number(e.target.value))}*/}
      {/*    style={{ border: '1px solid #ccc' }}*/}
      {/*  />*/}
      {/*</div>*/}
      {/*<div className={`grid md:grid-cols-3 grid-cols-1 justify-center justify-items-center gap-y-5 ${styles.s_container}`}>*/}
      {/*  {items.map(i=>(*/}
      {/*      <div key={i} className="bg-amber-950 w-[200px] h-[250px] text-white justify-center items-center flex">{i}</div>*/}
      {/*  ))}*/}
      {/*</div>*/}
      <div
        ref={ref}
        className={`flex items-center h-[650px] w-full mt-[100px] border-4 ${styles.container}`}
        style={{ justifyContent: 'center', position: 'relative' }}
      >
        <MyGallery
          style={{ width: `${width}px` }}
          width={width}
          height={650}
          items={items}
          logoWidth={7}
          logoHeight={10}
          itemWidth={itemWidth}
          itemHeight={itemHeight}
          verticalGap={2}
          horizontalGap={2}
          Logo={0}
          randomness={0}
        />
      </div>
    </>
  );
}

// export default App;
