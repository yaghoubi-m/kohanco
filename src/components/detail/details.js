'use client';
import styles from './detail.module.css';
import { IoShareSocialOutline } from 'react-icons/io5';
import 'pure-react-carousel/dist/react-carousel.es.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaStar } from 'react-icons/fa';
import {
  CarouselProvider,
  Dot,
  Slide,
  Slider,
  Image,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from 'pure-react-carousel';
import NewsField from '../Home/newsfield/NewsField';
// import Image from 'next/image';
const images = ['/s1.png', '/s3.png', '/s1.png', '/s3.png', '/s1.png', '/s3.png'];
const Details = () => {
  return (
    <section className={styles.container}>
      <div className={styles.md}>
        <h1>غرفه سازی شرکت کراپ در نمایشگاه بین المللی تهران</h1>
        <div className={styles.rate2}>
          <span>0 (0)</span>
          <div className={styles.stars}>
            <FaStar fill="#999" size="25" />
            <FaStar fill="#999" size="25" />
            <FaStar fill="#999" size="25" />
            <FaStar fill="#999" size="25" />
            <FaStar fill="#999" size="25" />
          </div>
        </div>
      </div>
      <div className={styles.pc}>
        <div className={styles.dc}>
          <div>
            <span className={styles.title}>کارفرما: </span>
            <span className={styles.desc}>ک</span>
          </div>
          <div>
            <span className={styles.title}>متریال: </span>
            <span className={styles.desc}>ک</span>
          </div>
          <div>
            <span className={styles.title}>متراژ: </span>
            <span className={styles.desc}>ک</span>
          </div>
          <div>
            <span className={styles.title}>محل اجرا: </span>
            <span className={styles.desc}>ک</span>
          </div>
          <div>
            <span className={styles.title}>سال اجرا: </span>
            <span className={styles.desc}>ک</span>
          </div>
          <div className={styles.share}>
            <span>با دیگران به اشتراک بگذارید</span>
            <IoShareSocialOutline />
          </div>
          <div className={styles.rate}>
            <span>0 (0)</span>
            <div className={styles.stars}>
              <FaStar fill="#999" size="25" />
              <FaStar fill="#999" size="25" />
              <FaStar fill="#999" size="25" />
              <FaStar fill="#999" size="25" />
              <FaStar fill="#999" size="25" />
            </div>
          </div>
        </div>
        <div className={styles.carousel_con}>
          <CarouselProvider
            // orientation=""
            infinite
            naturalSlideWidth={1.5}
            naturalSlideHeight={1}
            totalSlides={images.length}
          >
            <Slider
            //    className={styles.slider}
            >
              {images.map((img, index) => (
                <Slide key={index}>
                  <Image
                    key={index}
                    src={img}
                    alt={`${index}`}
                    width={650}
                    height={650}
                    priority={index === 0}
                  />
                </Slide>
              ))}
            </Slider>
            <div className={styles.all_dots}>
              <ButtonNext className={styles.btn}>{'<'}</ButtonNext>
              <div className={styles.dot_container}>
                {images.map((img, index) => (
                  <Dot slide={index} key={index}>
                    <Image
                      // key={index}
                      src={img}
                      alt={`${index}`}
                      width={650}
                      height={650}
                      priority={index === 0}
                    />
                  </Dot>
                ))}
              </div>
              <ButtonBack className={styles.btn}>{'>'}</ButtonBack>
            </div>
            <DotGroup className={styles.dotscon} />
          </CarouselProvider>
        </div>
      </div>
    </section>
  );
};

export default Details;
