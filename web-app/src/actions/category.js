import * as actions from '../constants/actions';

export function changeCategory(category) {
    return {
        type: actions.CHANGE_CATEGORY,
        category
    };
}

export function loadCategories() {
    return {
        type: actions.LOAD_CATEGORIES
    };
}

export function loadCategoriesSuccess(categories) {
    return {
        type: actions.LOAD_CATEGORIES_SUCCESS,
        categories
    };
}

export function loadCategoriesError() {
    return {
        type: actions.LOAD_CATEGORIES_ERROR
    };
}