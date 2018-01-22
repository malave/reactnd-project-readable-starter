import {
    LOAD_POST,
    LOAD_POST_ERROR,
    LOAD_POST_SUCCESS,
    LOAD_POSTS,
    LOAD_POSTS_ERROR,
    LOAD_POSTS_SUCCESS,
} from '../constants';

export function loadPosts(category = null) {
    return {
        type: LOAD_POSTS,
        category
    };
}

export function loadPostsSuccess(posts) {
    return {
        type: LOAD_POSTS_SUCCESS,
        posts
    };
}

export function loadPostsError() {
    return {
        type: LOAD_POSTS_ERROR
    };
}

export function loadPostById(id) {
    return {
        type: LOAD_POST,
        id
    };
}

export function loadPostByIdSuccess(post) {
    return {
        type: LOAD_POST_SUCCESS,
        post
    };
}

export function loadPostByIdError() {
    return {
        type: LOAD_POST_ERROR
    };
}