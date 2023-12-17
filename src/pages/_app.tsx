import { type AppType } from "next/dist/shared/lib/utils";
import Footer from "~/components/footer";
import Navbar from "~/components/navbar";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Navbar></Navbar>
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  );
};

export default MyApp;
