// import React from 'react';
// import ReactDOM from 'react-dom';
// // import './index.css';
// import App from './App';
// // import registerServiceWorker from './registerServiceWorker';
// ReactDOM.render(<App />, document.getElementById('root'));
// // registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import CommentApp from './containers/CommentApp';
import commentsReducer from './reducers/reducer';
import './index.css';


// 创建一个store,对reduer没有做异步操作。
const store = createStore(commentsReducer);
// 监听数据的变化
store.subscribe(() =>
  console.log(store.getState())
);

console.log(commentsReducer);

console.log(CommentApp);

ReactDOM.render(
  <Provider store={store}>
  	<CommentApp/>
  </Provider>,
  document.getElementById('root')
);