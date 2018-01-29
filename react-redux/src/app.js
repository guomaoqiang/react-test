import React,{Component} from 'react';

import { connect } from 'react-redux';

import Btn from './btn';
import Num from './num';
import Int from './int';

import {
	reductionComments,
	addComment,
	add_async,
	ajax,
	reduceComment
} from './reduce/action';

const NumC = connect((state)=>{
	console.log(23);
	return {
		num:state.num,
	}
},null)(Num);

const IntC = connect((state) => {
	let num = state.num;
	return {
		...state,
		num: ++num
	}
})(Int)

class App extends Component {
	static contextTypes = {
		store: React.PropTypes.object
	}
	ajax() {
		// setTimeout(() => {
		// 	this.context.store.dispatch(addComment())
		// },5000)
	}
	componentWillMount() {
		// this.props.add();
		console.log(this.props.num);
		console.log('%c index--componentWillMount','color:red');
	}
	componentDidMount() {
		// const { dispatch} = this.props
		// console.log(dispatch);
		// this.props.add();
		// this.ajax();
		// let data = {
		// 	appKey:"P_JKOPEN_SJNSYH",
		// 	method:"info.getNewsContent",
		// 	requestData:{
		// 		newsId:75028
		// 	}
		// };
		// fetch('https://kitgp.pingan.com.cn/jkkit-gp/service',{
		// 	method:'post',
		// 	headers: {            
  //           	"Content-Type": "application/x-www-form-urlencoded" 
  //       	},        
  //       	body: JSON.stringify(data)
		// }).then((res) => {
		// 	// console.log(res.json());
		// 	// console.log(res);
		// 	res = 100;
		// 	// this.props.add(res);
		// })
		// console.log(this.context.store.dispatch());
		console.log('%c index--componentDillMount','color:red');
	}
	componentWillReceiveProps() {
		console.log('%c index--componentWillReceiveProps','color:red');
	}
	shouldComponentUpdate(nextProps,nextSate) {
		console.log('%c index--shouldComponentUpdate','color:red');
		// if (nextSate.num === this.state.num) {
		// 	return false;
		// };
		return true;
	}
	componentWillUpdate() {
		console.log('%c index--componentWillUpdate','color:red');
	}
	componentDidUpdate() {
		console.log('%c index--componentDidUpdate','color:red');
	}
	componentWillUnmount() {
		console.log('%c index--componentWillUnmount','color:red');
	}
	render() {
		console.log('%c index--render','color:red');
		// console.log(this.props);
		const {add,reduce,reduction,btnText}=this.props;
		return (
			<div>
				<NumC>
					<IntC/>
				</NumC>
				<Btn func={()=>{add(10)}} text={btnText[0]}/>
				<Btn func={()=>{reduce()}} text={btnText[1]}/>
				<Btn func={()=>{reduction()}} text={btnText[2]}/>
				<div>{this.props.e}</div>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	// console.log(1)
	return {
		add: (e) => {
			dispatch(ajax(e));
		},
		reduce: () => {dispatch(reduceComment())},
		reduction: () => {dispatch(reductionComments())}
	}
}

export default connect((state)=>{
	console.log(state);
	return {
		// num: state.num,
		btnText:state.btnText,
		e: state.e
	}
}, mapDispatchToProps)(App)

