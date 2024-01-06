import Image from 'next/image';

import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.container}>
      {/* <div></div> */}
      <h1>درباره ما</h1>
      <p>غرفه‌های خود را برای بهتر دیده شدن به ما بسپارید</p>
      <Image src="/images/hero-about.jpeg" width={660} height={337} alt="hero" />
    </section>
  );
};

export default Hero;
