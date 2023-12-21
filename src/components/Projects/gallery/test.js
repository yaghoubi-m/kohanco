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
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  let rqanimfrID = null;

  let xforce = 0;
  let yforce = 0;
  const easing = 0.08;
  const speed = 0.05;

  const manageMouseMove = (e) => {
    const { movementX, movementY } = e;
    xforce += movementX * speed;
    yforce += movementY * speed;
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

  // var bodyRect = document.body.getBoundingClientRect();
  const parentRef = useRef();
  const elemRect = parentRef.current?.getBoundingClientRect();
  // const offsetTop = elemRect?.top - bodyRect.top;
  // const offsetLeft = elemRect?.left - bodyRect.left;

  const [randoms, setRandoms] = useState([]);

  useEffect(() => {
    if (items?.length > 0) {
      setRandoms(
        items?.map((item) => [
          Number(randomness) * Math.random(),
          Number(randomness) * Math.random(),
        ]),
      );
    }
  }, [items]);

  return (
    <div
      className="relative overflow-hidden"
      // ref={parentRef}
      style={{ width, height, ...style }}
      onMouseMove={(e) => {
        manageMouseMove(e);
      }}
      //   (event) => {
      //   setCoords({
      //     x: event.clientX - offsetLeft,
      //     y: event.clientY - offsetTop,
      //   });
      // }}
      // onMouseLeave={() => setIsDynamic(false)}
      // onMouseEnter={() => setIsDynamic(true)}
    >
      <div className="w-full h-full absolute" ref={ref1}>
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
          <Image src={'/images/KohanLogo.png'} width={200} height={100} alt="logo" />
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
