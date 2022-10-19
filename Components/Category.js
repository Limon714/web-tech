import Image from "next/image";
import Link from "next/link";
import Author from "./Child/Author";
import fetcher from "../lib/fetcher";
import Spinner from "./Child/Spinner";
import Error from "./Child/Error";

const Category = () => {

   const { data, isLoading, isError } = fetcher("api/trending");

   if (isLoading) {
     return <Spinner />;
   }
   if (isError) {
     return <Error />;
   }

  return (
    <div>
      <section className="container mx-auto md:px-20 py-10">
        <h1 className="font-bold text-center text-4xl py-12">Category</h1>
        <div className="grid lg:grid-cols-2 gap-6">
          <div>
            <h1 className="font-bold text-left catt text-xl py-12">Business</h1>
            <div className="flex flex-col">
              {data[1] ? <Posts data={data[1]} /> : <></>}
              {data[2] ? <Posts data={data[2]} /> : <></>}
              {data[3] ? <Posts data={data[3]} /> : <></>}
            </div>
          </div>
          <div>
            <h1 className="font-bold text-left catt text-xl py-12">Travel</h1>
            <div className="flex flex-col">
              {data[4] ? <Posts data={data[4]} /> : <></>}
              {data[5] ? <Posts data={data[5]} /> : <></>}
              {data[2] ? <Posts data={data[2]} /> : <></>}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Category;

function Posts({data}) {
  const { id, title, category, published, img, author } = data;
  return (
    <div className="grid md:grid-cols-2 mobile">
      {/* Image */}

      <div className="image">
        <Link href ={`/posts/${id}`}><a>
            <Image src={img || "/"} className = "rounded" width={200} height={160} />
          </a></Link>
      </div>

      {/* Information */}
      <div className="info flex justify-left backto flex-col">
        <div className="category text-sm">
          <Link href ={`/posts/${id}`}><a className="text-orange-400 hover:text-orange-700 cat">
               {category || "Unknown"}
            </a></Link>
          <Link href ={`/posts/${id}`}><a> - {published || "Unknown"}</a></Link>
        </div>

        <div className="title">
          <Link href ={`/posts/${id}`}><a className="text-xl md:text-xl  font-bold text-gray-800 hover:text-gray-600">
              Welcome to visit this Blog Website.
            </a></Link>
        </div>
        
        {author ? <Author></Author> : <></>}
          </div>
          
    </div>
  );
}
