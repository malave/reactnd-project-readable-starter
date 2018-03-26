import _ from 'lodash';
import { push } from 'react-router-redux';
import {
    call,
    put
} from 'redux-saga/effects';
import * as postActions from '../../actions/post';
import api from '../../util/api';

export function* getPosts(payload) {
    const { filter } = payload;
    try {
        let response;
        if (filter.category) {
            response = yield call(api.getPostsByCategory, filter.category);
        } else {
            response = yield call(api.getPosts);
        }

        yield put(postActions.loadPostsSuccess(response));
    } catch (error) {
        yield put(postActions.loadPostsError(error));
    }
}

export function* getPost(payload) {
    const { id } = payload;
    try {
        const response = yield call(api.getPostById, id);
        if (_.isEmpty(response)) {
            yield put(postActions.loadPostByIdError({ message: 'Not Found' }));
            yield put(push('/404'));
        } else {
            yield put(postActions.loadPostByIdSuccess(response));
        }

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
        yield put(push(`/`));
    } catch (error) {
        yield put(postActions.deletePostError(error));
    }
}