import formReducer from './formReducer';
import {
    FETCH_LOCATION_REQUEST,
    FETCH_LOCATION_SUCCESS,
    FETCH_LOCATION_FAILURE,
    CHANGE_KEYWORD_VALUE,
    RESET_CATEGORIES,
    CHANGE_LOCATION_VALUE,
    SELECT_LOCATION,
    CLEAR_FORM,
} from '../actions/formActions';

describe('Form reducer', () => {
    const mockState = {
        locationList: [],
        location: '',
        keyword: '',
        topCategoriesChecked: [],
        moreCategoriesChecked: [],
        loading: false,
        fetchingError: '',
        categoryList: {
            topCategoriesData: [
                "IT and telecommunication (4440)",
                "Sales and Commerce (3263)",
                "Production, construction and trade (2586)",
                "Management / executive and strategic management (1982)",
                "Other (3636)",
                "Engineering / technical (2652)",
                "Health, medical and social (2130)",
                "Finance and accounting (1979)"
            ],
            moreCategoriesData: [
                "Not cateforized (1468)",
                "Banking, insurance and financial services (1342)",
                "Purchasing, transport and logistics (719)",
                "Administration (1439)",
                "Marketing and advertising (1304)",
                "Training / instruction (547)",
                "More on instruction (547)",
                "More on advertising (1304)",
                "More on administration (1439)",
                "More on logistics (719)",
                "More on transport (719)"
            ],
        },
    };
    
    it('should return default state', () => {
        const newState = formReducer(mockState, {});

        expect(newState).toEqual(mockState);
    });

    it('should return expected state when FETCH_LOCATION_REQUEST', () => {
        const payload = true;
        const action = {
            type: FETCH_LOCATION_REQUEST,
            payload
        }
        const newState = formReducer(mockState, action);
        
        expect(newState).toEqual({
            ...mockState,
            loading: payload,
        });
    });

    it('should return expected state when FETCH_LOCATION_SUCCESS', () => {
        const payload = ['Berlin', 'Bergen'];
        const action = {
            type: FETCH_LOCATION_SUCCESS,
            payload
        }
        const newState = formReducer(mockState, action);
        
        expect(newState).toEqual({
            ...mockState,
            locationList: payload,
        });
    });

    it('should return expected state when FETCH_LOCATION_FAILURE', () => {
        const payload = 'error';
        const action = {
            type: FETCH_LOCATION_FAILURE,
            payload
        }
        const newState = formReducer(mockState, action);
        
        expect(newState).toEqual({
            ...mockState,
            fetchingError: payload,
        });
    });

    it('should return expected state when CHANGE_KEYWORD_VALUE', () => {
        const payload = 'keyword';
        const action = {
            type: CHANGE_KEYWORD_VALUE,
            payload
        }
        const newState = formReducer(mockState, action);
        
        expect(newState).toEqual({
            ...mockState,
            keyword: payload,
        });
    });

    it('should return expected state when RESET_CATEGORIES', () => {
        const payload = {
            typeOfCat: 'topCategoriesChecked',
            data: [1,2,3]
        };
        const action = {
            type: RESET_CATEGORIES,
            payload
        }
        const newState = formReducer(mockState, action);
        
        expect(newState).toEqual({
            ...mockState,
            [payload.typeOfCat]: payload.data,
        });
    });

    it('should return expected state when CHANGE_LOCATION_VALUE', () => {
        const payload = "frankfurt";
        const action = {
            type: CHANGE_LOCATION_VALUE,
            payload
        }
        const newState = formReducer(mockState, action);
        
        expect(newState).toEqual({
            ...mockState,
            location: payload,
        });
    });

    it('should return expected state when SELECT_LOCATION', () => {
        const payload = "Berlin";
        const action = {
            type: SELECT_LOCATION,
            payload
        }
        const newState = formReducer(mockState, action);
        
        expect(newState).toEqual({
            ...mockState,
            location: payload,
            locationList: [],
        });
    });

    it('should return expected state when CLEAR_FORM', () => {
        const payload = "something";
        const action = {
            type: CLEAR_FORM,
            payload
        }
        const newState = formReducer(mockState, action);
        
        expect(newState).toEqual({ ...mockState });
    });


});