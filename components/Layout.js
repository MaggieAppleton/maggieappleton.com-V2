export default function Layout({ children, type }) {
    // if (type === 'note') {
    //     return <NoteLayout>{children}</NoteLayout>
    // } else if (type === 'post') {
    //     return <PostLayout>{children}</PostLayout>
    // }

    return (
        <>
            <div className="wrapper">{children}</div>
        </>
    );
}
