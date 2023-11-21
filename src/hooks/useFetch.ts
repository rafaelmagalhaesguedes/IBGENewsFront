import { useEffect, useState } from 'react';
import { NewsType } from '../types/types';

function useFetch() {
  const [dataNews, setDataNews] = useState<NewsType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  //
  const URL = 'https://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100';
  //

  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setDataNews(data.items);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchNews();
  }, [URL]);

  return { dataNews, isLoading };
}

export default useFetch;
