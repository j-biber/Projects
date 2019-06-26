import { getShows, getSingleShow, getSeasons, getCast, searchShows } from './data.js'
import { displayTopShows, displaySingleShow, displaySeasons, displayCast, displaySearchResults } from './ui.js';

function init() {
    getShows(onSuccessHomePage);
    setupEventListenersSearchInput();
}

function initSinglePage() {
    const showId = localStorage.getItem('id');
    getSingleShow(showId, onSuccessSingleShow);
    getSeasons(showId, onSuccessSeasons);
    getCast(showId, onSuccessCast);
    setupEventListenersSearchInput();
}

function setupEventListenersSearchInput() {
    $('input').on('keyup', onKeyPressHandler);
}

function onKeyPressHandler() {
    const query = $('input').val();
    console.log(query)
    searchShows(query, onSuccessSearch);

}

function setupEventListenersCards() {
    $('.single-show-card').each(function (index, element) {
        element.onclick = function (event) {
            if ($(event.target).hasClass('link')) {
                localStorage.setItem('id', element.dataset.id);
                window.location.href = './show-page.html';
            }
        };
    });
}

function setupEventListenersSearchItems() {
    $('.search-item').each(function (index, element) {
        element.onclick = function (event) {
            localStorage.setItem('id', element.dataset.id);
            window.location.href = './show-page.html';
        };
    });
}

function onSuccessHomePage(shows) {
    displayTopShows(shows);
    setupEventListenersCards();
}

function onSuccessSingleShow(show) {
    displaySingleShow(show);
}

function onSuccessSeasons(seasons) {
    displaySeasons(seasons);
}

function onSuccessCast(cast) {
    displayCast(cast);
}

function onSuccessSearch(searchList) {
    displaySearchResults(searchList);
    setupEventListenersSearchItems();
}

export {
    init,
    initSinglePage
}