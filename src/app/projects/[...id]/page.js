import Details from "@/components/detail/details";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import Comments from "@/components/detail/comments/Comments";
import ReviewComment from "@/components/Projects/Review";

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


export default async function Page({params}) {

  const data = await fetchProject(params.id[0])
  console.log("data", data)
  return (
      <>
        <Details data={data}/>
        <Comments s='static !important' id={data.Id}/>
        <div className=" bg-white mx-auto w-full px-36 pb-36 ">
          <h1 className="text-7xl font-semibold mb-24">نظرات</h1>
          {
              data.ProjectDetail.Review.length > 0 && data.ProjectDetail.Review.map((review, index) => (
                  <ReviewComment
                      key={index}
                      username={review.FullName}
                      comment={review.EmailAddress}
                  />
              ))
          }
        </div>
      </>
  )
}

export async function generateStaticParams() {
  const projects = await fetch(`${process.env.BASEURL}/api/Project/CompleteProjectsList`).then((res) => res.json())
  return projects.map((item) => ({
    id: [`${item.Id}`, `${item.Title}`]
  }))
}
