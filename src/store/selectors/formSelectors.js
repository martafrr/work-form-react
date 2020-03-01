export const selectTopCategories = state => 
    state.form.categoryList.topCategoriesData;
    
export const selectMoreCategories = state => 
    state.form.categoryList.moreCategoriesData;

export const selectCategoriesChecked = state => 
    state.form.categoriesChecked;

export const keywordSelector = state => 
    state.form.keyword;

export const locationSelector = state => 
    state.form.location;

export const locationListSelector = state =>
    state.form.locationList;
