import Layout from "../components/Layout";
import Header from "../components/Header";
import { Title1, Title2 } from "../components/typography";
import MasonryGrid from "../components/MasonryGrid";

export default function Garden() {
    return (
        <Layout>
            <Header>
                <Title1>Garden</Title1>
            </Header>
            <Title2>Stuff</Title2>
            <MasonryGrid>
                {PlaceholderData.map((item) => (
                    <div style={{ padding: "2rem", border: "red 1px solid" }}>
                        {item.description}
                    </div>
                ))}
            </MasonryGrid>
        </Layout>
    );
}

const PlaceholderData = [
    {
        id: 1,
        title: "Title 1",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: "https://source.unsplash.com/random/400x400",
    },
    {
        id: 2,
        title: "Title 2",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
        image: "https://source.unsplash.com/random/400x400",
    },
    {
        id: 3,
        title: "Title 3",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: "https://source.unsplash.com/random/400x400",
    },
    {
        id: 3,
        title: "Title 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        image: "https://source.unsplash.com/random/400x400",
    },
    {
        id: 3,
        title: "Title 3",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
        image: "https://source.unsplash.com/random/400x400",
    },
    {
        id: 3,
        title: "Title 3",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: "https://source.unsplash.com/random/400x400",
    },
];
