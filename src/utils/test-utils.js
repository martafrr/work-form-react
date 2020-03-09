import { applyMiddleware, createStore } from 'redux';
import checkPropTypes from 'check-prop-types';
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

export const checkProps = (component, expectedProps) => {
    const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
    return propsErr;
};

