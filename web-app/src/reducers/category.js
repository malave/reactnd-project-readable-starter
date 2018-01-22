import { fromJS } from 'immutable';
import {
    LOAD_CATEGORIES,
    LOAD_CATEGORIES_ERROR,
    LOAD_CATEGORIES_SUCCESS
} from '../constants';

// The initial state of the App
const initialState = fromJS({
    current: null,
    categories: [],
});

function categoryReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_CATEGORIES:
            return state
                .set('lading', true)
                .set('error', null);
        case LOAD_CATEGORIES_SUCCESS:
            return state
                .set('lading', false)
                .set('error', null)
                .set('categories', fromJS(action.categories));
        case LOAD_CATEGORIES_ERROR:
            return state
                .set('lading', false)
                .set('error', action.error)
                .set('categories', initialState.get('categories'));
        default:
            return state;
    }
}

export default categoryReducer;
