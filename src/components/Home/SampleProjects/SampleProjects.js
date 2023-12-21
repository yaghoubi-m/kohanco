'use client';
// import Image from 'next/image';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
  Image,
  Dot,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import styles from './SampleProjects.module.css';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
// import React from 'react';
// import { images } from '../../../../next.config';

// import s1 from '../../../assets/images/s1.png';
// import s2 from '../../../assets/images/s3.png';
const images = [
  '/images/s1.png',
  '/images/s3.png',
  '/images/s1.png',
  '/images/s3.png',
];

const SampleProjects = () => {
  return (
    <section>
      <article className={styles.sp_container}>
        <h3>نمونه کارهای سفارشی ما</h3>
        <p>
          آیا قصد دارید فضای داخلی غرفه خود را بسازید؟ نگران نباشید زیرا ما رویاهای شما را
          با بهترین طراحان داخلی خود می بافیم تا زندگی مجللی برای شما ایجاد کنیم. با
          پتانسیل کامل خود، ما اینجا هستیم تا نیازهای شما را برآورده کنیم و آپارتمان جدید
          شما را کاملاً بدون دردسر بازسازی کنیم. بیایید دست به دست هم دهیم تا این سفر
          خاطره انگیز شود.
        </p>
        <div className={styles.carousel}>
          {/* <Carousel
            showStatus={false}
            showThumbs={true}
            autoPlay={false}
            // thumbWidth={400}
            className={styles.carousel_con}
            axis="vertical"
            swipeable={true}
            infiniteLoop={true}
            renderThumbs={() => {
              return images.map((img, index) => (
                <Image key={index} width={50} height={50} src={img} alt="logo" />
              ));
            }}
          >
            {images.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`${index}`}
                width={650}
                height={650}
                priority={index === 0}
              />
            ))}
          </Carousel> */}
          <CarouselProvider
            className={styles.carousel_con}
            orientation="vertical"
            naturalSlideWidth={1.5}
            naturalSlideHeight={1}
            totalSlides={images.length}
          >
            <div className={styles.all_dots}>
              {images.map((img, index) => (
                <Dot slide={index} key={index}>
                  <Image
                    // key={index}
                    src={img}
                    alt={`${index}`}
                    width={650}
                    height={650}
                    // priority={true}
                  />
                </Dot>
              ))}
            </div>
            <Slider className={styles.slider}>
              {images.map((img, index) => (
                <Slide key={index}>
                  <Image
                    key={index}
                    src={img}
                    alt={`${index}`}
                    width={650}
                    height={650}
                    // priority={true}
                  />
                </Slide>
              ))}
            </Slider>
          </CarouselProvider>
        </div>
        <button className={styles.btn}>مشاهده همه نمونه کارها</button>
      </article>
    </section>
  );
};

export default SampleProjects;
