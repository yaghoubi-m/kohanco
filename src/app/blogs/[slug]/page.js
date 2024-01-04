import axios from "axios";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import blog from "@/components/Home/Blog/Blog";
import {notFound} from "next/navigation";
// import blog from "@/components/Home/Blog/Blog";
// import blog from "@/components/Home/Blog/Blog";
const fetchBlog = async (id) => {
  try {
    console.log('id', id)
    const res = await fetch(`${process.env.BASEURL}/api/Blog/GetBlogDetail?id=${id}`, {cache: 'force-cache'})
    const data = await res.json()
    return data.Content
  } catch (e) {
    console.log("eee", e)
    return {Title: ''}
  }
}

export default async function Page({params}) {
  const blog = await fetchBlog(params.slug)
  // if (!blog.Id) notFound()
  console.log('blog: ', blog)
  console.log('params: ', params)

  return (
      <div>
        <h1 className="text-7xl text-center mt-10">{blog.Title}</h1>
        <p className="text-5xl text-center mt-10">{blog.Body}</p>
      </div>
  )
}


export async function generateStaticParams() {
  const posts = await fetch(`${process.env.BASEURL}/api/Blog/GetAll`).then((res) => res.json())
  console.log(posts)
  return posts.map((post) => ({
    slug: post.Id.toString(),
    props: {
      Id: post
    }
  }))
}

// export async function generateStaticParams() {
//   const response = await fetch(`${process.env.BASEURL}/api/Blog/GetAll`)
//   const data = await response.json()
//   console.log(data)
//   return data.map(blog => ({
//     slug: blog.Title.toString()
//   }))
// }
