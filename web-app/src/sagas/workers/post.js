import { push } from 'react-router-redux';
import {
    call,
    put
} from 'redux-saga/effects';
import * as postActions from '../../actions/post';
import api from '../../util/api';

export function* getPosts() {
    try {
        const response = yield call(api.getPosts);
        yield put(postActions.loadPostsSuccess(response));
    } catch (error) {
        yield put(postActions.loadPostsError(error));
    }
}

export function* getPost(payload) {
    const { id } = payload;
    try {
        const response = yield call(api.getPostById, id);
        yield put(postActions.loadPostByIdSuccess(response));
    } catch (error) {
        yield put(postActions.loadPostByIdError(error));
    }
}

export function* postPost(payload) {
    const { post } = payload;
    try {
        const response = yield call(api.postPost, post);
        yield put(postActions.createPostSuccess(response));
        yield put(push(`/${post.category}/${post.id}`));
    } catch (error) {
        yield put(postActions.createPostError(error));
    }
}

export function* putPost(payload) {
    const { post } = payload;
    try {
        const response = yield call(api.putPost, post);
        yield put(postActions.updatePostSuccess(response));
        yield put(push(`/${post.category}/${post.id}`));
    } catch (error) {
        yield put(postActions.updatePostError(error));
    }
}

export function* getPostsByCategory(payload) {
    const { category } = payload;
    try {
        const response = yield call(api.getPostsByCategory, category);
        yield put(postActions.loadPostsByCategorySuccess(response));
    } catch (error) {
        yield put(postActions.loadPostsByCategoryError(error));
    }
}

export function* votePost(payload) {
    const { id, option } = payload;
    try {
        const response = yield call(api.votePost, id, option);
        yield put(postActions.votePostSuccess(response));
    } catch (error) {
        yield put(postActions.votePostError(error));
    }
}

export function* deletePost(payload) {
    const { id } = payload;
    try {
        const response = yield call(api.deletePost, id);
        yield put(postActions.deletePostSuccess(response));
    } catch (error) {
        yield put(postActions.deletePostError(error));
    }
}