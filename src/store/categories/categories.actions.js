import { createAction } from "../../utils/createAction";
import { CATEGORIES_ACTION_TYPES } from "./categories.types";
import {getCategoriesandDocuments} from '../../utils/firebase.utils'

export const fetchCategoriesStart = () => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);
export const fetchCategoriesSuccess = (categories) => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categories);
export const fetchCategoriesFailed = (error) => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);


export const fetchCategoriesAsync = () => async (dispatch) => {
    dispatch(fetchCategoriesStart());
    try {
        const categories = await getCategoriesandDocuments();
        dispatch(fetchCategoriesSuccess(categories));
    } catch (error) {
        dispatch(fetchCategoriesFailed(error));
    }

}

