import {ImGithub, ImLinkedin, ImYoutube} from 'react-icons/im' ;
import Link from 'next/link';
const Header = () => {
  return (
    <>
      <header className="bg-gray-50">
        <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
          <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
            <input type="text" placeholder="Search..."
              className='input-text' />
          </div>
          <div className="w-80 shrink sm:order-2">
             <Link href={"/"}>
              <a className='font-bold uppercase text-3xl'> Web Tech </a>
              </Link>
          </div>
          <div className="w-96 order-3 flex justify-center">
            <div className="flex gap-6">
              <Link href={"/"}><a>< ImGithub className='hover:text-slate-800 text-gray-500' /></a></Link>
              <Link href={"/"}><a>< ImLinkedin className='hover:text-sky-900 text-gray-500'/></a></Link>
              <Link href={"/"}><a>< ImYoutube className='hover:text-red-600 text-gray-500'/></a></Link>
             
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header
