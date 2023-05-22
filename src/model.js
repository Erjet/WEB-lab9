export class RequestSender {
    constructor() {
    }
    sendJSONRequest() {
        return fetch('https://usersdogs.dmytrominochkin.cloud/dogs').then((response) => response.json())
    }
}