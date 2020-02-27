import {
    selectTopCategories,
    selectTopCategoriesChecked,
    selectMoreCategoriesChecked,
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
            topCategoriesChecked: ['IT'],
            moreCategoriesChecked: ['Training'],
            loading: false,
            fetchingError: '',
            categoryList: {
                topCategoriesData: ['IT', 'Training'],
                moreCategoriesData: ['Not cateforized', 'Training'],
            },
        }
    }

    it('selectTopCategories should return the expected value', () => {
        expect(selectTopCategories(mockState)).toEqual(['IT', 'Training']);
    });

    it('selectTopCategoriesChecked should return the expected value', () => {
        expect(selectTopCategoriesChecked(mockState)).toEqual(['IT']);
    });

    it('selectMoreCategoriesChecked should return the expected value', () => {
        expect(selectMoreCategoriesChecked(mockState)).toEqual(['Training']);
    });

    it('selectMoreCategories should return the expected value', () => {
        expect(selectMoreCategories(mockState)).toEqual(['Not cateforized', 'Training']);
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