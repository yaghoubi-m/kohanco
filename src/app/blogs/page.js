import axios from "axios";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import Link from "next/link";
import styles from "@/components/Home/Blog/Blog.module.css";
import Image from "next/image";

const fetchData = async () => {
  try {
    const response = await fetch(`${process.env.BASEURL}/api/Blog/GetAll`)
    return response.json()
  } catch (e) {
    console.log(e)
  }
}

const Page = async () => {
  const data = await fetchData()
  return (
      <>
        <div className="mt-10 flex gap-4 justify-center flex-wrap">
          {data?.length > 0 && data.slice(0, 3).reverse().map((blog, index) => (
              <Link key={index} href={`/blogs/${blog.Id}/${blog.Title}`} className={`${styles.img_container2}`}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <div className={styles.img}>
                  <Image
                      fill
                      src={blog.ThumbPicture?.slice(1, -1)}
                      alt="blog image"
                  />

                </div>
                <p>{blog.Title}</p>
              </Link>
          ))}
        </div>
      </>
  );
};

export default Page;
