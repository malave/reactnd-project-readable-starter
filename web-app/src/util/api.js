import request from './request';

const HEADERS = {
    'Authorization': 'whatever-you-want',
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

const POST_HEADERS = {
    method: 'POST',
    headers: HEADERS,
};
const PUT_HEADERS = {
    method: 'PUT',
    headers: HEADERS,
};

const DELETE_HEADERS = {
    method: 'PUT',
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
    postPost: (post) => {
        return request(`${BASE_URL}/posts`, { ...POST_HEADERS, body: JSON.stringify(post) });
    },
    getPostsByCategory: (category) => {
        return request(`${BASE_URL}/${category}/posts`, GET_HEADERS);
    },
    votePost: (id, option) => {
        return request(`${BASE_URL}/posts/${id}`, { ...POST_HEADERS, option: option });
    },
    putPost: (post) => {
        return request(`${BASE_URL}/posts/${post.id}`, { ...PUT_HEADERS, body: JSON.stringify(post) });
    },
    deletePost: (id) => {
        return request(`${BASE_URL}/posts/${id}`, { ...DELETE_HEADERS });
    },
    getCommentsByPostId: (id) => {
        return request(`${BASE_URL}/posts/${id}/comments`, GET_HEADERS);
    },
    postComment: (comment) => {
        return request(`${BASE_URL}/comments/`, { ...POST_HEADERS, body: JSON.stringify(comment) });
    },
    getCommentById: (id) => {
        return request(`${BASE_URL}/comments/${id}`, GET_HEADERS);
    },
    voteComment: (id, option) => {
        return request(`${BASE_URL}/comments/${id}`, { ...POST_HEADERS, option: option });
    },
    updateComment: (comment) => {
        return request(`${BASE_URL}/comments/${comment.id}`, { ...PUT_HEADERS, body: JSON.stringify(comment) });
    },
    deleteComment: (id) => {
        return request(`${BASE_URL}/comments/${id}`, { ...DELETE_HEADERS });

    },
};