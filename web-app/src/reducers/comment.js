import { fromJS } from 'immutable';
import * as actions from '../constants/actions';

// The initial state of the App
const initialState = fromJS({
    current: null,
    comments: [],
});

const findCommentIndex = (comments, id) => {
    return comments.findIndex(comment => {
        return comment.get('id') === id;
    });
};

function commentReducer(state = initialState, action) {
    switch (action.type) {
        case actions.LOAD_COMMENT:
            return state
                .set('lading', true)
                .set('error', null);
        case actions.LOAD_COMMENT_SUCCESS:
            return state
                .set('lading', false)
                .set('error', null)
                .set('comments', fromJS(action.comments));
        case actions.LOAD_COMMENT_ERROR:
            return state
                .set('lading', false)
                .set('error', action.error)
                .set('comments', initialState.get('comments'));
        case actions.LOAD_POST_COMMENTS:
            return state
                .set('lading', true)
                .set('error', null);
        case actions.LOAD_POST_COMMENTS_SUCCESS:
            return state
                .set('lading', false)
                .set('error', null)
                .set('comments', fromJS(action.comments));
        case actions.LOAD_POST_COMMENTS_ERROR:
            return state
                .set('lading', false)
                .set('error', action.error)
                .set('comments', initialState.get('comments'));
        case actions.CREATE_POST_COMMENT:
            return state
                .set('lading', true)
                .set('error', null);
        case actions.CREATE_POST_COMMENT_SUCCESS:
            return state
                .set('lading', false)
                .set('error', null)
                .update('comments', comments => comments.push(fromJS(action.comment)));
        case actions.CREATE_POST_COMMENT_ERROR:
            return state
                .set('lading', false)
                .set('error', action.error)
                .set('current', initialState.get('current'));
        case actions.UPDATE_COMMENT:
            return state
                .set('lading', true)
                .set('error', null);
        case actions.UPDATE_COMMENT_SUCCESS:
            return state
                .set('lading', false)
                .set('error', null)
                .setIn(['comments', findCommentIndex(state.get('comments'), action.comment.id)], fromJS(action.comment));
        case actions.UPDATE_COMMENT_ERROR:
            return state
                .set('lading', false)
                .set('error', action.error)
                .set('current', initialState.get('current'));
        case actions.VOTE_COMMENT:
            return state
                .set('lading', true)
                .set('error', null);
        case actions.VOTE_COMMENT_SUCCESS:
            return state
                .set('lading', false)
                .set('error', null)
                .setIn(['comments', findCommentIndex(state.get('comments'), action.comment.id)], fromJS(action.comment));
        case actions.VOTE_COMMENT_ERROR:
            return state
                .set('lading', false)
                .set('error', action.error)
                .set('current', initialState.get('current'));
        case actions.DELETE_COMMENT:
            return state
                .set('lading', true)
                .set('error', null);
        case actions.DELETE_COMMENT_SUCCESS:
            return state
                .set('lading', false)
                .set('error', null)
                .set('current', fromJS(action.comment));
        case actions.DELETE_COMMENT_ERROR:
            return state
                .set('lading', false)
                .set('error', action.error)
                .set('current', initialState.get('current'));
        default:
            return state;
    }
}

export default commentReducer;
