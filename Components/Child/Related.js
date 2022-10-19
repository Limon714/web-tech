import Link from "next/link";
import Image from "next/image";
import Author from "./Author";

import fetcher from "../../lib/fetcher";
import Spinner from "./Spinner";
import Error from "./Error";
const Related = () => {

    const { data, isLoading, isError } = fetcher("api/posts");

    if (isLoading) {
      return <Spinner />;
    }
    if (isError) {
      return <Error />;
    }

  return (
    <>
      <section>
        <div className="pt-10">
          <h1 className="font-bold text-left text-2xl py-8">Related</h1>
          <div className="flex flex-col gap-5">
            {
              data.map((value, index) => (
              <Posts data={value} key={index} />
            ))
            }
          </div>
        </div>
      </section>
    </>
  );
}

export default Related

function Posts({data}) {
  const { id, title, category, description, published, img, author } = data;
  return (
    <div className="grid md:grid-cols-2 ">
      {/* Image */}

      <div className="image">
        <Link href={`/posts/${id}`}><a>
            <Image
              src={img || "/"}
              className="rounded"
              width={200}
              height={160}
            />
          </a></Link>
      </div>

      {/* Information */}
      <div className="info flex justify-left backtoo flex-col">
        <div className="category text-sm">
          <Link href={`/posts/${id}`}><a className="text-orange-400 hover:text-orange-700">
              {category || "Unknown"}
            </a></Link>
          <Link href={`/posts/${id}`}><a> -{published || "Unknown"}</a></Link>
        </div>

        <div className="title">
          <Link href={`/posts/${id}`}><a className="text-xl md:text-xl font-bold text-gray-800 hover:text-gray-600">
              {title || "title"}
            </a></Link>
        </div>

        {author ? <Author></Author> : <></>}
      </div>
    </div>
  );
}