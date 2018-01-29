import { fromJS } from 'immutable';
import {
    CREATE_POST,
    CREATE_POST_ERROR,
    CREATE_POST_SUCCESS,
    LOAD_POST,
    LOAD_POST_ERROR,
    LOAD_POST_SUCCESS,
    LOAD_POSTS,
    LOAD_POSTS_ERROR,
    LOAD_POSTS_SUCCESS,
    UPDATE_POST,
    UPDATE_POST_ERROR,
    UPDATE_POST_SUCCESS
} from '../constants/actions';

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
        case CREATE_POST:
            return state
                .set('lading', true)
                .set('error', null);
        case CREATE_POST_SUCCESS:
            return state
                .set('lading', false)
                .set('error', null)
                .set('current', fromJS(action.post));
        case CREATE_POST_ERROR:
            return state
                .set('lading', false)
                .set('error', action.error)
                .set('current', initialState.get('current'));
        case UPDATE_POST:
            return state
                .set('lading', true)
                .set('error', null);
        case UPDATE_POST_SUCCESS:
            return state
                .set('lading', false)
                .set('error', null)
                .set('current', fromJS(action.post));
        case UPDATE_POST_ERROR:
            return state
                .set('lading', false)
                .set('error', action.error)
                .set('current', initialState.get('current'));
        default:
            return state;
    }
}

export default postReducer;
