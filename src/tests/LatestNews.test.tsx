import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { NewsContext } from '../context/NewsContext';
import LatestNews from '../components/LatestNews/LatestNews';
import { mockData } from './mock/mockData';

export const mockContextValue = {
  dataNews: mockData.items,
  filteredNews: mockData.items,
  isLoading: false,
  filterByString: () => {},
  filterByNoticia: () => {},
  filterByRelease: () => {},
  filterByRecent: () => {},
  filterByFavorites: () => {},
  filterByOldest: () => {},
};

describe('LatestNews component testing', () => {
  it('1. Renders correctly and displays latest news information', () => {
    render(
      <NewsContext.Provider value={ mockContextValue }>
        <BrowserRouter>
          <LatestNews />
        </BrowserRouter>
      </NewsContext.Provider>,
    );

    // Verifique se o título da notícia é renderizado
    const newsTitle = screen.getByText(mockData.items[0].titulo);
    expect(newsTitle).toBeInTheDocument();

    // Verifique se a introdução da notícia é renderizada
    const newsIntro = screen.getByText(mockData.items[0].introducao);
    expect(newsIntro).toBeInTheDocument();

    // Verifique se a imagem da notícia é renderizada
    const newsImage = screen.getByAltText(mockData.items[0].titulo);
    expect(newsImage).toBeInTheDocument();
  });
});
