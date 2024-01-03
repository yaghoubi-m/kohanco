'use client'
import React, {useEffect, useState, useRef} from 'react';
import {MyGallery} from "@/MyGallery";
import {useWindowSize} from "@/MyApp";
import ScrollContainer from "react-indiana-drag-scroll";
import 'react-indiana-drag-scroll/dist/style.css'
function DraggableMap() {
  const [itemWidth, setItemWidth] = useState(0);
  const [itemHeight, setItemHeight] = useState(0);
  // const [conW, setconW] = useState(0);
  const [width, height] = useWindowSize();
  const [number, setNumber] = useState(80);
  const items = [...Array(number).keys()].map((i) => i + 1);
  // const a = Math.floor(items.length / 2) - 1;
  const scrollableDivRef = useRef();
  // console.log(width, height);
  useEffect(() => {
    const handleWheelScroll = (e) => {
      const scrollableDiv = scrollableDivRef.current;
      if (
          (e.deltaY < 0 && scrollableDiv.scrollTop === 0)
          (e.deltaY > 0 && scrollableDiv.scrollTop + scrollableDiv.clientHeight === scrollableDiv.scrollHeight)
      ) {
        return;
      }
      e.preventDefault();
      // const delta = `${e.deltaY} ${e.detail} ${e.wheelDelta}`;
      scrollableDiv.scrollTop += delta;
      // e.preventDefault();
      // const delta = e.deltaY e.detail e.wheelDelta;
      // scrollableDiv.scrollTop += delta;
    };



    // setconW(width);
    // console.log(height)
    // const itemWidth = ref.current.clientWidth;
    setItemWidth((170 / width) * 100);
    setItemHeight((218 / height) * 100);
    // console.log(itemHeight,itemWidth)
    // console.log(itemWidth);
  }, [height, itemWidth, width]);







  ///////
  // const containerRef = useRef(null);
  // const [active, setActive] = useState(false);
  // const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });
  //
  // const dragStart = (e) => {
  //   setActive(true);
  //   setInitialPosition({
  //     x: e.clientX + containerRef.current.scrollLeft,
  //     y: e.clientY + containerRef.current.scrollTop,
  //   });
  // };
  //
  // const dragEnd = () => {
  //   setActive(false);
  // };
  //
  // const drag = (e) => {
  //   if (!active) return;
  //
  //   e.preventDefault();
  //   const xDiff = e.clientX - initialPosition.x;
  //   const yDiff = e.clientY - initialPosition.y;
  //
  //   containerRef.current.scrollLeft = -xDiff;
  //   containerRef.current.scrollTop = -yDiff;
  // };



  return (
      <ScrollContainer
          ref={scrollableDivRef}
          mouseScroll={true}
          // overscroll={true}
          // rubberBand={false}
          // inertia={false}
          // cursor={false}
          // // ref={containerRef}
          className="container"
          // // vertical={true}
          // // horizontal={true}
      >
        <div className="inner-div relative">
          <MyGallery
              // style={getStyle()}
              width={width}
              height={600}
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
      </ScrollContainer>
  );
}

export default DraggableMap;
