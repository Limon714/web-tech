import Format from "../../Layout/Format"
import Author from '../../Components/Child/Author'
import Image from "next/image";
import Related from "../../Components/Child/Related";
import getPost from "../../lib/helper";
import fetcher from "../../lib/fetcher";
import Spinner from "../../Components/Child/Spinner";
import Error from "../../Components/Child/Error";
import { useRouter } from 'next/router';

import { SWRConfig } from "swr";

const Page = ({fallback}) => {

  const route = useRouter();
  const { postId } = route.query;
  const { data, isLoading, isError } = fetcher(`api/posts/${postId}`);
  
  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <Error />;
  }

  return (
    <SWRConfig value={{fallback}}>
      <Article {...data} />
    </SWRConfig>
  )

}
  const Article = ({ description, title, img, author }) => {
  return (
    <>
      <Format>
        <section className="container mx-auto py-16 md:px-2 w-1/2">
          <div className="flex justify-center">
            {author ? <Author></Author> : <></>}
          </div>
          <div className="post py-10">
            <h1 className="font-bold text-4xl text-center pb-5">
              {title || "Title here"}
            </h1>
            <p className="text-gray-500 text-center">
              Next.js is an open-source web development framework created by
              Vercel enabling React-based web applications with server-side
              rendering and generating static websites. React documentation
              mentions Next.js among "Recommended Toolchains" advising it to
              developers as a solution.
            </p>
            <div className="py-6">
              <Image src={img || "/"} height={600} width={900} />
            </div>
            <div className="content text-gray-600 text-lg flex flex-col gap-3">
              {description || "Description here"}
            </div>
          </div>
          <Related />
        </section>
      </Format>
    </>
  );
};

export default Page 

export async function getStaticProps({params}) {
  const posts = await getPost(params.postId)
  return {
    props: {
      fallback: {
        '/api/posts': 'posts'
      }
    }
  }
}

export async function getStaticPaths() {
  const posts = await getPost()
  const paths = posts.map(value => {
     return {
       params: {
         postId: value.id.toString()
       }
     };
  })
  return {
    paths,
    fallback: false
 }
}

