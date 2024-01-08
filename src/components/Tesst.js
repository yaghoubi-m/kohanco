'use client';

import React, {useRef, useState} from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import './styles.css';

// import required modules
import {FreeMode, Navigation, Thumbs} from 'swiper/modules';
import Image from "next/image";

export default function App({data,title}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
      <>
        <Swiper
            style={{
              '--swiper-navigation-color': '#fff',
              '--swiper-pagination-color': '#fff',
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
        >
          {data.map((img, index) => (
              <SwiperSlide key={index}>
                <Image width={200} height={100} src={img} alt={title}/>
              </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
        >
          {data.map((img, index) => (
              <SwiperSlide key={index}>
                <Image width={200} height={100} src={img} alt={title}/>
              </SwiperSlide>
          ))}
        </Swiper>
      </>
  );
}
