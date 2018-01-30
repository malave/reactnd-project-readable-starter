import { fromJS } from 'immutable';
import * as actions from '../constants/actions';

// The initial state of the App
const initialState = fromJS({
    current: null,
    posts: [],
});

function postReducer(state = initialState, action) {
    switch (action.type) {
        case actions.LOAD_POSTS:
            return state
                .set('lading', true)
                .set('error', null);
        case actions.LOAD_POSTS_SUCCESS:
            return state
                .set('lading', false)
                .set('error', null)
                .set('posts', fromJS(action.posts));
        case actions.LOAD_POSTS_ERROR:
            return state
                .set('lading', false)
                .set('error', action.error)
                .set('posts', initialState.get('posts'));
        case actions.LOAD_POST:
            return state
                .set('lading', true)
                .set('error', null);
        case actions.LOAD_POST_SUCCESS:
            return state
                .set('lading', false)
                .set('error', null)
                .set('current', fromJS(action.post));
        case actions.LOAD_POST_ERROR:
            return state
                .set('lading', false)
                .set('error', action.error)
                .set('current', initialState.get('current'));
        case actions.LOAD_POSTS_BY_CATEGORY:
            return state
                .set('lading', true)
                .set('error', null);
        case actions.LOAD_POSTS_BY_CATEGORY_SUCCESS:
            return state
                .set('lading', false)
                .set('error', null)
                .set('posts', fromJS(action.posts));
        case actions.LOAD_POSTS_BY_CATEGORY_ERROR:
            return state
                .set('lading', false)
                .set('error', action.error)
                .set('posts', initialState.get('posts'));
        case actions.CREATE_POST:
            return state
                .set('lading', true)
                .set('error', null);
        case actions.CREATE_POST_SUCCESS:
            return state
                .set('lading', false)
                .set('error', null)
                .set('current', fromJS(action.post));
        case actions.CREATE_POST_ERROR:
            return state
                .set('lading', false)
                .set('error', action.error)
                .set('current', initialState.get('current'));
        case actions.UPDATE_POST:
            return state
                .set('lading', true)
                .set('error', null);
        case actions.UPDATE_POST_SUCCESS:
            return state
                .set('lading', false)
                .set('error', null)
                .set('current', fromJS(action.post));
        case actions.UPDATE_POST_ERROR:
            return state
                .set('lading', false)
                .set('error', action.error)
                .set('current', initialState.get('current'));
        case actions.VOTE_POST:
            return state
                .set('lading', true)
                .set('error', null);
        case actions.VOTE_POST_SUCCESS:
            return state
                .set('lading', false)
                .set('error', null)
                .set('current', fromJS(action.post));
        case actions.VOTE_POST_ERROR:
            return state
                .set('lading', false)
                .set('error', action.error)
                .set('current', initialState.get('current'));
        case actions.DELETE_POST:
            return state
                .set('lading', true)
                .set('error', null);
        case actions.DELETE_POST_SUCCESS:
            return state
                .set('lading', false)
                .set('error', null)
                .set('current', null);
        case actions.DELETE_POST_ERROR:
            return state
                .set('lading', false)
                .set('error', action.error)
                .set('current', initialState.get('current'));
        default:
            return state;
    }
}

export default postReducer;
