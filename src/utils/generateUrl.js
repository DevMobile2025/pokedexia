function createURL(src) {
    const url = new URL(`/images/` + src, import.meta.url).href;
    return url;
}

export default createURL;