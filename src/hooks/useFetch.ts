import { useEffect, useState } from 'react';
import { NewsType } from '../types/types';

function useFetch(url: string) {
  const [dataNews, setDataNews] = useState<NewsType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setDataNews(data.items);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchNews();
  }, [url]);

  return { dataNews, isLoading };
}

export default useFetch;
