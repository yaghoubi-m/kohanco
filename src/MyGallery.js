import Image from 'next/image';
import {useEffect, useRef, useState} from 'react';
import ScrollContainer from "react-indiana-drag-scroll";

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

const getDynamicAbsolutePosition = (top, left, mouseTop, mouseLeft, maxTop, maxLeft, minLeft, minTop) => {
  let dynamicLeft, dynamicTop;

  if (maxLeft < 100) dynamicLeft = left;
  else dynamicLeft = minLeft + left - (mouseLeft - 50) * ((maxLeft - 50) / 50);

  if (maxTop < 100) dynamicTop = top;
  else dynamicTop = minTop + top - (mouseTop - 50) * ((maxTop - 50) / 50);

  return [dynamicTop, dynamicLeft];
};

export const MyGallery = ({
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
  const [coords, setCoords] = useState({x: 0, y: 0});
  const [isDynamic, setIsDynamic] = useState(true);
  const totalNoOfLayers = getTotalNoOfLayers(items?.length);
  const maxLeft = totalNoOfLayers * (itemWidth + horizontalGap) + 50;
  const maxTop = totalNoOfLayers * (itemHeight + verticalGap) + 50;
  // const minLeft =0* Math.abs(50 - totalNoOfLayers * (itemWidth + horizontalGap));
  // const minTop =0* Math.abs(50 - totalNoOfLayers * (itemHeight + verticalGap)) ;

  // IN BOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOD
  const minLeft = -40
  const minTop = -30
  // TA INJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA

  const [centerTop, centerLeft] = getDynamicAbsolutePosition(
      50,
      50,
      (100 * coords.y) / height,
      (100 * coords.x) / width,
      maxTop,
      maxLeft,
      minLeft,
      minTop
  );
  console.log(minTop)
  console.log(minLeft)
  // var bodyRect = document.body.getBoundingClientRect();
  const parentRef = useRef();
  const elemRect = parentRef.current?.getBoundingClientRect();
  const offsetTop = elemRect?.top;
  const offsetLeft = elemRect?.left;

  //   console.log('bodyRect.top', bodyRect.top);
  //   console.log('elemRect?.top', elemRect?.top);
  //   console.log('offsetTop', offsetTop);

  const [randoms, setRandoms] = useState([]);
const imgref = useRef()
  const scrollableDivRef = useRef()

  useEffect(() => {
  //   const elemRect = imgref.current?.getBoundingClientRect();
  //   const h =scrollableDivRef.current?.clientHeight
  //   const w =scrollableDivRef.current?.clientWidth
  //   const top = elemRect?.top+0.2*h;
  //   const left = elemRect?.left+0.2*w;
  //   console.log('top',top)
  //   console.log('left',left)
  // scrollableDivRef.current?.scrollTo({
  //   top, left
  // })
  //   imgref.current.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"})
    if (items?.length > 0) {
      setRandoms(
          items?.map((item) => [
            Number(randomness) * Math.random(),
            Number(randomness) * Math.random(),
          ]),
      );
    }
  }, [items]);
  const elemRect2 = imgref.current?.getBoundingClientRect();
  let h =scrollableDivRef.current?.clientHeight
  let w =scrollableDivRef.current?.clientWidth
  let top = (isDynamic ? centerTop-50 : 50) *h/100;
  // const top = 7*maxTop-h/80;
  let left = (isDynamic ? centerLeft-50 : 50) *w/100;
  // const left = 6*maxLeft+w/2;
// useEffect(()=>{
  setTimeout(()=>{
    console.log('top',top)
    console.log('centerTop',centerTop)
    scrollableDivRef.current?.scrollTo({
      top, left
    })

  },500)

// },[])

  return (
      <
          // className="select-none inner-div"
          // ref={parentRef}
          // style={{ width, height, ...style }}
          // onMouseMove={(event) => {
          //
          //   setCoords({
          //     x: event.clientX - offsetLeft,
          //     y: event.clientY - offsetTop,
          //   });
          // }}
          // onMouseLeave={() => setIsDynamic(false)}
          // onMouseEnter={() => setIsDynamic(true)}
      >
        <ScrollContainer
            ref={scrollableDivRef}
            mouseScroll={true}
            // style={{ width, height }}
            style={{
                height:'100%'
            }}
            // overscroll={true}
            // rubberBand={false}
            // inertia={false}
            // cursor={false}
            // // ref={containerRef}
            className="container relative"
            // // vertical={true}
            // // horizontal={true}
        >
          <div
              className="absolute -translate-x-1/2 -translate-y-1/2 flex justify-center items-center"
              style={{
                //   backgroundColor: 'red',
                width: logoWidth + '%',
                height: logoHeight + '%',
                top: (isDynamic ? centerTop : 50) + '%',
                left: (isDynamic ? centerLeft : 50) + '%',
                transition: 'all 0.1s linear',
              }}

          >
            <Image
                ref={imgref}
                style={{height: 'auto'}}
                src={'/images/KohanLogo.png'}
                width={200}
                height={300}
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
                  minLeft,
                  minTop
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
                      transition: 'all 0.1s linear',
                      fontSize: '14',
                    }}
                >
                  {item}
                </div>
            );
          })}
        </ScrollContainer>
      </>
  );
};
