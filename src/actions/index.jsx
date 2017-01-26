import UsersService from "../services/UsersService.es6";

export const RECEIVE_USERS = "receiveUsers";
export const SELECT_USER = "selectUser";
export const RANDOMIZE_COLOR = "randomizeColor";

export function fetchUsers(){
	return function(dispatch){
		UsersService.getAllUsers()
			.then((users) => dispatch({type: RECEIVE_USERS, users}))
	}
}

export function selectUser(user){
	return {type: SELECT_USER, user};
}

export function randomizeColor(color){
	return {type: RANDOMIZE_COLOR, color: color}
}
