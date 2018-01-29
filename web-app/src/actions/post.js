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

export function loadPostsError(error) {
    return {
        type: LOAD_POSTS_ERROR,
        error
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

export function loadPostByIdError(error) {
    return {
        type: LOAD_POST_ERROR,
        error
    };
}

export function createPost(post) {
    return {
        type: CREATE_POST,
        post
    };
}

export function createPostSucess(post) {
    return {
        type: CREATE_POST_SUCCESS,
        post
    };
}

export function createPostError(error) {
    return {
        type: CREATE_POST_ERROR,
        error
    };
}

export function updatePost(post) {
    return {
        type: UPDATE_POST,
        post
    };
}

export function updatePostSucess(post) {
    return {
        type: UPDATE_POST_SUCCESS,
        post
    };
}

export function updatePostError(error) {
    return {
        type: UPDATE_POST_ERROR,
        error
    };
}