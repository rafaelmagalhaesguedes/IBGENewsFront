import { fireEvent, render } from '@testing-library/react';
import { NewsContext } from '../context/NewsContext';
import FilterNews from '../components/FilterNews/FilterNews';
import { mockContextValue } from './mock/mockContext';

// Definindo constantes para as literais
const MAIS_RECENTES = 'Mais recentes';
const RELEASE = 'Release';
const NOTICIA = 'Notícia';
const FAVORITAS = 'Favoritas';
const MAIS_ANTIGAS = 'Mais antigas';

describe('FilterNews component testing', () => {
  it('1. Renders correctly', () => {
    const { getByText } = render(
      <NewsContext.Provider value={ mockContextValue }>
        <FilterNews />
      </NewsContext.Provider>,
    );

    expect(getByText(MAIS_RECENTES)).toBeInTheDocument();
    expect(getByText(RELEASE)).toBeInTheDocument();
    expect(getByText(NOTICIA)).toBeInTheDocument();
    expect(getByText(FAVORITAS)).toBeInTheDocument();
    expect(getByText(MAIS_ANTIGAS)).toBeInTheDocument();
  });

  it('2. Calls the correct filter function when a button is clicked', () => {
    const { getByText } = render(
      <NewsContext.Provider value={ mockContextValue }>
        <FilterNews />
      </NewsContext.Provider>,
    );

    fireEvent.click(getByText(MAIS_RECENTES));
    expect(mockContextValue.filterByRecent).toHaveBeenCalled();

    fireEvent.click(getByText(RELEASE));
    expect(mockContextValue.filterByRelease).toHaveBeenCalled();

    fireEvent.click(getByText(NOTICIA));
    expect(mockContextValue.filterByNoticia).toHaveBeenCalled();

    fireEvent.click(getByText(FAVORITAS));
    expect(mockContextValue.filterByFavorites).toHaveBeenCalled();

    fireEvent.click(getByText(MAIS_ANTIGAS));
    expect(mockContextValue.filterByFavorites).toHaveBeenCalled();
  });

  it('3. Does not add the active class to the clicked button when the button is already active', () => {
    const { getByText } = render(
      <NewsContext.Provider value={ mockContextValue }>
        <FilterNews />
      </NewsContext.Provider>,
    );

    const recentButton = getByText(MAIS_RECENTES);
    const releaseButton = getByText(RELEASE);
    const noticiaButton = getByText(NOTICIA);
    const favoritesButton = getByText(FAVORITAS);
    const oldestButton = getByText(MAIS_ANTIGAS);

    fireEvent.click(recentButton);
    fireEvent.click(recentButton);
    expect(recentButton).toHaveClass('active');
    expect(releaseButton).not.toHaveClass('active');
    expect(noticiaButton).not.toHaveClass('active');
    expect(favoritesButton).not.toHaveClass('active');
    expect(oldestButton).not.toHaveClass('active');

    fireEvent.click(releaseButton);
    fireEvent.click(releaseButton);
    expect(recentButton).not.toHaveClass('active');
    expect(releaseButton).toHaveClass('active');
    expect(noticiaButton).not.toHaveClass('active');
    expect(favoritesButton).not.toHaveClass('active');
    expect(oldestButton).not.toHaveClass('active');

    fireEvent.click(noticiaButton);
    fireEvent.click(noticiaButton);
    expect(recentButton).not.toHaveClass('active');
    expect(releaseButton).not.toHaveClass('active');
    expect(noticiaButton).toHaveClass('active');
    expect(favoritesButton).not.toHaveClass('active');
    expect(oldestButton).not.toHaveClass('active');

    fireEvent.click(favoritesButton);
    fireEvent.click(favoritesButton);
    expect(recentButton).not.toHaveClass('active');
    expect(releaseButton).not.toHaveClass('active');
    expect(noticiaButton).not.toHaveClass('active');
    expect(favoritesButton).toHaveClass('active');
    expect(oldestButton).not.toHaveClass('active');

    fireEvent.click(oldestButton);
    fireEvent.click(oldestButton);
    expect(recentButton).not.toHaveClass('active');
    expect(releaseButton).not.toHaveClass('active');
    expect(noticiaButton).not.toHaveClass('active');
    expect(favoritesButton).not.toHaveClass('active');
    expect(oldestButton).toHaveClass('active');
  });
});
