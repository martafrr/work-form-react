import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { initialState } from '../reducers/formReducer';
import { 
    FETCH_LOCATION_REQUEST,
    FETCH_LOCATION_SUCCESS,
    FETCH_LOCATION_FAILURE,
    CHANGE_KEYWORD_VALUE,
    RESET_CATEGORIES,
    CHANGE_LOCATION_VALUE,
    SELECT_LOCATION,
    CLEAR_FORM,
    changeLocationValue,
    fetchLocation,
    changeKeywordValue,
    resetCategories,
    setClickedLocation,
    clearForm,
} from './formActions';

const createStore = configureMockStore([thunk]);
let store;


describe('form actions', () => {
    beforeEach(() => {
        store = createStore(initialState);
    });

    it('changeLocationValue should return expected payload', () => {
        const mockValue = 'Berlin';

        store.dispatch(changeLocationValue(mockValue));
        const actions = store.getActions();

        expect(actions[0].type).toEqual(CHANGE_LOCATION_VALUE);    
        expect(actions[0].payload).toEqual('Berlin');    
    });

    describe('fetchLocation', () => {
        it('should call fetchLocationRequest', async () => {
            await store.dispatch(fetchLocation('berlin'))
            const actions = store.getActions();
            expect(actions[0].type).toEqual(FETCH_LOCATION_REQUEST);  
        });
    
        it('should call fetchLocationSuccess', async () => {
            await store.dispatch(fetchLocation('berlin'))
            const actions = store.getActions();
            expect(actions[1].type).toEqual(FETCH_LOCATION_SUCCESS);
        });
    });

    it('changeKeywordValue should return expected payload', () => {
        const keyword = 'Frontend Developer';

        store.dispatch(changeKeywordValue(keyword));
        const actions = store.getActions();
        
        expect(actions[0].type).toEqual(CHANGE_KEYWORD_VALUE);  
        expect(actions[0].payload).toEqual(keyword);
    });

    it('resetCategories should return expected payload', () => {
        const data = [ "IT and telecommunication (4440)"];

        store.dispatch(resetCategories(data));
        const actions = store.getActions();
        
        expect(actions[0].type).toEqual(RESET_CATEGORIES);  
        expect(actions[0].payload).toEqual([ "IT and telecommunication (4440)"]);
    });

    it('setClickedLocation should return expected payload', () => {
        const location = 'Barcelona';

        store.dispatch(setClickedLocation(location));
        const actions = store.getActions();
        
        expect(actions[0].type).toEqual(SELECT_LOCATION); 
        expect(actions[0].payload).toEqual('Barcelona'); 
    });

    it('clearForm should return expected payload', () => {
        store.dispatch(clearForm());
        const actions = store.getActions();
        
        expect(actions[0].type).toEqual(CLEAR_FORM); 
    });
});