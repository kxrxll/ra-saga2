import { createStore, combineReducers, applyMiddleware, compose, } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import itemsReducer from '../reducers/items';
import detailsReducer from '../reducers/details';
import { itemsRequestEpic, detailsRequestEpic } from '../epics';

const reducer = combineReducers({ items: itemsReducer, details: detailsReducer });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epic = combineEpics(
  itemsRequestEpic,
  detailsRequestEpic,
);

const epicMiddleware = createEpicMiddleware();

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(epicMiddleware)
));

epicMiddleware.run(epic);

export default store;