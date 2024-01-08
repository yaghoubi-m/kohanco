import Description from '@/components/Projects/descrption/Description';
import DraggableMap from "@/components/Projects/map/Map";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";


async function getProjects() {
  try {
    const res = await fetch(`${process.env.BASEURL}/api/Project/CompleteProjectsList`, {
      cache: 'force-cache',
      next: {revalidate: 60}
    })
    return res.json()
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
