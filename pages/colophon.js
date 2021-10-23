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
                <p>
                    Everything starts as a reasonably unopinionated note (as
                    much as that's possible – I'm a cultural relativist at heart
                    and question the idea of pure, objective knowledge). Notes
                    begin as seedlings, grow into buddings, and finally reach an
                    evergreen stage. Some of them go on to become essays if I
                    feel I have a clear opinion on the topic. (could do a
                    graphic of the lifestage process. some notes grow into
                    essays, not all.)
                </p>
            </Layout>
        </>
    );
}
