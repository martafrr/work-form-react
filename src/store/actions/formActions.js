import axios from 'axios';

export const FETCH_LOCATION_REQUEST = 'FETCH_LOCATION_REQUEST';
export const FETCH_LOCATION_SUCCESS = 'FETCH_LOCATION_SUCCESS';
export const FETCH_LOCATION_FAILURE = 'FETCH_LOCATION_FAILURE';
export const CHANGE_KEYWORD_VALUE = 'CHANGE_KEYWORD_VALUE';
export const CHECK_CATEGORY = 'CHECK_CATEGORY';
export const RESET_CATEGORIES = 'RESET_CATEGORIES';
export const CHANGE_LOCATION_VALUE = 'CHANGE_LOCATION_VALUE';
export const SELECT_LOCATION = 'SELECT_LOCATION';
export const CLEAR_FORM = 'CLEAR_FORM';

export const changeLocationValue = value => ({
    type: CHANGE_LOCATION_VALUE,
    payload: value
});

const fetchLocationRequest = () => ({
    type: FETCH_LOCATION_REQUEST,
});

const fetchLocationSuccess = location => {
    let locationList = [];
    for (let loc of location.split('"')) {
        if(loc.length > 3) {
            locationList.push(loc);
        }
    }
    return {
        type: FETCH_LOCATION_SUCCESS,
        payload: locationList
    }
};

const fetchLocationFailure = error => ({
    type: FETCH_LOCATION_FAILURE,
    payload: error
});

export const fetchLocation = query => {
    return dispatch => {
        dispatch(fetchLocationRequest());
    
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = `http://gd.geobytes.com/AutoCompleteCity?callback=?&filter=DE&q=${query}`; 
        
        return axios
            .get(proxyurl + url)
            .then(response => {
                dispatch(fetchLocationSuccess(response.data));
            })
            .catch(() => {
                dispatch(fetchLocationFailure("Can’t access location response."))
            });
    };
}

export const changeKeywordValue = keyword => ({
    type: CHANGE_KEYWORD_VALUE,
    payload: keyword
});

export const resetCategories = data => ({
    type: RESET_CATEGORIES,
    payload: data
});

export const setClickedLocation = location => ({
    type: SELECT_LOCATION,
    payload: location
});

export const clearForm = () => ({
    type: CLEAR_FORM,
});
