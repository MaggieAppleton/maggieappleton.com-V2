import { motion } from "framer-motion";
import { GlobalStyle } from "../components/GlobalStyle";
import Layout from "../components/Layout";
import "./_app.css";

function MyApp({ Component, pageProps, router }) {
    return (
        <>
            <GlobalStyle />
            <Layout>
                <motion.div
                    key={router.route}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 2 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <Component {...pageProps} key={router.route} />
                </motion.div>
            </Layout>
        </>
    );
}

export default MyApp;
