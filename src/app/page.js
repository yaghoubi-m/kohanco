import AboutUs from '@/components/Home/AboutUs/AboutUS';
// import Container360Img from "@/components/360image/container360Img";
import SampleProjects from '@/components/Home/SampleProjects/SampleProjects';
import Customers from '@/components/Home/customers/Customers';
import AboutAbility from '@/components/Home/AboutAbility/AboutAbility';
import Blog from '@/components/Home/Blog/Blog';
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import Scroll from "@/components/Home/Scroll/Scroll";
import dynamic from "next/dynamic";
import blog from "@/components/Home/Blog/Blog";
//
const getCustomers = async () => {
  try {
    const response = await fetch(`${process.env.BASEURL}/api/Home/GetEmployersLogo`, {
      cache: 'force-cache',
      next: {revalidate: 3600}
    })
    return JSON.parse(await response.json())
  } catch (e) {
    console.log(e)
  }

}
//
const getSampleProject = async () => {
  try {
    const response = await fetch(`${process.env.BASEURL}/api/Home/GetSampleProjectImg`, {
      cache: 'force-cache',
      next: {revalidate: 3600}
    })
    return JSON.parse(await response.json())
  } catch (e) {
    console.log(e)
  }
}
//
const getBlogs = async () => {
  try {
    const response = await fetch(`${process.env.BASEURL}/api/Blog/GetAll`, {
      cache: 'force-cache',
      next: {revalidate: 3600}
    })
    return response.json()
  } catch (e) {
    console.log(e)
    return []
  }
}
//
const get360 = async () => {
  try {
    const response = await fetch(`${process.env.BASEURL}/api/Home/GetHeader360`, {
      cache: 'force-cache',
      next: {revalidate: 3600}
    })
    return await response.json()
  } catch (e) {
    console.log(e)
    return []
  }
}
const Container360Img = dynamic(() => import('../components/360image/container360Img'), {ssr: false})

export default async function Home() {
  const sampleProjectImages = await getSampleProject()
  const customersImages = await getCustomers()
  const blogs = await getBlogs()
  console.log("blogs", customersImages)
  const image360 = await get360()

  return (
      <>
        <AboutUs/>
        <Container360Img img={image360}/>
        <SampleProjects images={sampleProjectImages}/>
        <Customers images={customersImages}/>
        <Scroll/>
        <AboutAbility/>
        <Blog blogs={blogs}/>
      </>
  );
}

