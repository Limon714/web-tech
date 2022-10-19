import Image from "next/image";
import Link from "next/link";
import Author from "./Child/Author";

import fetcher from "../lib/fetcher";
import Spinner from "./Child/Spinner";
import Error from "./Child/Error";

// Swiper

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper";

const Section3 = () => {

  const { data, isLoading, isError } = fetcher("api/popular");

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <Error />;
  }

    SwiperCore.use([Autoplay]);
    const bg = {
      background: "url('/images/banner.png') no-repeat",
      backgroundPosition: "right",
    };
  return (
    <>
      <section className="container mx-auto md:px-20 py-10">
        <h1 className="font-bold text-center text-4xl py-12">Popular Posts</h1>

        <Swiper
          loop={true}
          autoplay={{
            delay: 2000,
          }}
          breakpoints={{
            640: {
              slidesPerView:2,
              spaceBetween:30
            }
          }
          
          }
        >
          {
            data.map((value, index) => (
            <SwiperSlide key={index}><Posts data={value} /></SwiperSlide>
            ))
          }

        </Swiper>
        {/* Grid Column */}
      </section>
    </>
  );
};

export default Section3;
function Posts({data}) {
  const { id, title, category, description, published, img, author } = data;
  return (
    <div className="item">
      <div className="images">
        <Image
          src={img || "/"}
          className="rounded"
          width={500}
          height={300}
        />
      </div>
      <div className="info flex justify-center flex-col py-4">
        <div className="category">
          <Link href ={`/posts/${id}`}><a className="text-orange-400 hover:text-orange-700">
              {category || "Unknown"}
            </a></Link>
          <Link href ={`/posts/${id}`}><a> - {published || "Unknown"}</a></Link>
        </div>
        <div className="title">
          <Link href ={`/posts/${id}`}><a className="text-xl md:text-xl w-96 font-bold text-gray-800 hover:text-gray-600">
              You are most Welcome to visit this Blog Website.
            </a></Link>
        </div>
        <p className="text-gray-500 py-2 text-justify popular">
          {description || "Details Information"}
        </p>
        {author ? <Author></Author> :<></>}
      </div>
    </div>
  );
}

