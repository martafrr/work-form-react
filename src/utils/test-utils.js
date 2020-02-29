import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../store/reducers/rootReducer';
import { middlewares } from '../store';

export const findByTestAtr = (component, atr) => {
    const wrapper = component.find(`[data-test='${atr}']`);
    return wrapper;
};

export const testStore = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddleware(rootReducer, initialState);
};

