import { screen, fireEvent, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
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
  it('1. Renders news cards correctly', () => {
    render(
      <BrowserRouter>
        <NewsContext.Provider value={ mockContextValue }>
          <CardNews />
        </NewsContext.Provider>
      </BrowserRouter>,
    );

    const title = screen.getByText(mockData.items[0].titulo);
    const introduction = screen.getByText(mockData.items[0].introducao);
    const image = screen.getByAltText(mockData.items[0].titulo);

    expect(title).toBeInTheDocument();
    expect(introduction).toBeInTheDocument();
    expect(image).toBeInTheDocument();
  });

  it('2. Loads more news when button is clicked', () => {
    const { getByText, queryAllByTestId } = render(
      <BrowserRouter>
        <NewsContext.Provider value={ mockContextValue }>
          <CardNews />
        </NewsContext.Provider>
      </BrowserRouter>,
    );

    expect(queryAllByTestId('news-item')).toHaveLength(10);

    fireEvent.click(getByText('Mais notícias'));

    expect(queryAllByTestId('news-item')).toHaveLength(20);
  });

  it('3. Displays no news found message when filteredNews is empty', () => {
    const emptyContextValue = {
      ...mockContextValue,
      filteredNews: [],
    };

    render(
      <NewsContext.Provider value={ emptyContextValue }>
        <CardNews />
      </NewsContext.Provider>,
    );

    const noNewsMessage = screen.getByText('Nenhuma notícia encontrada');
    expect(noNewsMessage).toBeInTheDocument();
  });
});
