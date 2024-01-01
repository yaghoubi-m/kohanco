import axios from "axios";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import blog from "@/components/Home/Blog/Blog";
import {notFound} from "next/navigation";
// import blog from "@/components/Home/Blog/Blog";
// import blog from "@/components/Home/Blog/Blog";
const fetchBlog = async (id) => {
    try {
        const res = await fetch(`${process.env.BASEURL}/api/Blog/GetBlogDetail/${id}`,{cache: 'force-cache'})
        // console.log('eeess',res)
        if(res.status !== 200) {
            return {Title: ''}
        }
        return await res.json()
    }catch (e){
        // console.log("eee",e)
        return {Title: ''}
    }
}

export default async function  Page({params}){
    const blog = await fetchBlog(params.slug)
    if(!blog.Title) notFound()
    console.log('params: ' , params)

    return <div style={{fontSize: '2rem'}}>{params.slug}</div>
}

export async function generateStaticParams (){
    const response = await fetch(`${process.env.BASEURL}/api/Blog/GetAll`)
    const data = await response.json()

    return data.map(blog => ({
        slug: blog.Title.toString()
    }))
}
