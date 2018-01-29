// 定义我们需要的行为，初始化数据，增加，删除
// action types

import * as actionType from './actionType';
// 共用的所有数据
// reduces  负责返回新的state,根据不同的action.type返回不同值

const data = {
    num: 0,

    btnText: ['加1','减1','归零'],
};

export default function (state = data , action) {
  console.log('action',action);
  switch (action.type) {
    case actionType.REDUCETION_COMMENTS:
      // 归零
      return {
       ...state,
       num:0,
     }
    case actionType.ADD_COMMENT:
      // 加1
      console.log(action.e);
      return {
        ...state,
        num: ++state.num,
        e: action.e
      }
    case actionType.REDUCE_COMMENT:
      // 减1
      return {
        ...state,
        num: --state.num
      }
    default:
      return state
  }
}




