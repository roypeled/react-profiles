import React from "react";

export default class UsersList extends React.Component {

	getUserItem(user, i){
		return (
			<li key={i} onClick={()=> this.props.onSelectUser(user) }>
				{user.name}
			</li>
		);
	}

	render(){
		if(!this.props.list)
			return <p>Loading...</p>;

		return (
			<ul>
				{ this.props.list.map(this.getUserItem.bind(this)) }
			</ul>
		);
	}
}
