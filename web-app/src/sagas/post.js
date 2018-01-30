import { push } from 'react-router-redux';
import {
    call,
    put,
    takeLatest,
} from 'redux-saga/effects';
import {
    createPostError,
    createPostSuccess,
    loadPostByIdError,
    loadPostByIdSuccess,
    loadPostsError,
    loadPostsSuccess,
    updatePostError,
    updatePostSuccess
} from '../actions/post';
import {
    CREATE_POST,
    LOAD_POST,
    LOAD_POSTS,
    UPDATE_POST,
} from '../constants/actions';
import api from '../util/api';

export function* getPosts(payload) {
    const { category } = payload;
    try {
        const response = category ? yield call(api.getPostsByCategory, category) : yield call(api.getPosts);
        yield put(loadPostsSuccess(response));
    } catch (error) {
        yield put(loadPostsError(error));
    }
}

export function* getPost(payload) {
    const { id } = payload;
    try {
        const response = yield call(api.getPostById, id);
        yield put(loadPostByIdSuccess(response));
    } catch (error) {
        yield put(loadPostByIdError(error));
    }
}

export function* postPost(payload) {
    const { post } = payload;
    try {
        const response = yield call(api.postPost, post);
        yield put(createPostSuccess(response));
        yield put(push(`/${post.category}/${post.id}`));
    } catch (error) {
        yield put(createPostError(error));
    }
}

export function* putPost(payload) {
    const { post } = payload;
    try {
        const response = yield call(api.putPost, post);
        yield put(updatePostSuccess(response));
        yield put(push(`/${post.category}/${post.id}`));
    } catch (error) {
        yield put(updatePostError(error));
    }
}

export function* loadPosts() {
    yield takeLatest(LOAD_POSTS, getPosts);
}

export function* loadPostById() {
    yield takeLatest(LOAD_POST, getPost);
}

export function* createPost() {
    yield takeLatest(CREATE_POST, postPost);
}

export function* updatePost() {
    yield takeLatest(UPDATE_POST, putPost);
}

export function* votePost() {
    yield takeLatest(UPDATE_POST, putPost);
}

// Bootstrap sagas
export default [
    loadPosts,
    loadPostById,
    createPost,
    updatePost,
];