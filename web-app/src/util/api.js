import request from './request';

const HEADERS = {
    'Authorization': 'whatever-you-want',
    'Accept': 'application/json',
};

const POST_HEADERS = {
    method: 'POST',
    headers: HEADERS,
};

const GET_HEADERS = {
    method: 'GET',
    headers: HEADERS,
};

const BASE_URL = 'http://localhost:3001';

export default {
    getCategories: () => {
        return request(`${BASE_URL}/categories`, GET_HEADERS);
    },
    getPosts: () => {
        return request(`${BASE_URL}/posts`, GET_HEADERS);
    },
    getPostById: (id) => {
        return request(`${BASE_URL}/posts/${id}`, GET_HEADERS);
    },
    postPost: () => {
        throw new Error('Not implemented');
    },
    getPostsByCategory: (category) => {
        return request(`${BASE_URL}/${category}/posts`, GET_HEADERS);
    },
    votePost: () => {
        throw new Error('Not implemented');
    },
    updatePost: () => {
        throw new Error('Not implemented');
    },
    deletePost: () => {
        throw new Error('Not implemented');
    },
    getCommentsByPostId: (id) => {
        return request(`${BASE_URL}/posts/${id}/comments`, GET_HEADERS);
    },
    postComment: () => {
        throw new Error('Not implemented');
    },

    getCommentById: (id) => {
        return request(`${BASE_URL}/comments/${id}`, GET_HEADERS);
    },
    voteComment: () => {
        throw new Error('Not implemented');
    },
    updateComment: () => {
        throw new Error('Not implemented');
    },
    deleteComment: () => {
        throw new Error('Not implemented');
    },
};