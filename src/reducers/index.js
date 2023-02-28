import { combineReducers } from 'redux';
import {
    ADD_MOVIES,
    ADD_FAVOURITE,
    REMOVE_FAVOURITE,
    SHOW_FAVOURITE,
    ADD_MOVIES_TOLIST,
    ADD_SEARCH_RESULT
} from '../actions';

const initialState = {
    list: [],
    favourites: [],
    showfav: false,
}

export function movies(state = initialState, action) {
    //console.log('MOVIES REDUCER');
    // if (action.type === ADD_MOVIES) {
    //     //console.log("hii", action.movies)
    //     return {
    //         ...state,
    //         list: action.movies
    //     }
    // }
    // return state;

    switch (action.type) {
        case ADD_MOVIES:
            return {
                ...state,
                list: action.movies
            }
        case ADD_FAVOURITE:
            return {
                ...state,
                favourites: [action.movie, ...state.favourites]
            }
        case REMOVE_FAVOURITE:
            const filteredArray = state.favourites.filter(movie => movie.Title !== action.movie.Title)
            return {
                ...state,
                favourites: filteredArray
            }
        case SHOW_FAVOURITE:
            return {
                ...state,
                showfav: action.val
            }
        case ADD_MOVIES_TOLIST:
            return {
                ...state,
                list: [action.movie, ...state.list]
            }
        default:
            return state;
    }
}


const initialsearchstate = {
    result: {},
    showsearchresult: false,
};

export function search(state = initialsearchstate, action) {

    switch (action.type) {
        case ADD_SEARCH_RESULT:
            return {
                ...state,
                result: action.movie,
                showsearchresult: true,
            }
        case ADD_MOVIES_TOLIST:
            console.log(state);
            return {
                ...state,
                showsearchresult: false   //when we dispatch an action every reducer is called so this will set show search result as fa
            }
        default:
            return state;
    }
}

// const initialrootstate = {
//     movies: initialState,
//     search: initialsearchstate
// }


// export default function rootreducer(state = initialrootstate, action) {
//     return {
//         movies: movies(state.movies, action),
//         search: search(state.search, action)
//     }
// }

export default combineReducers({
    movies: movies,
    search: search
});