function slugifyTopic(topic) {
    const slug = topic
        .toString()
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");
    return slug;
}

export default slugifyTopic;
