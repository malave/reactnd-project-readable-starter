import {
    call,
    put,
    takeLatest,
} from 'redux-saga/effects';
import {
    loadPostByIdError,
    loadPostByIdSuccess,
    loadPostsError,
    loadPostsSuccess
} from '../actions/post';
import {
    LOAD_POST,
    LOAD_POSTS
} from '../constants';
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

export function* loadPosts() {
    yield takeLatest(LOAD_POSTS, getPosts);
}

export function* loadPostById() {
    yield takeLatest(LOAD_POST, getPost);
}

// Bootstrap sagas
export default [
    loadPosts,
    loadPostById,
];