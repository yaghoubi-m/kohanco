import Header from '@/components/Header/Header';
import Hero from '@/components/about/Hero/Hero';

import styles from './page.module.css';
import Content from '@/components/about/Content/Content';
import WhyUs from '@/components/about/WhyUs/WhyUs';
import Employ from '@/components/about/employ/employ';
import NewsField from '@/components/Home/newsfield/NewsField';
import Footer from '@/components/Footer/Footer';

const About = () => {
  return (
    <main className={styles.container}>
      {/* <Header /> */}
      <Hero />
      <Content />
      <WhyUs />
      <Employ />
      {/* <NewsField /> */}
      {/* <Footer /> */}
    </main>
  );
};

export default About;
