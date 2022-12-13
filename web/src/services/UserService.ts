import axios from "axios";
import { User } from "@auth0/auth0-react";

class UserService {

  /** POST /users
* Creates a new user
*/
  public async createUser(userData: User) {
    try {
      // make a POST request to the server to create a new user
      // will eventually refactor into an apiclient facade (http-common) or similar
      const res = await axios.post('/users/new', userData);
      return res.data;
    } catch (error) {
      throw error;
    }
  }

  /** GET /users
* Description: Retrieves a list of all users.
* Request data format: None
* Response data format: JSON
* Authentication: None
*/
  public async getUsers() {
    try {
      const res = await axios.get('/users');
      return res.data;
    } catch (error) {
      throw error;
    }
  }

  /** GET /users/:user_id
* Description: Retrives the profile of a user.
* Request data format: None
* Response data format: JSON
* Authentication: None
*/
  public async getUser(userId: number) {
    try {
      const res = await axios.get(`/users/${userId}`)
      return res.data;
    } catch (error) {
      throw error;
    }
  }

}

export default UserService
