import {
    call,
    put,
    takeLatest,
} from 'redux-saga/effects';
import {
    loadCategoriesError,
    loadCategoriesSuccess
} from '../actions/category';
import { LOAD_CATEGORIES } from '../constants/actions';
import api from '../util/api';

export function* getCategories() {
    try {
        const response = yield call(api.getCategories);
        yield put(loadCategoriesSuccess(response.categories));
    } catch (error) {
        yield put(loadCategoriesError(error));
    }
}

export function* loadCategories() {
    yield takeLatest(LOAD_CATEGORIES, getCategories);
}

// Bootstrap sagas
export default [
    loadCategories,
];