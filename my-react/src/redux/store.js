
import { createStore,combineReducers } from 'redux';

import * as reduer from './reduer.js'

// 创建一个store
// createStore接受三个参数,经过combineReducers合并的reducer和state的初始状态以及改变dispatch的中间件，后两个参数并不是必须的。
//  combineReducers 的作用就是  其实它也是一个reducer，它接受整个state和一个action，
//  然后将整个state拆分发送给对应的reducer进行处理，所有的reducer会收到相同的action，
//  不过它们会根据action的type进行判断，有这个type就进行处理然后返回新的state，
//  没有就返回默认值，然后这些分散的state又会整合在一起返回一个新的state树。
let store = createStore(combineReducers(reduer));


export default store;