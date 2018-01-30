import { takeLatest, } from 'redux-saga/effects';
import * as actions from '../../constants/actions';
import * as commentWorkers from '../workers/comment';

export function* loadComment() {
    yield takeLatest(actions.LOAD_COMMENT, commentWorkers.getCommentById);
}

export function* loadPostComments() {
    yield takeLatest(actions.LOAD_POST_COMMENTS, commentWorkers.getCommentsByPostId);
}

export function* createPostComment() {
    yield takeLatest(actions.CREATE_POST_COMMENT, commentWorkers.postComment);
}

export function* updateComment() {
    yield takeLatest(actions.UPDATE_COMMENT, commentWorkers.updateComment);
}

export function* voteComment() {
    yield takeLatest(actions.VOTE_COMMENT, commentWorkers.voteComment);
}

export function* deleteComment() {
    yield takeLatest(actions.DELETE_COMMENT, commentWorkers.deleteComment);
}

// Bootstrap sagas
export default [
    loadComment,
    loadPostComments,
    createPostComment,
    updateComment,
    voteComment,
    deleteComment,
];