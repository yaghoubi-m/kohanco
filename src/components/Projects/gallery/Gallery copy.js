'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import styles from './Gallery.module.css';

const Gallery = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  let rqanimfrID = null;

  let xforce = 0;
  let yforce = 0;
  const easing = 0.08;
  const speed = 0.01;

  const manageMouseMove = (e) => {
    const { movementX, movementY } = e;
    xforce += movementX * speed;
    yforce += movementY * speed;
    if (!rqanimfrID) {
      rqanimfrID = requestAnimationFrame(animate);
    }
  };

  const lerp = (start, target, amount) => start * (1 - amount) + target * amount;

  const animate = () => {
    xforce = lerp(xforce, 0, easing);
    yforce = lerp(yforce, 0, easing);
    console.log(xforce);

    gsap.set(ref1.current, { x: `-=${xforce}`, y: `-=${yforce}` });
    if (Math.abs(xforce) < 0.01) xforce = 0;
    if (Math.abs(yforce) < 0.01) yforce = 0;

    if (xforce != 0 || yforce != 0) {
      requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(rqanimfrID);
      rqanimfrID = null;
    }
  };
  const list = [0, 1, 2, 3, 4, 5];
  const top = (i) => {
    if (i <= 8) {
      if (i <= 2) {
        return 'calc(50% + -11% + -15% - 2%)';
      }
      if (i > 2 && i <= 5) {
        return 'clac(50%)';
      }
      if (i > 5 && i <= 8) {
        return 'calc(50% + +11% + +15% + -2%)';
      }
    }
  };

  const left = (i) => {
    if (i <= 8) {
      if (i <= 2) {
        return 'calc(50% + -11% + -15% - 2%)';
      }
      if (i > 2 && i <= 5) {
        return 'clac(50%)';
      }
      if (i > 5 && i <= 8) {
        return 'calc(50% + +11% + +15% + -2%)';
      }
    }
  };

  return (
    <section
      onMouseMove={(e) => {
        manageMouseMove(e);
      }}
      className={styles.container}
    >
      <div ref={ref1} className={styles.project_container}>
        <div
          style={{
            backgroundColor: 'black',
            width: '150px',
            height: '150px',
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%,-50%)',
          }}
        ></div>
        {list.map((item, index) => (
          <>
            <div
              key={index}
              style={{
                top: top(index),
                left: `calc(50%)`,
                transform: 'translate(-50%,-50%)',
              }}
              className={styles.project}
            ></div>
          </>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
