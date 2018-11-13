import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

// import createSagaMiddleware from 'redux-saga';
// import { StrictMode } from "react";

import mainReducer from '../reducers';
// import rootSaga from '../sagas'
// const sagaMiddleWare = createSagaMiddleware();

const middleWares = composeWithDevTools(
  // applyMiddleware(sagaMiddleWare)
)

const store = createStore(
  mainReducer,
  /*middleWares*/
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// sagaMiddleWare.run(rootSaga);

export default store;
