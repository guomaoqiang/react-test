// action types
const INIT_COMMENTS = 'INIT_COMMENTS';   // 初始化数据
const ADD_COMMENT = 'ADD_COMMENT';       // 增加
const DELETE_COMMENT = 'DELETE_COMMENT'; // 删除

// reducer
// 存储了comments状态
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


