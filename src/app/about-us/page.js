import Hero from '@/components/about/Hero/Hero';
import styles from './page.module.css';
import Content from '@/components/about/Content/Content';
import WhyUs from '@/components/about/WhyUs/WhyUs';
import Employ from '@/components/about/employ/employ';


const About = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <Content />
      <WhyUs />
      <Employ />
    </div>
  );
};

export default About;
