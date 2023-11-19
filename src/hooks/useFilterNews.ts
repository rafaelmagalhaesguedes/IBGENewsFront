import { useState, useCallback, useEffect } from 'react';
import Swal from 'sweetalert2';
import { NewsType } from '../types/types';

const useFilterNews = (news: NewsType[]) => {
  const [filteredNews, setFilteredNews] = useState<NewsType[]>([]);

  // Set filtered news to news when news is updated
  useEffect(() => {
    if (filteredNews.length === 0) {
      setFilteredNews(news);
    }
  }, [filteredNews, news]);

  // Filter by string
  const filterByString = useCallback((search: string) => {
    const filtered = news.filter(({ titulo, destaque }) => {
      const byTitle = titulo.toLowerCase().includes(search.toLowerCase());
      const byDestaque = destaque.toString().toLowerCase().includes(search.toLowerCase());
      return byTitle || byDestaque;
    });
    if (filtered.length === 0) {
      Swal.fire({
        title: 'Nenhuma notícia encontrada!',
        text: 'Tente novamente com outros termos de busca.',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }
    setFilteredNews(filtered);
  }, [news]);

  // Filter by recent
  const filterByRecent = useCallback(() => {
    const sortedNews = [...news].sort((a, b) => (new Date(b.data_publicacao)
      .getTime() - new Date(a.data_publicacao).getTime()));
    setFilteredNews(sortedNews);
  }, [news]);

  // Filter by type noticia
  const filterByNoticia = useCallback(() => {
    const filtered = news.filter(({ tipo }) => tipo === 'Notícia');
    setFilteredNews(filtered);
  }, [news]);

  // Filter by type release
  const filterByRelease = useCallback(() => {
    const filtered = news.filter(({ tipo }) => tipo === 'Release');
    console.log(filtered);
    setFilteredNews(filtered);
  }, [news]);

  // Filter by favorites
  const filterByFavorites = useCallback(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const filtered = news.filter((newsItem) => favorites
      .some((favorite: NewsType) => favorite.id === newsItem.id));
    setFilteredNews(filtered);
  }, [news]);

  return {
    filteredNews,
    filterByString,
    filterByRecent,
    filterByNoticia,
    filterByRelease,
    filterByFavorites,
  };
};

export default useFilterNews;
