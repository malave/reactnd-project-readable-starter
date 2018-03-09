import * as actions from '../constants/actions';

export function loadPosts(filter = { category: null }) {
    return {
        type: actions.LOAD_POSTS,
        filter,
    };
}

export function loadPostsSuccess(posts) {
    return {
        type: actions.LOAD_POSTS_SUCCESS,
        posts,
    };
}

export function loadPostsError(error) {
    return {
        type: actions.LOAD_POSTS_ERROR,
        error,
    };
}

export function loadPostById(id) {
    return {
        type: actions.LOAD_POST,
        id,
    };
}

export function loadPostByIdSuccess(post) {
    return {
        type: actions.LOAD_POST_SUCCESS,
        post,
    };
}

export function loadPostByIdError(error) {
    return {
        type: actions.LOAD_POST_ERROR,
        error,
    };
}

export function createPost(post) {
    return {
        type: actions.CREATE_POST,
        post,
    };
}

export function createPostSuccess(post) {
    return {
        type: actions.CREATE_POST_SUCCESS,
        post,
    };
}

export function createPostError(error) {
    return {
        type: actions.CREATE_POST_ERROR,
        error,
    };
}

export function updatePost(post) {
    return {
        type: actions.UPDATE_POST,
        post,
    };
}

export function updatePostSuccess(post) {
    return {
        type: actions.UPDATE_POST_SUCCESS,
        post,
    };
}

export function updatePostError(error) {
    return {
        type: actions.UPDATE_POST_ERROR,
        error,
    };
}

export function votePost(id, option) {
    return {
        type: actions.VOTE_POST,
        id,
        option,
    };
}

export function votePostSuccess(post) {
    return {
        type: actions.VOTE_POST_SUCCESS,
        post,
    };
}

export function votePostError(error) {
    return {
        type: actions.VOTE_POST_ERROR,
        error,
    };
}

export function deletePost(id) {
    return {
        type: actions.DELETE_POST,
        id,
    };
}

export function deletePostSuccess(post) {
    return {
        type: actions.DELETE_POST_SUCCESS,
        post,
    };
}

export function deletePostError(error) {
    return {
        type: actions.DELETE_POST_ERROR,
        error,
    };
}

export function sortPosts(sort) {
    return {
        type: actions.SORT_POSTS,
        sort,
    };
}