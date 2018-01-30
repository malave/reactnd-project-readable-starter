import {
    call,
    takeEvery,
} from 'redux-saga/effects';

export function* errorLogger() {
    yield takeEvery('*', function* errorLogger(action) {
        if (action.error) {
            yield call(console.error, action);
        }
    });
}

// Bootstrap sagas
export default [
    errorLogger,
];