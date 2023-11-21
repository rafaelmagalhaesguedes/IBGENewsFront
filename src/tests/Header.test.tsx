import { render, fireEvent, screen } from '@testing-library/react';
import { vi } from 'vitest';
import Header from '../components/Header/Header';
import { NewsContext } from '../context/NewsContext';

// Definindo constantes para as literais
const SEARCH_INPUT = 'search-input';
const SEARCH_ICON = 'search-icon';
const LOGO = 'logo';

describe('Header component testing', () => {
  let filterNewsRefMock: React.RefObject<HTMLDivElement>;
  let filterByStringMock: any;
  let mockContextValue: any;

  beforeEach(() => {
    filterNewsRefMock = { current: { scrollIntoView: vi.fn() } as any };
    filterByStringMock = vi.fn();

    mockContextValue = {
      dataNews: [],
      isLoading: false,
      filteredNews: [],
      filterByNoticia: vi.fn(),
      filterByString: filterByStringMock,
      filterByData: vi.fn(),
      filterByFonte: vi.fn(),
      clearFilters: vi.fn(),
    };
  });

  it('1. Renders correctly', () => {
    const { getByTestId } = render(
      <NewsContext.Provider value={ mockContextValue }>
        <Header filterNewsRef={ filterNewsRefMock } />
      </NewsContext.Provider>,
    );

    expect(getByTestId(LOGO)).toBeInTheDocument();
    expect(getByTestId(SEARCH_INPUT)).toBeInTheDocument();
    expect(getByTestId(SEARCH_ICON)).toBeInTheDocument();
  });

  it('2. Handles search input change', () => {
    const { getByTestId } = render(
      <NewsContext.Provider value={ mockContextValue }>
        <Header filterNewsRef={ filterNewsRefMock } />
      </NewsContext.Provider>,
    );

    fireEvent.change(getByTestId(SEARCH_INPUT), { target: { value: 'test' } });

    expect((getByTestId(SEARCH_INPUT) as HTMLInputElement).value).toBe('test');
  });

  it('3. Handles search icon click', () => {
    const { getByTestId } = render(
      <NewsContext.Provider value={ mockContextValue }>
        <Header filterNewsRef={ filterNewsRefMock } />
      </NewsContext.Provider>,
    );

    fireEvent.click(getByTestId(SEARCH_ICON));

    expect(filterByStringMock).toHaveBeenCalled();
  });

  it('4. Handles Enter key press', () => {
    const { getByTestId } = render(
      <NewsContext.Provider value={ mockContextValue }>
        <Header filterNewsRef={ filterNewsRefMock } />
      </NewsContext.Provider>,
    );

    fireEvent.keyPress(getByTestId(SEARCH_INPUT), { key: 'Enter', code: 13, charCode: 13 });

    expect(filterByStringMock).toHaveBeenCalled();
  });

  it('5. Renders correctly', () => {
    render(
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

  it('6. Calls the filterByString function when the search icon is clicked', () => {
    render(
      <NewsContext.Provider value={ mockContextValue }>
        <Header filterNewsRef={ { current: null } } />
      </NewsContext.Provider>,
    );

    fireEvent.change(screen.getByTestId(SEARCH_INPUT), { target: { value: 'test' } });
    fireEvent.click(screen.getByTestId('search-icon'));

    expect(mockContextValue.filterByString).toHaveBeenCalledWith('test');
  });
});
