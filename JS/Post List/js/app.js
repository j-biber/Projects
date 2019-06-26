import { fetchData } from './data.js'
import { displayPosts, displayError } from './ui.js'

function init() {
    fetchData(onSuccessRequest, onErrorRequest);
}

function onSuccessRequest (data) {
displayPosts(data);
}

function onErrorRequest (error) {
    displayError(error)
}

export { init }