import {
    selectTopCategories,
    selectCategoriesChecked,
    selectMoreCategories,
    keywordSelector,
    locationSelector,
    locationListSelector,
} from './formSelectors';

describe('Form selectors', () => {
    const mockState = {
        form: {
            locationList: ['Bergen, Berlin'],
            location: 'Barcelina',
            keyword: 'Frontend Developer',
            categoriesChecked: ['IT'],
            loading: false,
            fetchingError: '',
            categoryList: {
                topCategoriesData: ['IT', 'Training'],
                moreCategoriesData: ['Not categorized', 'Training'],
            },
        }
    }

    it('selectTopCategories should return the expected value', () => {
        expect(selectTopCategories(mockState)).toEqual(['IT', 'Training']);
    });

    it('selectCategoriesChecked should return the expected value', () => {
        expect(selectCategoriesChecked(mockState)).toEqual(['IT']);
    });

    it('selectMoreCategories should return the expected value', () => {
        expect(selectMoreCategories(mockState)).toEqual(['Not categorized', 'Training']);
    });

    it('keywordSelector should return the expected value', () => {
        expect(keywordSelector(mockState)).toEqual('Frontend Developer');
    });

    it('locationSelector should return the expected value', () => {
        expect(locationSelector(mockState)).toEqual('Barcelina');
    });

    it('locationListSelector should return the expected value', () => {
        expect(locationListSelector(mockState)).toEqual(['Bergen, Berlin']);
    });
});