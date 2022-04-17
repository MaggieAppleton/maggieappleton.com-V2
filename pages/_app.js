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
          description="Maggie's digital garden filled with visual essays on programming, design, and anthropology"
          openGraph={{
            type: "website",
            locale: "en_GB",
            url: "https://www.maggieappleton.com/",
            site_name: "Harvey Qiu",
          }}
          twitter={{
            handle: "@mappletons",
            cardType: "summary_large_image",
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
