import { motion } from "framer-motion";
import { GlobalStyle } from "../components/GlobalStyle";
import Layout from "../components/Layout";
import "./_app.css";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps, router }) {
    return (
        <>
            <GlobalStyle />
            <container>
                <Navbar />
                <motion.div
                    key={router.route}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <Component {...pageProps} key={router.route} />
                </motion.div>
            </container>
        </>
    );
}

export default MyApp;
