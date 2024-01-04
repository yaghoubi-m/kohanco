import AboutUs from '@/components/Home/AboutUs/AboutUS';
import Container360Img from "@/components/360image/container360Img";
import SampleProjects from '@/components/Home/SampleProjects/SampleProjects';
import Customers from '@/components/Home/customers/Customers';
import AboutAbility from '@/components/Home/AboutAbility/AboutAbility';
import Blog from '@/components/Home/Blog/Blog';
import axios from "axios";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import Scroll from "@/components/Home/Scroll/Scroll";
import Floating from "@/components/Floating/Floating";

const getCustomers = async () => {
  const response = await axios.get(`${process.env.BASEURL}/api/Home/GetEmployersLogo`)
  return JSON.parse(response.data)
}

const getSampleProject = async () => {
  const response = await axios.get(`${process.env.BASEURL}/api/Home/GetSampleProjectImg`)
  return JSON.parse(response.data)
}

const getBlogs = async () => {
  try {
    const response = await axios.get(`${process.env.BASEURL}/api/Blog/GetAll`)
    return response.data
  } catch (e) {
    console.log(e)
    return []
  }
}

const get360 = async () => {
  try {
    const response = await axios.get(`${process.env.BASEURL}/api/Home/GetHeader360`)
    return response.data
  }catch (e) {
    console.log(e)
  }
}

export default async function Home() {
  const sampleProjectImages = await getSampleProject()
  const customersImages = await getCustomers()
  const blogs = await getBlogs()
  const image360 = await get360()

  // console.log("blogs",blogs)

  return (
      <>
        <AboutUs/>
        <Floating />
        <Container360Img img={image360}/>
        <SampleProjects images={sampleProjectImages}/>
        <Customers images={customersImages}/>
        <Scroll />
        <AboutAbility />
        <Blog blogs={blogs}/>
      </>
  );
}

