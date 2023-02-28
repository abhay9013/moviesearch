//action type
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITE = 'ADD_FAVOURITE';
export const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE';
export const SHOW_FAVOURITE = 'SHOW_FAVOURITE';
export const ADD_MOVIES_TOLIST = 'ADD_MOVIES_TOLIST';
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';


//action creators
export function addmovies(movies) {
    return {
        type: ADD_MOVIES,
        movies: movies
    }

}

export function addfavourite(movie) {
    return {
        type: ADD_FAVOURITE,
        movie: movie
    }

}

export function removefavourite(movie) {
    return {
        type: REMOVE_FAVOURITE,
        movie: movie
    }
}

export function showfav(val) {
    return {
        type: SHOW_FAVOURITE,
        val
    }

}

export function addMovieToList(movie) {
    return {
        type: ADD_MOVIES_TOLIST,
        movie
    }
}

export function handlemoviesearch(movie) {
    const url = `https://www.omdbapi.com/?apikey=415aa0c9&t=${movie}`;

    //https://www.omdbapi.com/?apikey=415aa0c9&t=avengers

    return function (dispatch) {
        fetch(url)
            .then(response => response.json())
            .then(mov => {
                //console.log('movie', movie)
                dispatch(addsearchresult(mov))
            })
    }
}

export function addsearchresult(movie) {
    return {
        type: ADD_SEARCH_RESULT,
        movie
    }
}