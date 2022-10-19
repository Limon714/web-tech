import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Head from 'next/head'
const Format = ({children}) => {
    return (
        <>
            <Head>
                <title>Blog</title>
            </Head>
        <Header />
            <main>{children}</main>
        <Footer />
      </>
    );
};

export default Format;
