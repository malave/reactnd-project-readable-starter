import {
    call,
    takeEvery,
} from 'redux-saga/effects';

export function* logger() {
    yield takeEvery('*', function* logger(action) {
        if (action.error) {
            yield call(console.error, action);
        }
    });
}

// Bootstrap sagas
export default [
    logger,
];