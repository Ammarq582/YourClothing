import { createSelector } from "reselect";

const selectCategoriesReducer = (state) => state.categories;

export const selectCategoriesIsLoading = createSelector(
    [selectCategoriesReducer],
    (categoryState) => categoryState.isLoading
)

export const selectCategoriesMap = createSelector(
    [selectCategoriesReducer],
    (categoryState) => {
    return categoryState.categories.reduce((obj, current) => {
            const {title, items} = current;
            obj[title.toLowerCase()] = items;
            return obj;
        }, {})
    } 
)