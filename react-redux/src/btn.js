import React,{Component} from 'react';



export default class Btn extends Component {

	css = {
		'width':'100px',
		'height':'50px',
		'float':'left',
		'backgroundColor':'#999',
		'marginLeft':"50px",
		'textAlign':'center',
		'lineHeight':"50px"
	}
	componentWillMount() {
		console.log('%c button--componentWillMount','color:orange');
	}
	componentDidMount() {
		console.log('%c button--componentDillMount--'+ +new Date(),'color:orange');
	}
	componentWillReceiveProps(nextProps,nextSate) {
		console.log('this.props',this.props);
		console.log('nextProps',nextProps);
		console.log('%c button--componentWillReceiveProps','color:orange');
	}
	shouldComponentUpdate(nextProps,nextSate) {
		console.log('%c button--shouldComponentUpdate','color:orange');
		// if (nextProps === this.props) {
			// return false
		// }
		return true;
	}
	componentWillUpdate() {
		console.log('%c button--componentWillUpdate','color:orange');
	}
	componentDidUpdate() {
		console.log('%c button--componentDidUpdate','color:orange');
	}
	componentWillUnmount() {
		console.log('%c button--componentWillUnmount','color:orange');
	}
	render() {
		console.log('%c button--render','color:orange');
		return (
			<div style={this.css} onClick={()=>{this.props.func()}}>{this.props.text}</div>
		)
	}
}