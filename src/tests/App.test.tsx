import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('renders input search', () => {
    render(<App />);
    const searchInput = screen.getByTestId('search-input');
    expect(searchInput).toBeInTheDocument();
  });

  it('renders filters button', () => {
    render(<App />);
    const recentNewsBtn = screen.getByText(/mais recentes/i);
    const releaseBtn = screen.getByText(/release/i);
    const newsBtn = screen.getByText(/notícia/i);
    const favoritesBtn = screen.getByText(/favoritas/i);

    expect(recentNewsBtn).toBeInTheDocument();
    expect(releaseBtn).toBeInTheDocument();
    expect(newsBtn).toBeInTheDocument();
    expect(favoritesBtn).toBeInTheDocument();
  });
});
