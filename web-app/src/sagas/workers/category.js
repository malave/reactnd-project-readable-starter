import {
    call,
    put
} from 'redux-saga/effects';
import * as categoryActions from '../../actions/category';
import api from '../../util/api';

export function* getCategories() {
    try {
        const response = yield call(api.getCategories);
        yield put(categoryActions.loadCategoriesSuccess(response.categories));
    } catch (error) {
        yield put(categoryActions.loadCategoriesError(error));
    }
}
