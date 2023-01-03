import axios, { AxiosResponse } from "axios";
import UserService from "../services/UserService";

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const mockUser = {
  name: "John Doe",
  email: "johndoe@example.com",
  sub: "google-oauth2|12345678901234",
  picture: "https://bit.ly/john-doe",
}

const userService = new UserService();

describe('login flow (broken)', () => {
  it('should post user data to DB', async () => {

    // Desired data from axios
    const userData = {
      id: 1,
      ...mockUser
    }

    // Expected response from axios
    const mockedResponse: AxiosResponse = {
      data: userData,
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
    };

    // Mock axios POST response
    mockedAxios.post.mockResolvedValueOnce(mockedResponse);

    expect(axios.post).not.toHaveBeenCalled();
    const data = await userService.createUser(mockUser);
    expect(axios.post).toHaveBeenCalled();

    expect(data).toEqual(userData);
  });
})
