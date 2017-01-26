import React from "react";

export default class UsersList extends React.Component {

	getUserItem(user, i){
		return (
			<li key={i} onClick={()=> this.props.onSelectUser(user, this.getRandomColor() ) }>
				{user.name}
			</li>
		);
	}

	getRandomColor(){
		if(Math.random() > .5)
			return "red";
		else
			return "green";
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
