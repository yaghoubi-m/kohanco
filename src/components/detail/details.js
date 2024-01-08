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
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import {useState} from "react";
import Tesst from "@/components/Tesst";
import ReviewComment from "@/components/Projects/Review";
// import Image from 'next/image';
const images = ['/s1.png', '/s3.png', '/s1.png', '/s3.png', '/s1.png', '/s3.png'];
const Details = ({data}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);


  console.log(data)
  return (
    <section className={styles.container}>
      <div className={styles.md}>
        <h1>{data.Title}</h1>
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
          <div className="flex gap-5">
            <span className={styles.title}>کارفرما: </span>
            <span className={styles.desc}>{data.Title}</span>
          </div>
          <div className="flex gap-5">
            <span className={styles.title}>متریال: </span>
            <span className={styles.desc}>{data.ProjectDetail.MaterialDescription}</span>
          </div>
          <div className="flex gap-5">
            <span className={styles.title}>متراژ: </span>
            <span dir="ltr" className={styles.desc}>{data.ProjectDetail.Meterage}</span>
          </div>
          <div className="flex gap-5">
            <span className={styles.title}>محل اجرا: </span>
            <span className={styles.desc}>{data.ProjectDetail.OperationPlace}</span>
          </div>
          <div className="flex gap-5">
            <span className={styles.title}>سال اجرا: </span>
            <span className={styles.desc}>{data.ProjectDetail.OperationDate}</span>
          </div>
          <div className={styles.share}>
            <span>با دیگران به اشتراک بگذارید</span>
            <IoShareSocialOutline />
          </div>
          {/*<div className={styles.rate}>*/}
          {/*  <span>0 (0)</span>*/}
          {/*  <div className={styles.stars}>*/}
          {/*    <FaStar fill="#999" size="25" />*/}
          {/*    <FaStar fill="#999" size="25" />*/}
          {/*    <FaStar fill="#999" size="25" />*/}
          {/*    <FaStar fill="#999" size="25" />*/}
          {/*    <FaStar fill="#999" size="25" />*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
        <div className={styles.carousel_con}>
          <Tesst title={data.Title} data={JSON.parse(data.ProjectDetail.PicturesBaseUrl)} />
        </div>
      </div>
    </section>
  );
};

export default Details;
