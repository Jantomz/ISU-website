import { type AppType } from "next/dist/shared/lib/utils";
import Footer from "~/components/footer";
import Navbar from "~/components/navbar";
import Head from "next/head";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
        <title>CV In ML</title>
        <meta
          name="ISU project for ICS4U about Computer Vision in Machine Learning"
          content="Created by Jaden"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  );
};

export default MyApp;
