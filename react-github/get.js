let url = 'https://jsonplaceholder.typicode.com/posts';

class Get {

    status(response) {
        if (response.status >= 200 && response.status < 300) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(new Error(response.statusText));
        }
    }

    json(response) {
        return response.json();
    }

    makeRequest(handler) {
        fetch(url)
            .then(this.status)
            .then(this.json)
            .then(result => handler(result))
            .catch(error => new Error(error));
    }
}

export default Get;