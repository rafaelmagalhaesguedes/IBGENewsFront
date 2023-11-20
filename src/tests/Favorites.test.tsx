import { fireEvent, screen, waitFor } from '@testing-library/react';
import { vi } from 'vitest';
import renderWithRouter from '../helpers/renderWithRouter';
import FavoriteButton from '../components/FavoriteButton/FavoriteButton';
import NewsProvider from '../context/NewsProvider';

describe('FavoriteButton Tests', () => {
  const mockNewsItem = {
    id: 1,
    tipo: 'Notícia',
    titulo: 'Terceiro trimestre de 2023 tem crescimento no abate de bovinos, frangos e suínos',
    introducao: 'Abate de bovinos aumentou 11,1% no terceiro trimestre do ano e 5,8% em relação ao segundo trimestre de 2023 - Foto: Licia Rubinstein/Agência IBGE Notícias O abate de bovinos subiu 11,1% e o de frangos teve alta de 3,1% no 3º trimestre de 2023, na...',
    data_publicacao: '09/11/2023 09:00:00',
    produto_id: 0,
    produtos: '21120|Primeiros resultados#1ovos|primeiros-resultados-1ovos|2072;21121|Primeiros resultados#1leite|primeiros-resultadios-2leite|2219;21122|Primeiros resultados#1couro|primeiros-resultados-1couro|2218;21119|Primeiros resultados#1abate|primeiros-resultados-2abate|2220',
    editorias: 'economicas',
    imagens: '{"image_intro":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_11\\/TriAbate_THUMB_LiciaR.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/estatisticas_economicas\\/2023_11\\/TriAbate_HOME_LiciaR.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    produtos_relacionados: '21120, 21121, 21122, 21119',
    destaque: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38304-terceiro-trimestre-de-2023-tem-crescimento-no-abate-de-bovinos-frangos-e-suinos.html',
  };

  beforeEach(() => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: vi.fn(() => null),
        setItem: vi.fn(() => null),
      },
      writable: true,
    });
  });

  const FAVORITE_BUTTON = 'favorite-btn';

  it('Testa se o ícone do coração muda', async () => {
    const { user } = renderWithRouter(<FavoriteButton item={ mockNewsItem } />);

    waitFor(async () => {
      const favoriteBtn = screen.getByTestId('favorite-btn');
      expect(favoriteBtn).toHaveProperty('favorited', 'noFavorited');
      await user.click(favoriteBtn);
      expect(favoriteBtn).toHaveProperty('alt', 'favorited');
    });
  });

  it('should save favorite to localStorage when clicked', async () => {
    renderWithRouter(<FavoriteButton item={ mockNewsItem } />);

    const button = screen.getByTestId(FAVORITE_BUTTON);
    fireEvent.click(button);

    expect(window.localStorage.setItem).toHaveBeenCalled();
  });

  it('should remove favorite from localStorage when clicked again', async () => {
    window.localStorage.getItem = vi.fn(() => JSON.stringify([mockNewsItem]));

    renderWithRouter(<NewsProvider><FavoriteButton item={ mockNewsItem } /></NewsProvider>);

    const button = screen.getByTestId(FAVORITE_BUTTON);
    fireEvent.click(button);

    expect(window.localStorage.setItem).toHaveBeenCalled();
  });
});
