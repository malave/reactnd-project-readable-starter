import * as actions from '../constants/actions';

export function loadPostComments() {
    return {
        type: actions.LOAD_POST_COMMENTS
    };
}

export function loadPostCommentsSuccess(comments) {
    return {
        type: actions.LOAD_POST_COMMENTS_SUCCESS,
        comments
    };
}

export function loadPostCommentsError(error) {
    return {
        type: actions.LOAD_POST_COMMENTS_ERROR,
        error
    };
}

export function loadComment(id) {
    return {
        type: actions.LOAD_COMMENT,
        id
    };
}

export function loadCommentSuccess(comment) {
    return {
        type: actions.LOAD_COMMENT_SUCCESS,
        comment
    };
}

export function loadCommentError(error) {
    return {
        type: actions.LOAD_COMMENT_ERROR,
        error
    };
}

export function createPostComment(comment) {
    return {
        type: actions.CREATE_POST_COMMENT,
        comment
    };
}

export function createPostCommentSuccess(comment) {
    return {
        type: actions.CREATE_POST_COMMENT_SUCCESS,
        comment
    };
}

export function createPostCommentError(error) {
    return {
        type: actions.CREATE_POST_COMMENT_ERROR,
        error
    };
}

export function updateComment(comment) {
    return {
        type: actions.UPDATE_COMMENT,
        comment
    };
}

export function updateCommentSuccess(comment) {
    return {
        type: actions.UPDATE_COMMENT_SUCCESS,
        comment
    };
}

export function updateCommentError(error) {
    return {
        type: actions.UPDATE_COMMENT_ERROR,
        error
    };
}

export function voteComment(id, option) {
    return {
        type: actions.VOTE_COMMENT,
        id,
        option
    };
}

export function voteCommentSuccess(comment) {
    return {
        type: actions.VOTE_COMMENT_SUCCESS,
        comment
    };
}

export function voteCommentError(error) {
    return {
        type: actions.VOTE_COMMENT_ERROR,
        error
    };
}

export function deleteComment(id) {
    return {
        type: actions.DELETE_COMMENT,
        id,
    };
}

export function deleteCommentSuccess(comment) {
    return {
        type: actions.DELETE_COMMENT_SUCCESS,
        comment
    };
}

export function deleteCommentError(error) {
    return {
        type: actions.DELETE_COMMENT_ERROR,
        error
    };
}
