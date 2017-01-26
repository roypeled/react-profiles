import React from "react";

export default class UserPage extends React.Component {



	render(){
		return (
			<div style={ {backgroundColor: this.props.color} }>
				<dl>
					<dt>ID</dt>
					<dd>{this.props.id}</dd>

					<dt>Name</dt>
					<dd>{this.props.name}</dd>

					<dt>Email</dt>
					<dd>{this.props.email}</dd>

					<dt>Phone</dt>
					<dd>{this.props.phone}</dd>
				</dl>
			</div>
		)
	}

}
