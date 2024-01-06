import Details from "@/components/detail/details";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import Comments from "@/components/detail/comments/Comments";

const fetchProject = async (id) => {
  try {
    console.log('id', id)
    const res = await fetch(`${process.env.BASEURL}/api/Project/ProjectDetail?id=${id}`, {cache: 'force-cache'})
    return await res.json()
  } catch (e) {
    console.log("eee", e)
    return {Title: ''}
  }
}


export default async function Page({params}){

  const data = await fetchProject(params.id)

  return (
      <>
        <Details data={data} />
        <Comments s='static !important' />
      </>
  )
}

export async function generateStaticParams() {
  const projects = await fetch(`${process.env.BASEURL}/api/Project/CompleteProjectsList`).then((res) => res.json())
  return projects.map((item) => ({
    id: item.Id.toString()
  }))
}
