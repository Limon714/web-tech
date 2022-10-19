import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Autoplay } from 'swiper';

import Author from "../Components/Child/Author";
import Image from "next/image";
import Link from "next/link";

import fetcher from "../lib/fetcher";
import Spinner from "./Child/Spinner";
import Error from "./Child/Error";


export default function Section1() {
  
    const { data, isLoading, isError } = fetcher("api/trending");

    if (isLoading) {
      return <Spinner />;
    }
    if (isError) {
      return <Error />;
    }
  

  SwiperCore.use([Autoplay])
  const bg = {
    background: "url('/images/banner.png') no-repeat",
    backgroundPosition: "right"
  }
  return (
    <>
      <section className="py-16" style={bg}>
        <div className="container mx-auto md:px-20">
          <h1 className="font-bold text-4xl text-center pb-12">Trending</h1>

          <Swiper
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2000,
            }}
          >
            {
              data.map((value, index) => (
                <SwiperSlide key={index}><Slide data={value} /></SwiperSlide>
            ))
            }
          </Swiper>
        </div>
      </section>
    </>
  );
}

function Slide({data}) {
  const { id, title, category, published, img, author } = data;
    return (
      <>
        <div className="grid md:grid-cols-2">
          {/* Image */}

          <div className="image">
            <Link href={`/posts/${id}`}><a>
                <Image src={img || "/"} width={500} height={500} />
              </a></Link>
          </div>

          {/* Information */}
          <div className="info flex justify-center flex-col">
            <div className="category">
              <Link href={`/posts/${id}`}><a className="text-orange-400 hover:text-orange-700">
                 {category || "Unknown"}
                </a></Link>
              <Link href={`/posts/${id}`}><a> - {published || "Unknown"}</a></Link>
            </div>

            <div className="title">
              <Link href={`/posts/${id}`}><a className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">
                  You are most Welcome to visit this Blog Website.
                </a>
              </Link>
            </div>
            <p className="text-gray-500 py-4 text-justify">
              Next.js is an open-source web development framework created by
              Vercel enabling React-based web applications with server-side
              rendering and generating static websites. React documentation
              mentions Next.js among "Recommended Toolchains" advising it to
              developers as a solution when "Building a server-rendered website
              with Node.js".Where traditional React apps can only render their
              content in the client-side browser, Next.js extends this
              functionality to include applications rendered on the server-side.
            </p>
            {author ? <Author></Author> : <></>}
          </div>
        </div>
      </>
    );
}
