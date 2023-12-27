import { useState, useLayoutEffect, useEffect, useRef } from 'react';
import { MyGallery } from './MyGallery';
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

export function MyApp() {
  //   const [number, setNumber] = useState(100);
  //   const items = [...Array(number).keys()].map((i) => i + 1);
  const [itemWidth, setItemWidth] = useState(0);
  const [itemHeight, setItemHeight] = useState(0);
  const [conW, setconW] = useState(0);
  const [width, height] = useWindowSize();
  const [number, setNumber] = useState(70);
  const items = [...Array(number).keys()].map((i) => i + 1);
  // const a = Math.floor(items.length / 2) - 1;
  const ref = useRef();
  console.log(width, height);
  useEffect(() => {
    setconW(width);
    // const itemWidth = ref.current.clientWidth;
    setItemWidth((200 / width) * 100);
    setItemHeight((250 / height) * 100);
    // console.log(itemWidth);
  }, [height, itemWidth, width]);

  return (
    <>
      <div className="h-10 flex items-center justify-center ">
        <input
          className="h-10 w-20 p-4"
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
          style={{ border: '1px solid #ccc' }}
        />
      </div>
      <div
        ref={ref}
        className="flex items-center h-[90vh] w-full mt-[100px]"
        style={{ justifyContent: 'center', position: 'relative' }}
      >
        <MyGallery
          style={{ width: `${width}px` }}
          width={width}
          height={800}
          items={items}
          logoWidth={7}
          logoHeight={10}
          itemWidth={itemWidth}
          itemHeight={itemHeight}
          verticalGap={6}
          horizontalGap={6}
          Logo={0}
          randomness={2}
        />
      </div>
    </>
  );
}

// export default App;
