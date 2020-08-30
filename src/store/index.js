import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./ducks";
import root from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
	combineReducers({
		reducers,
	}),
	applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(root);

export default store;
