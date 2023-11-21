import { screen, fireEvent, render } from '@testing-library/react';
import { mockData } from './mock/mockData';
import { NewsContext } from '../context/NewsContext';
import CardNews from '../components/CardNews/CardNews';

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

describe('CardNews component testing', () => {
  it('renders news cards correctly', () => {
    render(
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
    const { getByText, queryAllByTestId } = render(
      <NewsContext.Provider value={ mockContextValue }>
        <CardNews />
      </NewsContext.Provider>,
    );

    expect(queryAllByTestId('news-item')).toHaveLength(10);

    fireEvent.click(getByText('Mais notícias'));

    expect(queryAllByTestId('news-item')).toHaveLength(20);
  });
});
