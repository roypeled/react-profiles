import React from "react";
import UsersList from "./UsersList.jsx";
import UserPage from "./UserPage.jsx";
import {fetchUsers, selectUser, randomizeColor} from "../actions/index.jsx";
import {connect} from "react-redux";


class App extends React.Component {

	componentDidMount(){
		this.props.getUsers();
	}

	getUserPage(){
		if(this.props.selectedUser)
			return <UserPage {...this.props.selectedUser}/>;
		else
			return <p>Please select a user</p>
	}

	render(){
		return (
			<div>
				<UsersList list={this.props.users} onSelectUser={this.props.selectUser} />
				{ this.getUserPage() }
			</div>
		)
	}
}

function mapStateToProps(state){
	return {
		users: state.users,
		selectedUser: state.user
	}
}

function mapDispatchToProps(dispatch){
	return {
		getUsers: ()=> dispatch( fetchUsers() ),
		selectUser: (user, color)=> {
			dispatch( selectUser(user) );
			dispatch( randomizeColor(color) )
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
