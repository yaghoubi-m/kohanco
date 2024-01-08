import Image from 'next/image';

import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.container}>
      {/* <div></div> */}
      <h1>درباره ما</h1>
      <p>غرفه‌های خود را برای بهتر دیده شدن به ما بسپارید</p>
      <div className={styles.img}>
        <Image src="/images/hero-about.jpeg" fill alt="hero" />
      </div>
    </section>
  );
};

export default Hero;
