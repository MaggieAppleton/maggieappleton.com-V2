import Layout from "../components/Layout";
import { Title1, Title2 } from "../components/Typography";
import Header from "../components/Header";

export default function Resources() {
  return (
    <>
      <Header title="Illustration resources from Maggie Appleton" />
      <Layout>
        <header>
          <Title1>Illustration Resources</Title1>
          <Title2>
            My illustration resources have been moved to
            [here](/illustration-resources).
          </Title2>
        </header>
      </Layout>
    </>
  );
}
