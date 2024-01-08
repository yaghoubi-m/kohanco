// import Image from 'next/image';
'use client';
import styles from './employ.module.css';
import 'pure-react-carousel/dist/react-carousel.es.css';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import {
  CarouselProvider,
  DotGroup,
  Slide,
  Image as Img,
  Slider,
} from 'pure-react-carousel';
const arr = [1, 2, 3, 4, 5];
const Employ = () => {
  return (
    <>
      <div className={styles.carousel}>
        <CarouselProvider
          // playDirection="backward"
          naturalSlideHeight={1}
          naturalSlideWidth={1}
          totalSlides={arr.length}
        >
          <Slider>
            {arr.map((i) => (
              <Slide key={i}>
                <div className={styles.containers}>
                  <div className={styles.cimg}>
                    <Img src={'/images/person.jpeg'} fill alt="preson" />
                  </div>
                  <div className={styles.mask}></div>
                  <div className={styles.details}>
                    <p>آقای حمید نوریانی</p>
                    <p>مدیر امور نمایشگاه‌ها</p>
                  </div>
                </div>
              </Slide>
            ))}
          </Slider>
          <DotGroup className={styles.dotscon} />
        </CarouselProvider>
      </div>
      <section className={styles.container}>
        <div className={styles.containers}>
          <div className={styles.img}>
            <Image src={'/images/person.jpeg'} fill alt="preson" />
            <div className={styles.mask}></div>
            <div className={styles.details}>
              <p>آقای حمید نوریانی</p>
              <p>مدیر امور نمایشگاه‌ها</p>
          </div>

          </div>
        </div>
        <div className={styles.containers}>
          <div className={styles.img}>
            <Image src={'/images/person.jpeg'} fill alt="preson" />
            <div className={styles.mask}></div>
            <div className={styles.details}>
              <p>آقای حمید نوریانی</p>
              <p>مدیر امور نمایشگاه‌ها</p>
          </div>

          </div>
        </div>
        <div className={styles.containers}>
          <div className={styles.img}>
            <Image src={'/images/person.jpeg'} fill alt="preson" />
            <div className={styles.mask}></div>
            <div className={styles.details}>
              <p>آقای حمید نوریانی</p>
              <p>مدیر امور نمایشگاه‌ها</p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Employ;
