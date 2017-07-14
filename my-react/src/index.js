import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';

// import './index.css';

// ReactDOM.render(<App />, document.getElementById('root'));

// ① 引入createStore
// import { createStore } from 'redux';
// ② 引入Provider
import { Provider } from 'react-redux';
// ③ 引入store
import store from './redux/store.js';

import route from './router/router.js'






ReactDOM.reder(
	<Provider store={store}>
		{route}
	</Provider>,
	document.getElementById('root')
)

