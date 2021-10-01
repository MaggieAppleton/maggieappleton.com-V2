import Layout from "../components/Layout";
import { Title1, Title2 } from "../components/Typography";
import Header from "../components/Header";

export default function About() {
    return (
        <>
            <Header title="About Maggie Appleton" />
            <Layout>
                <header>
                    <Title1>About</Title1>
                    <Title2>Good</Title2>
                </header>
            </Layout>
        </>
    );
}
