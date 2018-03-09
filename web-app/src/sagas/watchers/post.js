import { takeLatest, } from 'redux-saga/effects';
import * as actionConstants from '../../constants/actions';
import * as postWorkers from '../workers/post';

export function* loadPosts() {
    yield takeLatest(actionConstants.LOAD_POSTS, postWorkers.getPosts);
}

export function* loadPostById() {
    yield takeLatest(actionConstants.LOAD_POST, postWorkers.getPost);
}

export function* createPost() {
    yield takeLatest(actionConstants.CREATE_POST, postWorkers.postPost);
}

export function* updatePost() {
    yield takeLatest(actionConstants.UPDATE_POST, postWorkers.putPost);
}

export function* votePost() {
    yield takeLatest(actionConstants.VOTE_POST, postWorkers.votePost);
}

export function* deletePost() {
    yield takeLatest(actionConstants.DELETE_POST, postWorkers.deletePost);
}

// Bootstrap sagas
export default [
    loadPosts,
    loadPostById,
    createPost,
    updatePost,
    votePost,
    deletePost,
];