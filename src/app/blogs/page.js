import axios from "axios";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import Link from "next/link";

const fetchData = async () => {
  try {
    const response = await axios.get(`${process.env.BASEURL}/api/Blog/GetAll`)
    return response.data
  } catch (e) {
    console.log(e)
  }
}

const Page = async () => {
  const data = await fetchData()
  return (
    <>
      <div className="flex justify-center w-[600px] mx-auto mt-10 gap-[20px]">
        {data?.map((blog)=>(
            <Link href={`/blogs/${blog.Id}`} className="w-full h-[200px] text-zinc-50 text-[20px] bg-blue-700 flex justify-center items-center" key={blog.Id}>
              <div>{blog.Title}</div>
            </Link>
        ))}
      </div>
    </>
  );
};

export default Page;
