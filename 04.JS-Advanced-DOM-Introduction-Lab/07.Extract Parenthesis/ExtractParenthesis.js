function extract(content) {
    let targetElement = document.getElementById('content');

    let pattern = /\(([^)]+)\)/g;
    let matches = targetElement.textContent.matchAll(pattern);

    let result = Array.from(matches)
    .map(match => match[1])
    .join('; ');

    return result;
}