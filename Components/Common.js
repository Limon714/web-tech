import Author from "../Components/Child/Author";
import Image from "next/image";
import Link from "next/link";
const Common = () => {
  return (
    <>
      <div className="grid md:grid-cols-2">
        {/* Image */}

        <div className="image">
          <Link href={"/"}>
            <a>
              <Image src={"/images/img1.jpg"} width={500} height={500} />
            </a>
          </Link>
        </div>

        {/* Information */}
        <div className="info flex justify-center flex-col">
          <div className="category">
            <Link href={"/"}>
              <a className="text-orange-400 hover:text-orange-700">
                Business, Travel
              </a>
            </Link>
            <Link href={"/"}>
              <a> -17 Oct, 2022</a>
            </Link>
          </div>

          <div className="title">
            <Link href={"/"}>
              <a className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">
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
          <Author />
        </div>
      </div>
    </>
  );
};

export default Common;

