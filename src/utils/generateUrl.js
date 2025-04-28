function createURL(src) {
    const url = new URL(`../assets/images/` + src, import.meta.url).href;
    return url;
}

export default createURL;