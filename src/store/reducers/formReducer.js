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

export const initialState = {
    locationList: [],
    location: '',
    keyword: '',
    categoriesChecked: [],
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
            "Not categorized (1468)",
            "Banking, insurance and financial services (1342)",
            "Purchasing, transport and logistics (719)",
            "Administration (1439)",
            "Marketing and advertising (1304)",
            "Training / instruction (547)",
            "More on instruction (547)",
            "More on advertising (1304)",
            "More on administration (1439)",
            "More on logistics (719)",
        ],
    },
}

export default (state=initialState, action) => {
    const { payload } = action;
    switch(action.type) {
        case FETCH_LOCATION_REQUEST: {
            return {
                ...state,
                loading: true,
            }
        }
        case FETCH_LOCATION_SUCCESS: {
            return {
                ...state,
                loading: false,
                locationList: payload,
                fetchingError: '',
            }
        }
        case FETCH_LOCATION_FAILURE: {
            return {
                ...state,
                loading: false,
                fetchingError: payload,
            }
        }
        case CHANGE_KEYWORD_VALUE: {
            return {
                ...state,
                keyword: payload,
            }
        }
        case RESET_CATEGORIES: {
            return {
                ...state,
                categoriesChecked: payload
            }
        }
       
        case CHANGE_LOCATION_VALUE: {
            return {
                ...state,
                location: payload,
            }
        }
        case SELECT_LOCATION: {
            return {
                ...state,
                location: payload,
                locationList: [],
            }
        }
        case CLEAR_FORM: {
            return initialState;
        }
        default:
            return state
    }
}