import axios from "axios";
import { User } from "@auth0/auth0-react";
import apiClient from "../utils/common";

export interface userData {
  "name"?: string,
  "email"?: string,
  "picture"?: string,
  "sub"?: string,
}

class UserService {

  /** POST /users
* Creates a new user
*/
  public async createUser(userData: userData) {
    try {
      // make a POST request to the server to create a new user

      const res = await apiClient.post('/users/new', userData)
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
      const res = await apiClient.get('/users');
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
      const res = await apiClient.get(`/users/${userId}`)
      return res.data;
    } catch (error) {
      throw error;
    }
  }

}

export default UserService
