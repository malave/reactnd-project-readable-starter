import {
    call,
    put
} from 'redux-saga/effects';
import * as commentActions from '../../actions/comment';
import api from '../../util/api';

export function* getCommentById(payload) {
    const { id } = payload;
    try {
        const response = yield call(api.getCommentById, id);
        yield put(commentActions.loadCommentSuccess(response));
    } catch (error) {
        yield put(commentActions.loadCommentError(error));
    }
}

export function* getCommentsByPostId(payload) {
    const { id } = payload;
    try {
        const response = yield call(api.getCommentsByPostId, id);
        yield put(commentActions.loadPostCommentsSuccess(response));
    } catch (error) {
        yield put(commentActions.loadPostCommentsError(error));
    }
}

export function* postComment(payload) {
    const { comment } = payload;
    try {
        const response = yield call(api.postComment, comment);
        yield put(commentActions.createPostCommentSuccess(response));
        yield call(getCommentsByPostId, { id: response.parentId });
    } catch (error) {
        yield put(commentActions.createPostCommentError(error));
    }
}

export function* updateComment(payload) {
    const { comment } = payload;
    try {
        const response = yield call(api.updateComment, comment);
        yield put(commentActions.updateCommentSuccess(response));
        yield call(getCommentsByPostId, { id: response.parentId });
    } catch (error) {
        yield put(commentActions.updateCommentError(error));
    }
}

export function* voteComment(payload) {
    const { id, option } = payload;
    try {
        const response = yield call(api.voteComment, id, option);
        yield put(commentActions.voteCommentSuccess(response));
        yield call(getCommentsByPostId, { id: response.parentId });
    } catch (error) {
        yield put(commentActions.voteCommentError(error));
    }
}

export function* deleteComment(payload) {
    const { id } = payload;
    try {
        const response = yield call(api.deleteComment, id);
        yield put(commentActions.deleteCommentSuccess(response));
        yield call(getCommentsByPostId, { id: response.parentId });
    } catch (error) {
        yield put(commentActions.deleteCommentError(error));
    }
}