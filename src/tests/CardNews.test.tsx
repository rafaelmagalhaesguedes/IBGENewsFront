import { screen, fireEvent } from '@testing-library/react';
import { mockData } from './mock/mockData';
import { NewsContext } from '../context/NewsContext';
import CardNews from '../components/CardNews/CardNews';
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

describe('CardNews Test', () => {
  it('renders news cards correctly', () => {
    renderWithRouter(
      <NewsContext.Provider value={ mockContextValue }>
        <CardNews />
      </NewsContext.Provider>,
    );

    const title = screen.getByText(mockData.items[1].titulo);
    const introduction = screen.getByText(mockData.items[1].introducao);
    const image = screen.getByAltText(mockData.items[1].titulo);

    expect(title).toBeInTheDocument();
    expect(introduction).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });

  it('loads more news when button is clicked', () => {
    const { getByText, queryAllByTestId } = renderWithRouter(
      <NewsContext.Provider value={ mockContextValue }>
        <CardNews />
      </NewsContext.Provider>,
    );

    expect(queryAllByTestId('news-item')).toHaveLength(10);

    fireEvent.click(getByText('Mais notícias'));

    expect(queryAllByTestId('news-item')).toHaveLength(20);
  });
});
