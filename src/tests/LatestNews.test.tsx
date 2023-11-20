import { screen } from '@testing-library/react';
import { NewsContext } from '../context/NewsContext';
import LatestNews from '../components/LatestNews/LatestNews';
import { mockData } from './mock/mockData';
import renderWithRouter from '../helpers/renderWithRouter';

export const mockContextValue = {
  dataNews: mockData.items,
  filteredNews: mockData.items,
  filterByString: () => {},
  filterByNoticia: () => {},
  filterByRelease: () => {},
  filterByRecent: () => {},
  filterByFavorites: () => {},
};

describe('LatestNews', () => {
  it('renders correctly and displays latest news information', () => {
    renderWithRouter(
      <NewsContext.Provider value={ mockContextValue }>
        <LatestNews />
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
