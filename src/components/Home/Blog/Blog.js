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
  console.log(blogs)
  const arr = [1, 2, 3, 4];
  return (
      <section className={styles.container}>
        <h3>بلاگ</h3>
        <p>آخرین مقالات و اخبار</p>
        <div className={styles.blog_container}>
          {blogs?.length > 0 && blogs.slice(0, 3).reverse().map((blog, index) => (
              <Link key={index} href={`/blogs/${blog.Id}/${blog.Title}`} className={styles.img_container}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <div className={styles.img}>
                  <Image
                      fill
                      src={blog.ThumbPicture?.slice(1, -1)}
                      alt="blog image"
                  />
                </div>

                <p>{blog.Title}</p>
              </Link>
          ))}
        </div>
        <div className={styles.slider}>
          <CarouselProvider
              className="ltr:ml-2"
              rientation="horizontal"
              naturalSlideWidth={1.5}
              naturalSlideHeight={1}
              totalSlides={3}
          >
            <Slider>
              {blogs?.slice(0,3).map((i, inx) => (
                  <Slide key={inx}>
                    <div className={styles.img_container}>
                      <div  className={styles.img}>
                        <Image
                            fill
                            src={i.ThumbPicture?.slice(1, -1)}
                            alt="blog image"
                        />
                      </div>
                      <p>{i.Title}</p>
                    </div>
                  </Slide>
              ))}
            </Slider>
            <DotGroup className={styles.dot} style={{width: '150px', height: '150px'}}/>
          </CarouselProvider>
        </div>
        <Link href="/blogs">
          <button className={styles.btn}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            مشاهده همه
          </button>
        </Link>
      </section>
  );
};

export default Blog;
