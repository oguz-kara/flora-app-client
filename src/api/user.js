import axios from 'axios';

export async function updateUser(user) {
  try {
    const response = await axios.put(
      `http://localhost:8000/api/users/${user.id}`,
      { ...user },
      {
        withCredentials: true,
      }
    );
  } catch (err) {
    console.log({ axiosUpdateUserError: err });
  }
}

export async function getUsers() {
  try {
    const response = await axios.get('http://localhost:8000/api/users', {
      withCredentials: true,
    });
  } catch (err) {
    console.log({ axiosGetUsersError: err });
  }
}
