import React from 'react';
// 这里使用react-router-dom中的HashRouter，4之前的版本引用方法是：
import {
  Router,
  Route,
  hashHistory
} from 'react-router';
// Router是根路由，由history属性来决定使用哪一种路由方式
// import {
// 		HashRouter as Router,
// 		Route,
// 		Switch,
// 		hashHistory
// } from 'react-router-dom';

import app  from './app';

const route = () => {
	return (
		<Router history={hashHistory}>
			<Route path='/app' component={app}/>
		</Router>
	)
}
export default route;


