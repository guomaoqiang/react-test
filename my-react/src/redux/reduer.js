import Immutable from 'immutable'
import {
  SET_STATE,
  REQUEST_POSTS,
  RECEIVE_POSTS,
  RECORD_STATE,
  SAVE_PRODUCT_LIST,
  NEW_PRODUCT_DATA,
  DELETE_ITEM,
  GET_DATA_START,
  GET_DATA_SUCCESS,
  TEST_DISPATCH
} from './action.js'


//const initialState = Immutable.fromJS({}) //=Immutable.Map({})

const defaultlState = Immutable.fromJS({data: {}, isFetching: false})
//首次渲染时获取数据
const fetchData = (state = defaultlState , action = {}) => {
    switch(action.type){
        case REQUEST_POSTS:
            return state.set('isFetching',true);
        case RECEIVE_POSTS:
            return Immutable.Map({'data':action.json,'isFetching':false});//返回一个新的state
        default:
            return state
    }
}

//手动获取数据
const requestData = (state = {}, action = {}) => {
    switch(action.type){
        case GET_DATA_START:
            return state;
        case GET_DATA_SUCCESS:
            action.success(action.json);
            state[action.name] = action.json;
            return state;
        default:
            return state;
    }
}

const testData = (state = {}, action = {}) => {
    switch(action.type){
        case TEST_DISPATCH:
            return Object.assign({},state,action);
        default:
            return state;
    }
}

//记录商品列表页数据状态
const producRecord = (state = {}, action = {}) => {
    switch(action.type){
        case RECORD_STATE:
            return Object.assign({},state,action);
        case SAVE_PRODUCT_LIST:
            state['productList'] = [...action.productList];
            return state;       //记录商品列表数据，但是不触发组件更新
        case NEW_PRODUCT_DATA:
            state['productData'] = [...action.productData];
            return state;
        default:
            return state 
    }
}

//销售记录页面数据
const saleRecord = (state = Immutable.fromJS({}) , action = {}) => {
    switch(action.type){
        case DELETE_ITEM:
            return Immutable.Map({index:action.index})
        default:
            return state;
    }
}

export default {
    fetchData,
    requestData,
    producRecord,
    saleRecord,
    testData
}


