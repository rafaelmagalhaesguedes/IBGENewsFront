import { useEffect, useState } from 'react';
import { NewsType } from '../types/types';

function useFetchApi() {
  const [news, setNews] = useState<NewsType[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await fetch('http://servicodados.ibge.gov.br/api/v3/noticias/?qtd=100');
      const data = await response.json();
      setNews(data.items);
    };
    fetchNews();
  }, []);

  return { news };
}

export default useFetchApi;
