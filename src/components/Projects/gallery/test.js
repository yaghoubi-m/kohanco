import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

const getLayerSize = (layerNo) => (2 * layerNo + 1) ** 2 - (2 * layerNo - 1) ** 2;

const getTotalNoOfLayers = (noOfItems) => {
  let sum = 0;
  for (let i = 1; i <= noOfItems; i++) {
    const layerSize = getLayerSize(i);
    sum += layerSize;
    if (noOfItems <= sum) return i;
  }
};

const getLayerNumber = (itemNo) => {
  var output;
  for (let i = 0; i <= itemNo; i++) {
    if (itemNo < (2 * i + 1) ** 2) {
      output = i;
      break;
    }
  }
  return output;
};

const getItemNoInLayer = (itemNo, layerNo) => itemNo - (2 * layerNo - 1) ** 2 + 1;

const getTopIndex = (layerNo, itemNoInLayer) => {
  let rowLength = 2 * layerNo + 1;
  if (itemNoInLayer <= rowLength) return layerNo;
  if (itemNoInLayer > 3 * rowLength - 4) return -layerNo;
  return layerNo - Math.ceil((itemNoInLayer - rowLength) / 2);
};

const getLeftIndex = (layerNo, itemNoInLayer) => {
  let rowLength = 2 * layerNo + 1;
  if (itemNoInLayer <= rowLength) return itemNoInLayer - layerNo - 1;
  if (itemNoInLayer > 3 * rowLength - 4)
    return itemNoInLayer - (3 * rowLength - 4) - layerNo - 1;
  const isOnLeftSide = (itemNoInLayer - rowLength) % 2 === 1;
  return isOnLeftSide ? -layerNo : layerNo;
};

const getPositionAddress = (layerNo, itemNoInLayer) => {
  const topIndex = getTopIndex(layerNo, itemNoInLayer);
  const leftIndex = getLeftIndex(layerNo, itemNoInLayer);
  return [topIndex, leftIndex];
};

const getStaticAbsolutePosition = (
  layerNo,
  itemNoInLayer,
  logoHeight,
  logoWidth,
  itemHeight,
  itemWidth,
  verticalGap,
  horizontalGap,
) => {
  const [topIndex, leftIndex] = getPositionAddress(layerNo, itemNoInLayer);
  const top =
    50 - (itemHeight / 2 + topIndex * verticalGap + (topIndex - 0.5) * itemHeight);
  const left =
    50 + itemWidth / 2 + leftIndex * horizontalGap + (leftIndex - 0.5) * itemWidth;
  return [top, left];
};

const getDynamicAbsolutePosition = (top, left, mouseTop, mouseLeft, maxTop, maxLeft) => {
  let dynamicLeft, dynamicTop;

  if (maxLeft < 100) dynamicLeft = left;
  else dynamicLeft = left - (mouseLeft - 50) * ((maxLeft - 50) / 50);

  if (maxTop < 100) dynamicTop = top;
  else dynamicTop = top - (mouseTop - 50) * ((maxTop - 50) / 50);

  return [dynamicTop, dynamicLeft];
};

export const Test = ({
  style,
  height,
  width,
  items,
  logoWidth,
  logoHeight,
  itemWidth,
  itemHeight,
  verticalGap,
  horizontalGap,
  Logo,
  randomness,
}) => {
  const [dragging, setDragging] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [relPos, setRelPos] = useState({ x: 0, y: 0 });

  const onMouseDown = (e) => {
    if (e.button !== 0) return;
    setDragging(true);
    setRelPos({
      x: e.pageX - pos.x,
      y: e.pageY - pos.y,
    });
    e.stopPropagation();
    e.preventDefault();
  };

  const onMouseUp = (e) => {
    setDragging(false);
    e.stopPropagation();
    e.preventDefault();
  };
  const onMouseMove = (e) => {
    if (!dragging) return;

    setPos({
      x: e.pageX - relPos.x,
      y: e.pageY - relPos.y,
    });
    let newX = e.pageX - relPos.x;
    let newY = e.pageY - relPos.y;
    const bounds = {
      top: 0,
      right: window.innerWidth,
      bottom: window.innerHeight,
      left: 0,
    };
    // newX = Math.max(bounds.left, Math.min(newX, bounds.right - ref1.current.clientWidth));
    // newY = Math.max(
    //   bounds.bottom,
    //   Math.min(newX, bounds.bottom - ref1.current.clientHeight),
    // );
    // setPos({
    //   x: newX,
    //   y: newY,
    // });
    e.stopPropagation();
    e.preventDefault();
  };
  const myStyle = {
    left: `${pos.x}px`,
    top: `${pos.y}px`,
  };

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  let rqanimfrID = null;

  let xforce = 0;
  let yforce = 0;
  const easing = 0.08;
  const speedX = 0.05;
  const speedY = 0.31;

  const manageMouseMove = (e) => {
    const { movementX, movementY } = e;
    xforce += movementX * speedX;
    yforce += movementY * speedY;
    if (!rqanimfrID) {
      rqanimfrID = requestAnimationFrame(animate);
    }
  };

  const lerp = (start, target, amount) => start * (1 - amount) + target * amount;

  const animate = () => {
    xforce = lerp(xforce, 0, easing);
    yforce = lerp(yforce, 0, easing);
    // console.log(xforce);

    gsap.set(ref1.current, { x: `-=${xforce}`, y: `-=${yforce}` });
    if (Math.abs(xforce) < 0.01) xforce = 0;
    if (Math.abs(yforce) < 0.01) yforce = 0;

    if (xforce != 0 || yforce != 0) {
      requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(rqanimfrID);
      rqanimfrID = null;
    }
  };

  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isDynamic, setIsDynamic] = useState(false);
  const totalNoOfLayers = getTotalNoOfLayers(items?.length);
  const maxLeft = totalNoOfLayers * (itemWidth + horizontalGap) + 50;
  const maxTop = totalNoOfLayers * (itemHeight + verticalGap) + 50;

  const [centerTop, centerLeft] = getDynamicAbsolutePosition(
    50,
    50,
    (100 * coords.y) / height,
    (100 * coords.x) / width,
    maxTop,
    maxLeft,
  );

  const [randoms, setRandoms] = useState([]);
  const [a, setA] = useState();
  const [b, setB] = useState();
  useEffect(() => {
    const s = () => {
      // if (document) {
      return document.body.getBoundingClientRect();
      // }
    };
    setA(s().top);
    setB(s().left);
    if (items?.length > 0) {
      setRandoms(
        items?.map((item) => [
          Number(randomness) * Math.random(),
          Number(randomness) * Math.random(),
        ]),
      );
    }
    console.log('red', ref1.current.clientWidth);
  }, [items]);
  const parentRef = useRef();
  const elemRect = parentRef.current?.getBoundingClientRect();
  const offsetTop = elemRect?.top - a;
  const offsetLeft = elemRect?.left - b;

  return (
    <div
      className="relative overflow-hidden w-full "
      ref={parentRef}
      style={{ width, height, ...style, userSelect: 'none', cursor: 'pointer' }}
      onMouseMove={(e) => {
        manageMouseMove(e);
      }}
      //   (event) => {
      //     setCoords({
      //       x: event.clientX - offsetLeft,
      //       y: event.clientY - offsetTop,
      //     });
      //   }
      // }
      // onMouseLeave={() => setIsDynamic(false)}
      // onMouseEnter={() => setIsDynamic(true)}
    >
      <div
        // onMouseDown={onMouseDown}
        // onMouseUp={onMouseUp}
        // onMouseLeave={onMouseUp}
        // onMouseMove={dragging ? onMouseMove : null}
        // style={myStyle}
        className="w-full h-full absolute "
        ref={ref1}
      >
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2 flex justify-center items-center"
          style={{
            // backgroundColor: 'red',
            width: logoWidth + '%',
            height: logoHeight + '%',
            top: (isDynamic ? centerTop : 50) + '%',
            left: (isDynamic ? centerLeft : 50) + '%',
          }}
        >
          <Image
            src={'/images/KohanLogo.png'}
            style={{ height: 'auto' }}
            width={200}
            height={100}
            alt="logo"
          />
        </div>
        {items.map((item, i) => {
          const layerNo = getLayerNumber(i + 1);
          const itemNoInLayer = getItemNoInLayer(i + 1, layerNo);
          let [top, left] = getStaticAbsolutePosition(
            layerNo,
            itemNoInLayer,
            logoHeight,
            logoWidth,
            itemHeight,
            itemWidth,
            verticalGap,
            horizontalGap,
          );
          if (isDynamic)
            [top, left] = getDynamicAbsolutePosition(
              top,
              left,
              (100 * coords.y) / height,
              (100 * coords.x) / width,
              maxTop,
              maxLeft,
            );
          const randomX = randoms[i]?.length > 0 ? randoms[i][0] : 0;
          const randomY = randoms[i]?.length > 0 ? randoms[i][1] : 0;
          return (
            <div
              key={i}
              className="absolute -translate-x-1/2 -translate-y-1/2 flex justify-center items-center"
              style={{
                borderRadius: '25px',
                backgroundColor: 'blue',
                width: itemWidth + '%',
                height: itemHeight + '%',
                top: top + randomX + '%',
                left: left + randomY + '%',
                color: 'white',
                fontSize: '14',
              }}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};
