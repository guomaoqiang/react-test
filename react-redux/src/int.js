import React,{Component} from 'react';

// import { connect } from 'react-redux';

export default class Int extends Component {

	style = {
		'fontSize':'50px',
		'position':'absolute',
		'top':'20%',
		'left':'40%',
		'right':0,
		'bottom':0,
	} 
	componentWillMount() {
		console.log('%c Int--componentWillMount','color:blue');
	}
	componentDidMount() {
		console.log('%c Int--componentDillMount','color:blue');
	}
	componentWillReceiveProps() {
		console.log('%c Int--componentWillReceiveProps','color:blue');
	}
	shouldComponentUpdate(nextProps,nextSate) {
		console.log('%c Int--shouldComponentUpdate','color:blue');
		// if (nextProps.num === this.props.num) {
		// 	return false;
		// };
		return true;
	}
	componentWillUpdate() {
		console.log('%c Int--componentWillUpdate','color:blue');
	}
	componentDidUpdate() {
		console.log('%c Int--componentDidUpdate','color:blue');
	}
	componentWillUnmount() {
		console.log('%c Int--componentWillUnmount','color:blue');
	}
	render() {
		console.log('%c Int--render','color:blue');
		return (
			<div>
				<span style={this.style}>{this.props.num}</span>
			</div>
		)
	}
}