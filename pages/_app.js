import { GlobalStyle } from "../components/GlobalStyle";
import { AnimatePresence } from "framer-motion";
import Layout from "../components/Layout";
import "./_app.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps, router }) {
    return (
        <>
            <GlobalStyle />
            <container>
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
