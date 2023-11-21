import { useState, useCallback, useEffect } from 'react';
import Swal from 'sweetalert2';
import moment from 'moment';
import { NewsType } from '../types/types';

const useFilterNews = (news: NewsType[]) => {
  const [filteredNews, setFilteredNews] = useState<NewsType[]>([]);

  // Filter by recent
  const filterByRecent = useCallback(() => {
    const sortedNews = [...news].sort((a, b) => (new Date(b.data_publicacao)
      .getTime() - new Date(a.data_publicacao).getTime()));
    // Remove first item (most recent)
    sortedNews.shift();
    setFilteredNews(sortedNews);
  }, [news]);

  // Set filtered news to news when news is updated
  useEffect(() => {
    filterByRecent();
  }, [news, filterByRecent]);

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
        timer: 2500,
        timerProgressBar: true,
      });
    }
    setFilteredNews(filtered);
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

  // Filter by oldest
  const filterByOldest = useCallback((ascending = true) => {
    const sortedNews = [...news].sort((a, b) => {
      // Sort by ascending or descending with moment.js
      const timeA = moment(a.data_publicacao, 'DD/MM/YYYY HH:mm:ss');
      const timeB = moment(b.data_publicacao, 'DD/MM/YYYY HH:mm:ss');
      return ascending ? timeA.diff(timeB) : timeB.diff(timeA);
    });
    setFilteredNews(sortedNews);
  }, [news]);

  return {
    filteredNews,
    filterByString,
    filterByRecent,
    filterByNoticia,
    filterByRelease,
    filterByFavorites,
    filterByOldest,
  };
};

export default useFilterNews;
