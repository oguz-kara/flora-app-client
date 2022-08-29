import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useFetchImages() {
  const [images, setImages] = useState('');

  const fetch = (urlList) => {
    axios.withCredentials = true;
    urlList.forEach((url, index) => {
      axios
        .get(url, { responseType: 'blob' })
        .then((res) => {
          setImages((prev) => [
            ...prev,
            new File([res.data], `image-${index}`),
          ]);
        })
        .catch((e) => console.log(e));
    });
  };

  return { images, fetch };
}
