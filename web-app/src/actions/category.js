import {
    LOAD_CATEGORIES,
    LOAD_CATEGORIES_ERROR,
    LOAD_CATEGORIES_SUCCESS
} from '../constants';

export function loadCategories() {
    return {
        type: LOAD_CATEGORIES
    };
}

export function loadCategoriesSuccess(categories) {
    return {
        type: LOAD_CATEGORIES_SUCCESS,
        categories
    };
}

export function loadCategoriesError() {
    return {
        type: LOAD_CATEGORIES_ERROR
    };
}