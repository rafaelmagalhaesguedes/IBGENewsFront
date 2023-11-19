import { useEffect, useState } from 'react';
import { NewsType } from '../types/types';
import { fetchWithCache } from '../helpers/cashApi';

function useFetch() {
  const [dataNews, setDataNews] = useState<NewsType[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await fetchWithCache('http://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100');
        setDataNews(data.items);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, []);

  return { dataNews };
}

export default useFetch;
