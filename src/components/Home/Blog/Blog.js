'use client'

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
import Link from "next/link";

const Blog = ({blogs}) => {
  // console.log(blogs)
  const arr = [1, 2, 3, 4];
  return (
    <section className={styles.container}>
      <h3>بلاگ</h3>
      <p>آخرین مقالات و اخبار</p>
      <div className={styles.blog_container}>
          {blogs?.length > 0 && blogs.slice(0,3).reverse().map((blog,index)=>(
              <Link key={index} href={`/blogs/${blog.Id}`} className={styles.img_container}>
                  <Image
                      className={styles.img}
                      width={200}
                      height={200}
                      src={s2}
                      alt="blog image"
                  />
                  <p>{blog.Title}</p>
              </Link>
          ))}
      </div>
0      <div className={styles.slider}>
        <CarouselProvider
          rientation="horizontal"
          naturalSlideWidth={1.5}
          naturalSlideHeight={1}
          totalSlides={arr.length}
        >
          <Slider>
            {blogs?.map((i,inx) => (
              <Slide key={inx}>
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
        <Link href="/blogs">
            <button className={styles.btn}>مشاهده همه</button>
        </Link>
    </section>
  );
};

export default Blog;
