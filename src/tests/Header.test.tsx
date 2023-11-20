import { fireEvent, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { NewsContext } from '../context/NewsContext';
import Header from '../components/Header/Header';
import renderWithRouter from '../helpers/renderWithRouter';

const mockContextValue = {
  dataNews: [],
  filteredNews: [],
  filterByString: vi.fn(),
  filterByRecent: vi.fn(),
  filterByRelease: vi.fn(),
  filterByNoticia: vi.fn(),
  filterByFavorites: vi.fn(),
};

describe('Header', () => {
  const SEARCH_INPUT = 'search-input';
  it('renders correctly', () => {
    renderWithRouter(
      <NewsContext.Provider value={ mockContextValue }>
        <Header filterNewsRef={ { current: null } } />
      </NewsContext.Provider>,
    );

    const logo = screen.getByTestId('logo');
    expect(logo).toBeInTheDocument();

    const input = screen.getByTestId(SEARCH_INPUT);
    expect(input).toBeInTheDocument();

    expect(screen.getByPlaceholderText('Buscar notícia')).toBeInTheDocument();
  });

  it('calls the filterByString function when the search icon is clicked', () => {
    renderWithRouter(
      <NewsContext.Provider value={ mockContextValue }>
        <Header filterNewsRef={ { current: null } } />
      </NewsContext.Provider>,
    );

    fireEvent.change(screen.getByTestId(SEARCH_INPUT), { target: { value: 'test' } });
    fireEvent.click(screen.getByTestId('search-icon'));

    expect(mockContextValue.filterByString).toHaveBeenCalledWith('test');
  });

  it('calls filterByString with input value when Enter is pressed', () => {
    renderWithRouter(
      <NewsContext.Provider value={ mockContextValue }>
        <Header filterNewsRef={ { current: null } } />
      </NewsContext.Provider>,
    );

    const input = screen.getByTestId(SEARCH_INPUT);
    fireEvent.change(input, { target: { value: 'test' } });
    fireEvent.keyPress(input, { key: 'Enter', code: 'Enter' });

    expect(mockContextValue.filterByString).toHaveBeenCalledWith('test');
  });
});
