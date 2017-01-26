import {RECEIVE_USERS, SELECT_USER, RANDOMIZE_COLOR} from "../actions/index.jsx";
import {combineReducers} from "redux";

function usersReducer(state = [], action){
	switch (action.type){
		case RECEIVE_USERS:
			return action.users;
		default:
			return state;
	}
}

function selectedUserReducer(state = {}, action){
	switch (action.type){
		case SELECT_USER:
			return action.user;
		case RANDOMIZE_COLOR:
			return Object.assign({}, state, {color: action.color});
		default:
			return state;
	}
}

export default combineReducers({
	user: selectedUserReducer,
	users: usersReducer
});

