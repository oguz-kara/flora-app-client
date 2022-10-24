import axios from 'axios';

export const login = async ({ username, password }) => {
  try {
    const response = await axios.post(
      'http://localhost:8000/api/auth/login',
      {
        email: username,
        password: password,
      },
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (err) {
    console.log({ loginError: err });
    return null;
  }
};

export const register = async ({
  username,
  password,
  verifyPassword,
  name,
}) => {
  try {
    const response = await axios.post(
      'http://localhost:8000/api/auth/register',
      {
        email: username,
        password,
        verifyPassword,
        name,
      },
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (err) {
    console.log({ loginError: err });
    return null;
  }
};

export const logout = async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/auth/logout', {
      withCredentials: true,
    });
    return response.data;
  } catch (err) {
    console.log({ logoutError: err });
    return null;
  }
};
