import { useEffect, useState } from 'react';
import { NewsType } from '../types/types';

function useFetchApi() {
  const [dataNews, setDataNews] = useState<NewsType[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await fetch('http://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100');
      const data = await response.json();
      setDataNews(data.items);
    };
    fetchNews();
  }, []);

  return { dataNews };
}

export default useFetchApi;
