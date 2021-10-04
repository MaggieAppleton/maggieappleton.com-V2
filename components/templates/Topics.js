import { slugifyTopic } from "../../utils/slugifyTopic";
import styled from "styled-components";
import Link from "next/link";

export default function Topics({ topics }) {
    return (
        <ul>
            {topics.sort().map((topic) => {
                const slug = slugifyTopic(topic);
                return (
                    <li key={topic}>
                        <Link href={`/topics/${slug}`}>
                            <a>{topic}</a>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
}

const styledTag = styled.div``;
