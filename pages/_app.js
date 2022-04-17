import { GlobalStyle } from "../components/GlobalStyle";
// import { AnimatePresence } from "framer-motion";
import "./_app.css";
import { DefaultSeo } from "next-seo";
import Navbar from "../components/Navbar/index.js";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps, router }) {
  // Don't include navbar and footer when generating open graph images
  if (router.pathname === "/og-image") {
    return (
      <>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    );
  }

  return (
    <>
      <GlobalStyle />
      <container>
        <DefaultSeo
          title="Harvey Qiu's digital garden"
          description="Harvey's digital garden"
          openGraph={{
            type: "website",
            locale: "en_GB",
            url: "https://garden.harveyqiu.xyz/",
            site_name: "Harvey Qiu",
          }}
        />
        <Navbar />
        <Component {...pageProps} key={router.route} />
        <Footer />
      </container>
    </>
  );
}

export default MyApp;
