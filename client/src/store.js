import { createStore, applyMiddleware, compose } from 'redux';

import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};
const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
const middleWare = [thunk];
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(...middleWare)
  ));
export default store;