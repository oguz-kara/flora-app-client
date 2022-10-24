import axios from 'axios';

export const fetchAll = async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/product-unit', {
      withCredentials: true,
    });
    return {
      response: response && response.data && response.data,
      error: null,
    };
  } catch (err) {
    return {
      response: null,
      error: err,
    };
  }
};
