import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';

export const middlewares = [thunk];

export default (preloadedState) => {
    return createStore(
        rootReducer,
        preloadedState,
        composeWithDevTools(applyMiddleware(...middlewares))
    );
};