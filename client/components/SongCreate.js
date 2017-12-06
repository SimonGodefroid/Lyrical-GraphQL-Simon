import React, { Component } from 'react';

class SongCreate extends Component {
	constructor(props) {
		super(props);
		this.state = { title: '' };
		// this.onHandleChange = this.onHandleChange.bind(this);
	}
	// onHandleChange(evt) {
	// 	this.setState({
	// 		title: evt.target.value
	// 	});
	// }

	render() {
		return (
			<div className={``}>
				<h3>Create a new song</h3>
				<form className={``}>
					<label>Song Title:</label>
					<input
						className={``}
						// onChange={evt => this.onHandleChange(evt)}
						onChange={evt => this.setState({ title: evt.target.value })}
						value={this.state.title}
					/>
				</form>
			</div>
		);
	}
}

export default SongCreate;
