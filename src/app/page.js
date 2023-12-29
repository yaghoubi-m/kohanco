import AboutUs from '@/components/Home/AboutUs/AboutUS';
import Container from "@/components/360image/container";
import SampleProjects from '@/components/Home/SampleProjects/SampleProjects';
import AboutAbility from '@/components/Home/AboutAbility/AboutAbility';
// import Blog from '@/components/Home/Blog/Blog';
import Customers from '@/components/Home/customers/Customers';
import axios from "axios";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

const getCustomers = async () => {
    const response = await axios.get(`${process.env.BASEURL}/api/Home/GetEmployersLogo`)
    return JSON.parse(response.data)
}

const getSampleProject = async () => {
    const response = await axios.get(`${process.env.BASEURL}/api/Home/GetSampleProjectImg`)
    return JSON.parse(response.data)
}
export default async function Home() {
    const sampleProjectImages = await getSampleProject()
    const customersImages = await getCustomers()

    return (
    <>
      <AboutUs />
      <Container />
      <SampleProjects images={sampleProjectImages} />
      <Customers images={customersImages} />
      <AboutAbility />
      {/*<Blog />*/}
      {/* <NewsField /> */}
      {/* <Footer /> */}
    </>
  );
}
