import axios from "axios";

export interface UserData {
  name: string,
  email: string,
  sub: string,
  profilePicture: string,
  // might need more data fields
}

class UserService {
  // Create a new user
  public async createUser(userData: UserData) {
    try {
      // make a POST request to the server to create a new user
      // will eventually refactor into an apiclient facade (http-common) or similar
      const res = await axios.post('/api/users', userData);
      return res.data;
    } catch (error) {
      throw error;
    }
  }
}

export default UserService
