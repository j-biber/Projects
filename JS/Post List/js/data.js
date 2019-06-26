const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/posts'

function fetchData(onSuccess, onError) {
    const request = new XMLHttpRequest();
    request.open('GET', API_ENDPOINT, true);

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            // Success!
            const data = JSON.parse(request.responseText);
            const ourData = data.slice(0, 10);
            onSuccess(ourData);

        } else {
            // We reached our target server, but it returned an error
            console.error("Data error");
            onError("Data error");
        }
    };

    request.onerror = function () {
        // There was a connection error of some sort
        console.error("Data error");
    };

    request.send();
}

export { fetchData }