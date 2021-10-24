import Layout from "../components/Layout";
import {
    Title1,
    Title2,
    SmallTitle2,
    SmallCaps,
} from "../components/Typography";
import Header from "../components/Header";

export default function About() {
    return (
        <>
            <Header title="About Maggie Appleton" />
            <Layout>
                <header>
                    <SmallCaps>About</SmallCaps>
                    <Title1>Maggie Appleton</Title1>
                    <Title2>
                        UX designer, anthropologist, illustrator, and mediocre
                        developer
                    </Title2>
                </header>
                <p></p>
            </Layout>
        </>
    );
}
