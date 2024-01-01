'use client'

import styles from './AboutAbility.module.css';
import { Icon1, Icon2, Icon3, Icon4 } from './icons/icons';
import { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider, Dot, DotGroup,
  Slide,
  Slider,
} from 'pure-react-carousel';
const AboutAbility = () => {

  const [active, setActive] = useState([
    { id: 1, isActive: true, bgc: '#000', icon: <Icon2 color={`#000`} size={59} /> },
    { id: 2, isActive: false, bgc: '#fff', icon: <Icon1 color={`#000`} size={59} /> },
    { id: 3, isActive: false, bgc: '#feb000', icon: <Icon3 color={`#000`} size={59} /> },
    { id: 4, isActive: false, bgc: '#00feb5', icon: <Icon4 color={`#000`} size={59} /> },
  ]);

  const onActive = (id) => {
    setActive((p) =>
      active.map((i) => {
        if (id === i.id) {
          return { ...i, isActive: true };
        } else return { ...i, isActive: false };
      }),
    );
  };

  return (
    <section className={styles.bg}>
      <article className={styles.container}>
        <CarouselProvider
          orientation="horizontal"
          naturalSlideWidth={1}
          naturalSlideHeight={1}
          totalSlides={active.length}
        >
          <div className={styles.pc}>
            <div className={styles.slider}>
              <Slider className={`${styles.active}`}>
                {active.map((i) => (
                  <Slide key={i.id}>
                    <div className={`${styles.title}`}>
                      {i.icon}
                      <p>تیم اجرایی مجرب</p>
                    </div>
                  </Slide>
                ))}
              </Slider>
              <ButtonNext className={styles.bn}>
                <IoIosArrowForward />
              </ButtonNext>
              <ButtonBack className={styles.bb}>
                <IoIosArrowBack />
              </ButtonBack>
            </div>
          </div>

          <div className={styles.title_container}>
            {active.map((i,inx) => (
                <Dot slide={inx}  onClick={() => onActive(i.id)} key={inx} className={` ${styles.title} ${i.isActive ? styles.active : ''}` } >
                  {i.icon}
                  <p>تیم اجرایی مجرب</p>
                </Dot>
            ) )  }
          </div>

          <div className={styles.line}></div>
          <div>
            <Slider style={{height: '500px'}}>
              {active.map((i) => (
                <Slide key={i.id}>
                  <div style={{ background: i.bgc }} className={styles.content}></div>
                </Slide>
              ))}
            </Slider>
          </div>
        </CarouselProvider>
      </article>
    </section>
  );
};

export default AboutAbility;
