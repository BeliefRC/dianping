export function get(url) {
    let myHeaders = new Headers({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'text/plain'
    });
    var result = fetch(url, {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors'
    });

    return result;
}