// 去除 https&http://
function parseURL(url) {
    let parsedUrl = url.replace('https://', "");
    parsedUrl = parsedUrl.replace('http://', "");
    return parsedUrl;
}

export default parseURL;