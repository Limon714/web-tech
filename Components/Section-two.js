import Image from "next/image";
import Link from "next/link";
import Author from "./Child/Author";
// import getPost from "../lib/helper"
import fetcher from "../lib/fetcher";
import Spinner from "./Child/Spinner";
import Error from "./Child/Error";

const Section2 = () => {

  const { data, isLoading, isError } = fetcher('api/posts');

  if(isLoading){
    return <Spinner />
  }
if(isError){
    return <Error />
  }

  return (
    <>
      <section className="container mx-auto md:px-20 py-10">
        <h1 className="font-bold text-center text-4xl py-12">Latest Posts</h1>

        {/* Grid Column */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
          {
            data.map((value, index) => (
            <Posts data={value} key= {index} />
            ))
          }
        </div>
      </section>
    </>
  );
};

export default Section2;

function Posts({ data }) {
  const {id,title, category, published, img, author } = data;
  return (
    <div className="item">
      <div className="images">
        <Link href={`/posts/${id}`}><a>
        <Image
          src={img || "/"}
          className="rounded"
          width={450}
          height={300}
        /></a></Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <div className="category">
          <Link href={`/posts/${id}`}><a className="text-orange-400 hover:text-orange-700">
              {category || "Unknown"}
            </a></Link>
          <Link href={`/posts/${id}`}><a>  {published || "Unknown"}</a></Link>
        </div>
        <div className="title">
          <Link href={`/posts/${id}`}><a className="text-xl md:text-xl font-bold text-gray-800 hover:text-gray-600">
               {title || "Title"}
            </a></Link>
        </div>
        <p className="text-gray-500 py-2 text-justify">
          Next.js is an open-source web development framework created by Vercel
          enabling React-based web applications with server-side rendering and
          generating static websites. React documentation mentions Next.js among
          "Recommended Toolchains" advising it to developers as a solution when
          "Building a server-rendered website with Node.js"
        </p>
         {author ? <Author></Author> :<></>}
      </div>
    </div>
  );
}
