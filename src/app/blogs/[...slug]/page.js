import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import {notFound} from "next/navigation";
import Image from "next/image";
import Blog from "@/components/Home/Blog/Blog";
// import blog from "@/components/Home/Blog/Blog";
// import blog from "@/components/Home/Blog/Blog";
const fetchBlog = async (id) => {
  try {
    const res = await fetch(`${process.env.BASEURL}/api/Blog/GetBlogDetail?id=${id}`, {cache: 'force-cache'})
    return await res.json()
  } catch (e) {
    console.log("eee", e)
    return {Title: ''}
  }
}

export default async function Page({params}) {
  const blog = await fetchBlog(params.slug[0])
  if (!blog.Id) notFound()
  if (params.slug.length > 2) notFound()
  const img =blog.Picture?.slice(1,-1)

  return (
      <>
        <div className="relative w-full h-[80vh]">
          <div  className="w-full h-full object-cover relative">
            <Image src={img} fill alt={blog.Title} />
          </div>
          <div className="absolute flex justify-center items-center top-[70%] rounded-tl-[20px] h-[170px] bg-white w-[30%]">
            <h1 className="text-7xl text-center  uppercase">{blog.Title}</h1>
          </div>
        </div>
        <p className="text-3xl mt-52 p-[20px]">{blog.Body}</p>
        {blog.Headers.length > 0 && blog.Headers?.map((header,index)=> (
            <div key={index}>
              <h3 className="text-5xl uppercase  p-[20px]">{index +1}.{header.Title}</h3>
              <p className="text-4xl p-[20px]">{header.Content}</p>
            </div>
        ))}
        {/*<Blog />*/}
      </>
  )
}

export async function generateStaticParams() {
  const posts = await fetch(`${process.env.BASEURL}/api/Blog/GetAll`).then((res) => res.json())
  return posts.map((post) => ({
    slug: [`${post.Id}`,`${post.Title}`],
  }))
}
