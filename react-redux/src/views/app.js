import React,{Component} from 'react';
import Comment from './comment';
import CommentList from './commentList';
import { connect } from 'react-redux';

import { addComment } from '../reduces/reduces';

class App extends Component {
	state = {
		content:[]
	}
	componentWillMount() {

	};
	handleSubmitComment(e) {
		// this.state.content.push(e)
		// const { com } = this.props;
		// const newCom = [...com,e]
		// console.log(this.props);
		// console.log(newCom);
		// this.setState({
		// 	content: this.state.content
		// });
		// const arr = [e];
		this.props.submit(e);
	}
	render() {
		return (
			<div className='container'>
				<Comment 
					onSubmit={this.handleSubmitComment.bind(this)} />
				<CommentList conts={this.state.content}/>
			</div>
		)
	}
}


const mapStateToProps = (state) => {
  return {
    com: state.comments
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submit: (data) => {
      dispatch(addComment(data));
    }
  };
}

// 和上面的等同
const mapDispatchToProps = (dispatch) => {
  return {
    submit: bindActionCreators(addComment(data),dispatch)
  };
}

// const mapDispatchToProps = {
// 	handleSubmitComment: (ev) => {
//       addComment(ev);
//     }
// }

export default connect(mapStateToProps,mapDispatchToProps)(App);