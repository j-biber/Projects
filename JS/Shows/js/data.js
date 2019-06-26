import Show from './entites/Show.js'
import Season from './entites/Seasons.js'
import Cast from './entites/Cast.js'

const SHOW_API = 'http://api.tvmaze.com/shows';

function getShows(onSuccess) {

    const showsRequest = $.ajax({
        url: SHOW_API,
        method: "GET"
    });

    showsRequest.done(function (response) {
        const topRatedShows = sortShows(response).slice(0, 50);

        const ourShows = topRatedShows.map(show => {
            const { name, image, id, summary } = show;

            return new Show(name, image, id, summary);
        })
        onSuccess(ourShows);
    });

    showsRequest.fail(function (jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });
}


function sortShows(listOfShows) {
    const newList = [...listOfShows];
    return newList.sort((show1, show2) =>
        show2.rating.average - show1.rating.average
    );
}


function getSingleShow(id, onSuccess) {
    const singleShowRequest = $.ajax({
        url: `${SHOW_API}/${id}`,
        method: "GET"
    });

    singleShowRequest.done(function (response) {
        const singleShow = new Show(response.name, response.image.original, response.id, response.summary)
        onSuccess(singleShow);
    });


    singleShowRequest.fail(function (jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });
}


function getSeasons(id, onSuccess) {
    const request = $.ajax({
        url: `${SHOW_API}/${id}/seasons`,
        method: "GET"
    });

    request.done(function (response) {
        const seasons = response.map(season => new Season(season.premiereDate, season.endDate))
        console.log(seasons)

        onSuccess(seasons);
    });


    request.fail(function (jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });
}


function getCast(id, onSuccess) {
    const request = $.ajax({
        url: `${SHOW_API}/${id}/cast`,
        method: "GET"
    });

    request.done(function (response) {
        const cast = response.map(castMember => new Cast(castMember.person.name))

        onSuccess(cast);
    });


    request.fail(function (jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });
}


function searchShows(query, onSuccess) {
    const request = $.ajax({
        url: ` http://api.tvmaze.com/search/shows?q=${query}`,
        method: "GET"
    });

    request.done(function (response) {
        const ourResponse = [...response];
        ourResponse.slice(0, 10);

        const searchList = ourResponse.map(searchItem => {
            const id = searchItem.show.id;
            const title = searchItem.show.name;

            return { id, title }
        })

        onSuccess(searchList);
    });


    request.fail(function (jqXHR, textStatus) {
        alert("Request failed: " + textStatus);
    });
}

export {
    getShows,
    getSingleShow,
    getSeasons,
    getCast,
    searchShows
}