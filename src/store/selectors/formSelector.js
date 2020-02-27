export const selectTopCategories = state => 
    state.form.categoryList.topCategoriesData;

export const selectTopCategoriesChecked = state => 
    state.form.topCategoriesChecked;

export const selectMoreCategoriesChecked = state => 
    state.form.moreCategoriesChecked;

export const selectMoreCategories = state => 
    state.form.categoryList.moreCategoriesData;

export const keywordSelector = state => 
    state.form.keyword;

export const locationSelector = state => 
    state.form.location;

export const locationListSelector = state =>
    state.form.locationList;