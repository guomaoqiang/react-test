import React,{Component} from 'react';

// import { connect } from 'react-redux';

export default class Num extends Component {

	style = {
		'fontSize':'50px',
		'position':'absolute',
		'top':'20%',
		'left':'20%',
		'right':0,
		'bottom':0,
	} 
	componentWillMount() {
		console.log('%c num--componentWillMount','color:blue');
	}
	componentDidMount() {
		console.log('%c num--componentDillMount','color:blue');
	}
	componentWillReceiveProps() {
		console.log('%c num--componentWillReceiveProps','color:blue');
	}
	shouldComponentUpdate(nextProps,nextSate) {
		console.log('%c num--shouldComponentUpdate','color:blue');
		// if (nextProps.num === this.props.num) {
		// 	return false;
		// };
		return true;
	}
	componentWillUpdate() {
		console.log('%c num--componentWillUpdate','color:blue');
	}
	componentDidUpdate() {
		console.log('%c num--componentDidUpdate','color:blue');
	}
	componentWillUnmount() {
		console.log('%c num--componentWillUnmount','color:blue');
	}
	render() {
		console.log('%c num--render','color:blue');
		return (
			<div>
				<span style={this.style}>
				{this.props.num}
				{this.props.children}
				</span>
			</div>
		)
	}
}