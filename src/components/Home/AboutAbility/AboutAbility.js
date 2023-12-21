import Image from 'next/image';
import styles from './AboutAbility.module.css';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import img1 from '../../../assets/images/team.svg';
import { Icon1, Icon2, Icon3, Icon4 } from './icons/icons';
import { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
} from 'pure-react-carousel';
// import { Carousel } from 'react-responsive-carousel';
const AboutAbility = () => {
  const [active, setActive] = useState([
    { id: 1, isActive: true, bgc: '#000', icon: <Icon2 color={`#000`} size={59} /> },
    { id: 2, isActive: false, bgc: '#fff', icon: <Icon1 color={`#000`} size={59} /> },
    { id: 3, isActive: false, bgc: '#feb000', icon: <Icon3 color={`#000`} size={59} /> },
    { id: 4, isActive: false, bgc: '#00feb5', icon: <Icon4 color={`#000`} size={59} /> },
  ]);

  const onActive = (id) => {
    // console.log(active);
    // if (active[id - 1].isActive) return;
    setActive((p) =>
      active.map((i) => {
        if (id === i.id) {
          return { ...i, isActive: true };
        } else return { ...i, isActive: false };
      }),
    );
  };

  // console.log(active);
  return (
    <section className={styles.bg}>
      <article className={styles.container}>
        <div className={styles.title_container}>
          <div
            onClick={() => {
              const [{ id }] = active.filter((i) => i.isActive);
              // console.log(id);
              setActive(() => {
                if (id !== active.length) {
                  return active.map((i) => {
                    // console.log('sss', i);
                    if (id + 1 === i.id) {
                      return { ...i, isActive: !i.isActive };
                    } else if (i.isActive) {
                      return { ...i, isActive: !i.isActive };
                    } else return i;
                  });
                } else {
                  return active.map((i) => {
                    if (i.id === 1) {
                      return { ...i, isActive: !i.isActive };
                    } else if (i.isActive) {
                      return { ...i, isActive: !i.isActive };
                    } else return i;
                  });
                }
              });
            }}
            className={styles.arrow}
          >
            <IoIosArrowForward />
          </div>
          <div
            className={`${styles.title} ${active[0].isActive ? styles.active : 'none'}`}
            onClick={() => onActive(1)}
          >
            {/* <Image src={img1} width={50} height={50} alt="team" /> */}
            <Icon2 color={`#000`} size={59} />
            <p>تیم اجرایی مجرب</p>
          </div>
          <div
            className={`${styles.title} ${active[1].isActive && styles.active}`}
            onClick={() => {
              onActive(2);
            }}
          >
            <Icon1 color={`#000`} size={59} />
            {/* <Image src={img1} width={50} height={50} alt="team" /> */}
            <p>تیم اجرایی مجرب</p>
          </div>
          <div
            className={`${styles.title} ${active[2].isActive && styles.active}`}
            onClick={() => {
              onActive(3);
            }}
          >
            <Icon3 color={'#000'} size={59} />
            {/* <Image src={img1} width={50} height={50} alt="team" /> */}
            <p>تیم اجرایی مجرب</p>
          </div>
          <div
            className={`${styles.title} ${active[3].isActive && styles.active}`}
            onClick={() => {
              onActive(4);
            }}
          >
            <Icon4 color={'#000'} size={59} />
            {/* <Image src={img1} width={50} height={50} alt="team" /> */}
            <p>تیم اجرایی مجرب</p>
          </div>
          <div
            onClick={() => {
              const [{ id }] = active.filter((i) => i.isActive);
              // console.log(id);
              setActive(() => {
                if (id === 1) {
                  return active.map((i) => {
                    if (i.id === 4) {
                      return { ...i, isActive: !i.isActive };
                    } else if (i.isActive) {
                      return { ...i, isActive: !i.isActive };
                    } else return i;
                  });
                } else if (id <= active.length) {
                  return active.map((i) => {
                    // console.log('sss', i);
                    if (id - 1 === i.id) {
                      return { ...i, isActive: !i.isActive };
                    } else if (i.isActive) {
                      return { ...i, isActive: !i.isActive };
                    } else return i;
                  });
                }
              });
            }}
            className={styles.arrow}
          >
            <IoIosArrowBack />
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.content}></div>
      </article>
      <article className={styles.s_con}>
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
                      {/* <Icon4 color={'#000'} size={59} /> */}
                      {i.icon}
                      {/* <Image src={img1} width={50} height={50} alt="team" /> */}
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
