// 定义我们需要的行为，初始化数据，增加，删除
// action types
const INIT_COMMENTS = 'INIT_COMMENTS';   // 初始化数据
const ADD_COMMENT = 'ADD_COMMENT';       // 增加
const DELETE_COMMENT = 'DELETE_COMMENT'; // 删除

// 共用的所有数据
// reduces  负责返回新的state,根据不同的action.type返回不同值
// 存储你需要的数据comment，很多地方需要使用到的
export default function (state = { comments: [] }, action) {
  // if (!state) {
  //   state = { comments: [] }
  // }
  switch (action.type) {
    case INIT_COMMENTS:
      // 初始化评论
      return { comments: action.comments }
    case ADD_COMMENT:
      // 新增评论 ...state.comments 浅拷贝
      return {
        comments: [...state.comments, action.comment]
      }
    case DELETE_COMMENT:
      // 删除评论
      return {
        comments: [
          ...state.comments.slice(0, action.commentIndex),
          ...state.comments.slice(action.commentIndex + 1)
        ]
      }
    default:
      return state
  }
}

// action creators
export const initComments = (comments) => {
  return { type: INIT_COMMENTS, comments }
}

export const addComment = (comment) => {
  return { type: ADD_COMMENT, comment }
}

export const deleteComment = (commentIndex) => {
  return { type: DELETE_COMMENT, commentIndex }
}


