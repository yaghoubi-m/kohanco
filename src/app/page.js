'use client';
import Image360Deg from '@/components/360image/360Image';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import AboutAbility from '@/components/Home/AboutAbility/AboutAbility';
import AboutUs from '@/components/Home/AboutUs/AboutUS';
import Blog from '@/components/Home/Blog/Blog';
import SampleProjects from '@/components/Home/SampleProjects/SampleProjects';
import Customers from '@/components/Home/customers/Customers';
import NewsField from '@/components/Home/newsfield/NewsField';

export default function Home() {
  return (
    <main>
      {/* <Header /> */}
      <AboutUs />
      <Image360Deg />
      <SampleProjects />
      <Customers />
      <AboutAbility />
      <Blog />
      {/* <NewsField /> */}
      {/* <Footer /> */}
    </main>
  );
}
