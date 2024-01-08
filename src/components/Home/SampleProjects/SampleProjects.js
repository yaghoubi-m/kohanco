'use client';
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
import Link from "next/link";

const SampleProjects = ({images}) => {
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
          <CarouselProvider
            className={styles.carousel_con}
            orientation="vertical"
            naturalSlideWidth={1.5}
            naturalSlideHeight={1}
            totalSlides={images?.slice(0,5).length}
          >
            <div className={styles.all_dots}>
              {images?.slice(0,5).map((img, index) => (
                <Dot slide={index} key={index}>
                  <Image
                    // key={index}
                    src={img}
                    alt="images"
                    width={100}
                    height={100}
                    // priority={true}
                  />
                </Dot>
              ))}
            </div>
            <Slider className={styles.slider}>
              {images?.slice(0,5).map((img, index) => (
                <Slide key={index}>
                  <Image
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain'
                    }}
                    key={index}
                    src={img}
                    alt={index}
                    width={200}
                    height={200}
                    // priority={true}
                  />
                </Slide>
              ))}
            </Slider>
          </CarouselProvider>
        </div>
        <Link href="/projects" className={styles.btn}>مشاهده همه نمونه کارها</Link>
      </article>
    </section>
  );
};

export default SampleProjects;
