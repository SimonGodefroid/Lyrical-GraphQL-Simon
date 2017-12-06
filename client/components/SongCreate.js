import React, { Component } from 'react';
import gql from 'graphql-tag';
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

	onSubmit(event) {
		event.preventDefault();
	}
	render() {
		return (
			<div className={``}>
				<h3>Create a new song</h3>
				<form className={``} onSubmit={this.onSubmit.bind(this)}>
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
const mutation = gql`
	mutation {
		addSong(title: "Dog call") {
			id
			title
		}
	}
`;

export default SongCreate;
