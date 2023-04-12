import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultsearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultsearchTerm);
  }, [defaultsearchTerm]);

  const search = async (term) => {
    try {
      const response = await youtube.get('/search', {
        params: { q: term },
      });
      setVideos(response.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  return [videos, search];
};

export default useVideos;
