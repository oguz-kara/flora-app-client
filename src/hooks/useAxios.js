import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

const url = 'http://localhost:8000/api';

export default function useAxios(
  endpoint,
  method = 'get',
  options = { headers: { multipart: false }, credentials: true }
) {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getHeaders = () => {
    return {
      'Content-Type':
        options && options.headers && options.headers.multipart
          ? 'multipart/form-data'
          : 'application/json',
    };
  };

  const exec = useCallback(
    (data) => {
      if (data) {
        console.log({ name: data.get('name') });
      }
      if (options && options.credentials) axios.defaults.withCredentials = true;

      const asyncLoad = async () => {
        setLoading(true);
        try {
          const response = await axios({
            method: method,
            url: url + endpoint,
            data: data && Object.keys(data).length > 0 ? data : {},
            headers: { ...getHeaders() },
          });
          setResponse(response);
        } catch (e) {
          setError(e);
        } finally {
          setLoading(false);
        }
      };

      asyncLoad();
    },
    [endpoint, method, options]
  );

  useEffect(() => {
    if (method === 'get') {
      exec();
    }
  }, [endpoint]);

  return { response, loading, error, exec };
}
