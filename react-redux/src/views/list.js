import React,{ Component } from 'react'

import PropTypes from 'prop-types'

// 只负责ui的展示  不涉及数据处理，指依赖props
class list extends Component {

	static PropTypes = {
		item : PropTypes.object
	};

	render() {
		const { item } = this.props;
		return (
			<div className='commentList'>
				<div className='item'>
					<span className='user'>{item.userName}：</span>
					<span className='cont'>{item.content}</span>
					<span className='time'>12分钟前</span>
					<span className='dele'>删除</span>
				</div>
			</div>
		)
	}
}


export default list;