import * as actionType from './actionType';



// action creators
export const reductionComments = () => {
  return { 
  	type: actionType.REDUCETION_COMMENTS, 
  	}
}

export const addComment = (e) => {
  return { 
  	type: actionType.ADD_COMMENT,
  	e:e
  }
}

export const reduceComment = () => {
  return { 
  	type: actionType.REDUCE_COMMENT,
  }
}

export const add_async = (times=1000) => {
	return (dispatch) => {
		setTimeout(()=>{
			dispatch(addComment());
		},times)
	}
}

export const ajax = (e) => {
	console.log(e);
	return (dispatch) => {
		fetch('https://kitgp.pingan.com.cn/jkkit-gp/service').then((res) => {
			dispatch(addComment())
		})
	}
}

