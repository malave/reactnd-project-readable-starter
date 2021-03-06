/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { fromJS } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';
import { combineReducers } from 'redux-immutable';
import categoryReducer from './category';
import commentReducer from './comment';
import postReducer from './post';

// Initial global state
const globalInitialState = fromJS({
    loading: false,
    error: '',
});

// Initial routing state
const routeInitialState = fromJS({
    locationBeforeTransitions: null,
});

/**
 * Merge route into the global application state
 */
function routeReducer(state = routeInitialState, action) {
    switch (action.type) {
        case LOCATION_CHANGE:
            return state.merge({
                locationBeforeTransitions: action.payload,
            });
        default:
            return state;
    }
}

/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer() {
    return combineReducers({
        global: () => globalInitialState,
        route: routeReducer,
        category: categoryReducer,
        post: postReducer,
        comment: commentReducer,
    });
}
