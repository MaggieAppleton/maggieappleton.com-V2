import { GlobalStyle } from "../components/GlobalStyle";
// import { AnimatePresence } from "framer-motion";
import "./_app.css";
import { DefaultSeo } from "next-seo";
import Navbar from "../components/Navbar/index.js";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <GlobalStyle />
      <container>
        <DefaultSeo
          title="Maggie Appleton's digital garden"
          description="Maggie's digital garden filled with visual essays on programming, design, and anthropology"
          openGraph={{
            type: "website",
            locale: "en_GB",
            url: "https://www.maggieappleton.com/",
            site_name: "Maggie Appleton",
          }}
          twitter={{
            handle: "@mappletons",
            cardType: "summary_large_image",
          }}
        />
        <Navbar />
        {/* <AnimatePresence
                    exitBeforeEnter
                    initial={false}
                    onExitComplete={() => window.scrollTo(0, 0)}
                > */}
        <Component {...pageProps} key={router.route} />
        {/* </AnimatePresence> */}
        <Footer />
      </container>
    </>
  );
}

export default MyApp;
