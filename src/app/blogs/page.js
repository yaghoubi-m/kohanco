import axios from "axios";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import Link from "next/link";
import styles from "@/components/Home/Blog/Blog.module.css";
import Image from "next/image";

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
        <div className="mt-10 flex gap-4 justify-center flex-wrap">
          {data?.length > 0 && data.slice(0,3).reverse().map((blog,index)=>(
              <Link key={index} href={`/blogs/${blog.Id}`} className={`${styles.img_container2}`}>
                <Image
                    className={styles.img}
                    width={200}
                    height={200}
                    src={blog.ThumbPicture?.slice(1,-1)}
                    alt="blog image"
                />
                <p>{blog.Title}</p>
              </Link>
          ))}
        </div>
      </>
  );
};

export default Page;
