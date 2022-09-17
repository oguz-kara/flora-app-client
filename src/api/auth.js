import axios from 'axios';

export const login = async ({username,password}) => {
  axios.withCredentials = true;
  try {
    const response = await axios.post(
      'http://localhost:8000/api/auth/login',
      {
        email: username,
        password,
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
