import { objectToQueryString } from '../utils/objectToQueryString';
import { isArrayAndHasItems, isObjectAndHasItems } from '../utils/checkTypes';
import toast from '../config/toast-message';
import { useCallback, useLayoutEffect, useState } from 'react';
import axios from 'axios';

const url = 'http://localhost:8000/api';

export default function useAxios({
  endpoint = '/',
  method = 'get',
  options = { headers: { multipart: false }, credentials: true },
}) {
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

  const refetch = useCallback(
    (
      { data = '', query = '', params = '' } = {
        data: '',
        query: '',
        params: '',
      },
      cb = null
    ) => {
      if (options && options.credentials) axios.defaults.withCredentials = true;
      const asyncLoad = async ({ query }) => {
        setLoading(true);
        try {
          const response = await axios({
            method: method,
            url: url + endpoint + params + objectToQueryString(query),
            data: data ? data : {},
            headers: { ...getHeaders() },
          });
          const responseData = response.data ? response.data : [];
          const responseBody =
            response.data && response.data.data ? response.data.data : [];

          if (
            isArrayAndHasItems(responseBody) ||
            isObjectAndHasItems(responseBody)
          ) {
            setResponse(responseBody);
            if (cb && typeof cb === 'function') cb(responseBody);
            method !== 'get' && toast.success(responseData.message);
            return;
          } else if (
            isObjectAndHasItems(responseData) &&
            responseData.message
          ) {
            setResponse([]);
            method !== 'get' && toast.success(responseData.message);
            return;
          } else if (response && response.message) {
            setResponse([]);
            method !== 'get' && toast.success(response.message);
            return;
          } else {
            setResponse([]);
            method !== 'get' && toast.warn('No response data found!');
            return;
          }
        } catch (e) {
          setError(e);
        } finally {
          const timeout = setTimeout(() => {
            setLoading(false);
            clearTimeout(timeout);
          }, 250);
        }
      };
      asyncLoad({ query: query });
    },
    [endpoint, method, options]
  );

  useLayoutEffect(() => {
    if (method === 'get') {
      refetch();
    }
  }, [endpoint]);

  return { response, loading, error, setResponse, refetch };
}
