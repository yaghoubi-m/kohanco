'use client';
import styles from './Floating.module.scss'
import Image from 'next/image';
import {useRef} from "react";
import floating from "../../../public/images/KohanLogo.png"
import {gsap} from "gsap";

export default function Floating() {

  let value = 10;
  const lerp = (start, target, amount) => start * (1 - amount) +target * amount;

  value = lerp(value, 0, 0.1);
  let requestAnimationFrameId = null;

  let xForce = 0;

  let yForce = 0;

  const easing = 0.08;

  const speed = 0.01;



  const manageMouseMove = (e) => {

    const { movementX, movementY } = e

    xForce += movementX * speed;

    yForce += movementY * speed;



    if(requestAnimationFrameId == null){

      requestAnimationFrameId = requestAnimationFrame(animate);

    }

  }






  const animate = () => {

    xForce = lerp(xForce, 0, easing);

    yForce = lerp(yForce, 0, easing);

    gsap.set(plane1.current, {x: `+=${xForce}`, y: `+=${yForce}`})

    gsap.set(plane2.current, {x: `+=${xForce * 0.5}`, y: `+=${yForce * 0.5}`})

    gsap.set(plane3.current, {x: `+=${xForce * 0.25}`, y: `+=${yForce * 0.25}`})



    if(Math.abs(xForce) < 0.01) xForce = 0;

    if(Math.abs(yForce) < 0.01) yForce = 0;



    if(xForce != 0 || yForce != 0){

      requestAnimationFrame(animate);

    }

    else{

      cancelAnimationFrame(requestAnimationFrameId)

      requestAnimationFrameId = null;

    }

  }

  console.log(value)
//9
  const plane1 = useRef(null);

  const plane2 = useRef(null);

  const plane3 = useRef(null);




  return (


        <main onMouseMove={(e) => {manageMouseMove(e)}} className={styles.main}>

          <div ref={plane1} className={styles.plane}>

            <Image

                src={floating}

                alt='image'

                width={300}

            />

            <Image

                src={floating}

                alt='image'

                width={300}

            />

            <Image

                src={floating}

                alt='image'

                width={225}

            />

          </div>

          <div ref={plane2} className={styles.plane}>

            <Image

                src={floating}

                alt='image'

                width={250}

            />

            <Image

                src={floating}

                alt='image'

                width={200}

            />

            <Image

                src={floating}

                alt='image'

                width={225}

            />

          </div>

          <div ref={plane3} className={styles.plane}>

            <Image

                src={floating}

                alt='image'

                width={150}

            />

            <Image

                src={floating}

                alt='image'

                width={200}

            />

          </div>
      </main>

  )

}
