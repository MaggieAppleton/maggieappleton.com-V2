import Layout from "../components/Layout";
import { Title1, Title2 } from "../components/Typography";
import Header from "../components/Header";

export default function Colophon() {
    return (
        <>
            <Header title="Colophon of Maggie Appleton" />
            <Layout>
                <header>
                    <Title1>Colophon</Title1>
                    <Title2>
                        A <i>colophon</i> is a nobby designer word for 'how this
                        site was made'
                    </Title2>
                </header>
                <p></p>
            </Layout>
        </>
    );
}
