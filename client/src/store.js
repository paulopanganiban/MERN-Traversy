import { createStore, applyMiddleware, compose } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};
const middleWare = [thunk];
const store = createStore(rootReducer, /* preloadedState, */ composeWithDevTools(
    applyMiddleware(...middleWare)
  ));
export default store;