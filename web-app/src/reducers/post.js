import { fromJS } from 'immutable';
import {
    LOAD_POST,
    LOAD_POST_ERROR,
    LOAD_POST_SUCCESS,
    LOAD_POSTS,
    LOAD_POSTS_ERROR,
    LOAD_POSTS_SUCCESS
} from '../constants';

// The initial state of the App
const initialState = fromJS({
    current: null,
    posts: [],
});

function postReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_POSTS:
            return state
                .set('lading', true)
                .set('error', null);
        case LOAD_POSTS_SUCCESS:
            return state
                .set('lading', false)
                .set('error', null)
                .set('posts', fromJS(action.posts));
        case LOAD_POSTS_ERROR:
            return state
                .set('lading', false)
                .set('error', action.error)
                .set('posts', initialState.get('posts'));
        case LOAD_POST:
            return state
                .set('lading', true)
                .set('error', null);
        case LOAD_POST_SUCCESS:
            return state
                .set('lading', false)
                .set('error', null)
                .set('current', fromJS(action.post));
        case LOAD_POST_ERROR:
            return state
                .set('lading', false)
                .set('error', action.error)
                .set('current', initialState.get('current'));
        default:
            return state;
    }
}

export default postReducer;
