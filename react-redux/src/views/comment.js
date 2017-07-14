import React,{Component} from 'react';
import PropTypes from 'prop-types';

class Comment extends Component {
	static PropTypes = {
		onSubmit: PropTypes.func
	}
	constructor() {
		super();
		this.state = {
			userName : '',
			content : ''
		};
	}
	componentDidMount() {

	}
	handleUsernameBlur(e) {
		this.setState({
			userName: e.target.value
		})
	}
	handleUsernameChange(e) {
		this.setState({
			userName: e.target.value
		})
	}
	storage(attr,value) {
		localStorage.setItem(attr,value)
	}
	bandleContentChange(e) {
		this.setState({
			content: e.target.value
		})
	}
	release() {
		let user = this.state.userName.replace(/(^\s*)|(\s*$)/g, ""),   // 去掉前后空格
			content = this.state.content.replace(/(^\s*)|(\s*$)/g, "");
		if (!user) return alert('用户名不能为空');
		if (!content) return alert('内容不能为空');
		this.storage('userName',user);
		this.storage('content',content);
		this.props.onSubmit && this.props.onSubmit({userName:user,content:content})
		this.setState({userName:'',content:''});
	}
	render() {
		return(
			<div className='comment'>
				<div className='commentContent'>
					<div className='useName'>
						<span>用户名：</span>
						<input
							value={this.state.userName}
      						onBlur={this.handleUsernameBlur.bind(this)}
      						onChange={this.handleUsernameChange.bind(this)} 
      					/>
					</div>
					<div className='content'>
						<span>评论内容：</span>
						<textarea 
							onChange={this.bandleContentChange.bind(this)}
							value={this.state.content}
							>
						</textarea>
					</div>
					<div className='release'>
						<button onClick={this.release.bind(this)}>发布</button>
					</div>
				</div>
			</div>
		)
	}
};



export default Comment;

