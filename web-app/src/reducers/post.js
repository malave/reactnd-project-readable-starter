import { fromJS } from 'immutable';
import * as actions from '../constants/actions';

// The initial state of the App
const initialState = fromJS({
    current: null,
    sort: { field: 'timestamp', order: 'desc' },
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
            const votePostIndex = state.get('posts').toJS().findIndex(post => post.id === action.post.id);
            const votePostPosts = votePostIndex > 0 ? state.get('posts').set(votePostIndex, action.post) : state.get('posts');
            return state
                .set('lading', false)
                .set('error', null)
                .set('current', fromJS(action.post))
                .set('posts', votePostPosts);
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
            const deletePostIndex = state.get('posts').toJS().findIndex(post => post.id === action.post.id);
            const deletePostPosts = deletePostIndex > 0 ? state.get('posts').delete(deletePostIndex) : state.get('posts');
            return state
                .set('lading', false)
                .set('error', null)
                .set('current', null)
                .set('posts', deletePostPosts);
        case actions.DELETE_POST_ERROR:
            return state
                .set('lading', false)
                .set('error', action.error)
                .set('current', initialState.get('current'));
        case actions.SORT_POSTS:
            return state.set('sort', fromJS(action.sort));
        default:
            return state;
    }
}

export default postReducer;
