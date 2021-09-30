export default function PostCount({ posts, postType }) {
    return (
        <div>
            <span className="metadata">
                {getPostCount(posts)} {postType}
            </span>
        </div>
    );
}

// For an array of posts, return the number of posts
const getPostCount = (posts) => {
    return posts.length;
};
