import React from "react";
import UsersList from "./UsersList.jsx";
import UsersService from "../services/UsersService.es6";
import UserPage from "./UserPage.jsx";


export default class App extends React.Component {

	constructor(){
		super();

		this.state = {
			users: null,
			selectedUser: null
		};

		UsersService.getAllUsers()
			.then(this.onUsers.bind(this));
	}

	onUsers(users){
		this.setState({users: users});
	}

	onSelectUser(user){
		this.setState({selectedUser: user});
	}

	getUserPage(){
		if(this.state.selectedUser)
			return <UserPage {...this.state.selectedUser}/>;
		else
			return <p>Please select a user</p>
	}

	render(){
		return (
			<div>
				<UsersList list={this.state.users} onSelectUser={this.onSelectUser.bind(this)} />
				{ this.getUserPage() }
			</div>
		)
	}

}
