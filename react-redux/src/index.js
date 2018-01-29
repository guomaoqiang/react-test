import React from 'react';
import ReactDOM from 'react-dom';
import Route from './router';

import './index.css';
import { Provider } from 'react-redux';
import reducer from './reduce/reducer';
import { createStore,combineReducers,applyMiddleware} from 'redux';

import thunk from 'redux-thunk';

import logger from 'redux-logger';

// const store = createStore(combineReducers(reducer),applyMiddleware());

const store = createStore(
	reducer,
	applyMiddleware(thunk,logger)
);

// store.subscribe();


ReactDOM.render(
	<Provider store={store}>
		<Route/>
	</Provider>, 
	document.getElementById('root')
);


// ReactDOM.render(
// 		<App/>,
// 	document.getElementById('root')
// );
