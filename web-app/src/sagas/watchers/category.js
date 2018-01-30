import { takeLatest, } from 'redux-saga/effects';
import * as actionConstants from '../../constants/actions';
import * as categoryWorkers from '../workers/category';

export function* loadCategories() {
    yield takeLatest(actionConstants.LOAD_CATEGORIES, categoryWorkers.getCategories);
}

// Bootstrap sagas
export default [
    loadCategories,
];