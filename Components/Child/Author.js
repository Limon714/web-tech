import Image from "next/image"
import Link from "next/link"
const Author = () => {
  return (
    <div className="author flex py-5">
          <Image src={"/images/author/author1.jpg"}
              className="rounded-full" width={60} height={60} />
          <div className="flex flex-col justify-center px-4">
              <Link href={"/"}><a className="text-gray-700 font-bold text-md hover:text-gray-500">Author</a></Link>
             <span className="text-sm text-gray-500">Full Stack Developer</span>
          </div>
    </div>
  )
}

export default Author
