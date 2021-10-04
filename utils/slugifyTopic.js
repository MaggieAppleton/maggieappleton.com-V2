export function slugifyTopic(topic) {
    const slug = topic
        .toString()
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");
    return slug;
}

export function deslugifyTopic(slug) {
    const topic = slug.toString().replace(/-/g, " ");
    return topic;
}
