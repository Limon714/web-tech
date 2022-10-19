import {ImFacebook, ImYoutube} from 'react-icons/im'
import { GrInstagram } from "react-icons/gr";

import Link from "next/link";
import Newsletter from "../Components/Child/Newsletter";
const Footer = () => {
  const bg = {
    background:"url('/images/footer.png') no-repeat",
    backgroundPosition: "bottom-left"
  }
  return (
    <footer className="bg-gray-50" style={bg}>
      <Newsletter />
      <div className="container mx-auto flex justify-center py-12">
        <div className="py-5">
          <div className="flex gap-6 justify-center">
              <Link href={"/"}><a>< ImFacebook className='hover:text-blue-900 text-gray-500' /></a></Link>
              <Link href={"/"}><a>< GrInstagram className='hover:text-blue-900 text-gray-500'/></a></Link>
              <Link href={"/"}><a>< ImYoutube className='hover:text-red-600 text-gray-500'/></a></Link>
             
          </div>
          <p className='py-3 text-gray-500 copy'>Copyright &copy; 2022 All right reserved by Limon Islam</p>
          <p className='text-gray-500 text-center'>Terms & Condition</p>
        </div>
    </div>

    </footer>
  )
}

export default Footer
