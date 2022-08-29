import { useState, useLayoutEffect, useCallback, useEffect } from 'react';
import useAxios from './useAxios';

export default function useSearch({
  endpoint = '/',
  params = {},
  queryOnEmpty = {},
} = {}) {
  const [searchTerm, setSearchTerm] = useState('');
  const { response, loading, error, refetch } = useAxios({
    method: 'get',
    endpoint: endpoint,
  });

  const exec = useCallback(() => {
    if (searchTerm !== '') {
      const delayDebounceFn = setTimeout(() => {
        refetch({ params: params, query: { name: searchTerm } });
        console.log({ response });
      }, 250);
      return () => clearTimeout(delayDebounceFn);
    } else {
      refetch({ query: queryOnEmpty });
    }
  }, [searchTerm, params, queryOnEmpty, refetch]);

  useEffect(() => {
    exec();
  }, [searchTerm]);

  return {
    data: response,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    refetch: exec,
  };
}
