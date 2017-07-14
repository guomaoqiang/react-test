import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './views/app';
import { Provider } from 'react-redux';
import reducer from './reduces/reduces'
import { createStore,combineReducers,applyMiddleware} from 'redux';

// const store = createStore(combineReducers(reducer),applyMiddleware());

const store = createStore(reducer);

// store.subscribe();


ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>, 
	document.getElementById('root')
);
