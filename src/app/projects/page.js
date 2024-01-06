import Description from '@/components/Projects/descrption/Description';
import {MyApp} from "@/MyApp";
import DraggableMap from "@/components/Projects/map/Map";
import axios from "axios";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";


async function getProjects() {
  try {
    const res = await axios.get(`${process.env.BASEURL}/api/Project/CompleteProjectsList`)
    return res.data
  }catch (e){
    console.log(e)
  }
}

const Projects = async () => {
  const data = await getProjects()
  return (
      <>
        <Description/>
        <DraggableMap data={data} />
      </>
  );
};

export default Projects;
