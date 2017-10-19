export function escapeForHTML(string) {
    return string.replace(/[&<]/g, c => c === '&' ? '&amp;' : '&lt;');
}

export function assembleTemplate(data, template) {
    return data.reduce((accumulator, item) => (`
        ${accumulator}
        ${template(item)}
    `), '');
}
