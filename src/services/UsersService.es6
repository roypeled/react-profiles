import * as $ from "jquery";

const root = "https://jsonplaceholder.typicode.com/";

export default class UsersService {
	static getAllUsers(){
		return $.get(root + "users");
	}
}
