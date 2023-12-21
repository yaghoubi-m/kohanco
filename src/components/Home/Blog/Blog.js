import styles from './Blog.module.css';

import s2 from '/public/images/s2.png';
import Image from 'next/image';
import {
  CarouselContext,
  CarouselProvider,
  DotGroup,
  Slide,
  Slider,
} from 'pure-react-carousel';
const Blog = () => {
  const arr = [1, 2, 3, 4];
  return (
    <section className={styles.container}>
      <h3>بلاگ</h3>
      <p>آخرین مقالات و اخبار</p>
      <div className={styles.blog_container}>
        <div className={styles.img_container}>
          <Image
            className={styles.img}
            width={200}
            height={200}
            src={s2}
            alt="blog image"
          />
          <p>نمایشگاه بین المللی تهران</p>
        </div>
        <div className={styles.img_container}>
          <Image
            className={styles.img}
            width={200}
            height={200}
            src={s2}
            alt="blog image"
          />
          <p>نمایشگاه بین المللی تهران</p>
        </div>
        <div className={styles.img_container}>
          <Image
            className={styles.img}
            width={200}
            height={200}
            src={s2}
            alt="blog image"
          />
          <p>نمایشگاه بین المللی تهران</p>
        </div>
      </div>
      <div className={styles.slider}>
        <CarouselProvider
          rientation="horizontal"
          naturalSlideWidth={1.5}
          naturalSlideHeight={1}
          totalSlides={arr.length}
        >
          <Slider>
            {arr.map((i) => (
              <Slide key={i}>
                <div className={styles.img_container}>
                  <Image
                    className={styles.img}
                    width={200}
                    height={200}
                    src={s2}
                    alt="blog image"
                  />
                  <p>نمایشگاه بین المللی تهران</p>
                </div>
              </Slide>
            ))}
          </Slider>
          <DotGroup className={styles.dot} style={{ width: '150px', height: '150px' }} />
        </CarouselProvider>
      </div>
      <button className={styles.btn}>مشاهده همه</button>
    </section>
  );
};

export default Blog;
