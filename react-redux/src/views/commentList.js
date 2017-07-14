import React,{Component} from 'react';
import PropTypes from 'prop-types';
import List from './list';
import { connect } from 'react-redux'

class CommentList extends Component {
	static PropTypes = {
		comments: PropTypes.object
	}
	static defaultProps = {
		comments: []
	}
	componentWillMount() {
	}
	componentWillUpdate() {
		console.log(this.props.comments)
	}
	render() {
		return (
			<div>
			{	
				this.props.comments.map((item,index) => 
					<List item={item} key={index}/>	
				)
			}
			</div>
		)
	}
}


const mapStateToProps = (state) => {
  return {
    comments: state.comments
  }
}
export default  connect(mapStateToProps)(CommentList) ;