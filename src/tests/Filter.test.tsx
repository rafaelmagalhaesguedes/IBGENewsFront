import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { vi } from 'vitest';
import moment from 'moment';
import { NewsType } from '../types/types';
import useFilter from '../hooks/useFilter';

// News mock
const news: NewsType[] = [
  {
    id: 38398,
    tipo: 'Notícia',
    titulo: 'Encontro de servidores do IBGE termina com entrega de 12 diretrizes para o 90º aniversário do Instituto',
    introducao: 'No Encontro Diálogos IBGE 90 anos, realizado nos dias 16 e 17 de novembro na Unidade de Parada Lucas (RJ), foram escolhidas 12 diretrizes que vão nortear os próximos 3 anos do IBGE - Foto: Licia Rubinstein\\Agência IBGE Notícias O IBGE encerrou, no fim da...',
    data_publicacao: '17/11/2023 20:44:00',
    produto_id: 0,
    produtos: '',
    editorias: 'ibge',
    imagens: '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2023_11\\/Encerramento_THUMB.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2023_11\\/Encerramento_HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
    produtos_relacionados: '',
    destaque: true,
    link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38398-encontro-de-servidores-do-ibge-termina-com-entrega-de-12-diretrizes-para-o-90-aniversario-do-instituto.html',
  },
];

const DATA = 'DD/MM/YYYY HH:mm:ss';

describe('Filter hook testing', () => {
  it('1. FilterByString testing', () => {
    const { result } = renderHook(() => useFilter(news));

    act(() => {
      result.current.filterByString('Encontro');
    });

    expect(result.current.filteredNews).toEqual(news);
  });

  it('2. FilterByString should return an empty array when there are no matches', () => {
    const { result } = renderHook(() => useFilter(news));

    act(() => {
      result.current.filterByString('does not exist news in jornal &&221');
    });

    expect(result.current.filteredNews).toEqual([]);
  });

  it('3. FilterByRecent testing', () => {
    const { result } = renderHook(() => useFilter(news));

    act(() => {
      result.current.filterByRecent();
    });

    expect(result.current.filteredNews).toEqual([]);
  });

  it('4. FilterByRelease testing', () => {
    const { result } = renderHook(() => useFilter(news));

    act(() => {
      result.current.filterByRelease();
    });

    expect(result.current.filteredNews).toEqual([]);
  });

  it('5. FilterByNoticia testing', () => {
    const { result } = renderHook(() => useFilter(news));

    act(() => {
      result.current.filterByNoticia();
    });

    expect(result.current.filteredNews).toEqual([news[0]]);
  });
});

describe('Filter hook testing with localStorage', () => {
  it('1. FilterByFavorites testing', () => {
    const { result } = renderHook(() => useFilter(news));

    // Primeiro, adicione uma notícia aos favoritos
    localStorage.setItem('favorites', JSON.stringify([news[0]]));

    act(() => {
      result.current.filterByFavorites();
    });

    expect(result.current.filteredNews).toEqual([news[0]]);
  });

  it('2. FilterByFavorites should filter news by favorites', () => {
    const mockFavorites = [news[0]];
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => JSON.stringify(mockFavorites));

    const { result } = renderHook(() => useFilter(news));

    act(() => {
      result.current.filterByFavorites();
    });

    expect(result.current.filteredNews).toEqual(mockFavorites);
  });
});

describe('Filter hook testing with moment filter by oldest news', () => {
  it('1. FilterByOldest should sort news by date in ascending order when ascending is true', () => {
    const { result } = renderHook(() => useFilter(news));

    act(() => {
      result.current.filterByOldest(true);
    });

    const sortedNews = [...news].sort((a, b) => {
      const timeA = moment(a.data_publicacao, DATA);
      const timeB = moment(b.data_publicacao, DATA);
      return timeA.diff(timeB);
    });

    expect(result.current.filteredNews).toEqual(sortedNews);
  });

  it('2. FilterByOldest should sort news by date in descending order when ascending is false', () => {
    const { result } = renderHook(() => useFilter(news));

    act(() => {
      result.current.filterByOldest(false);
    });

    const sortedNews = [...news].sort((a, b) => {
      const timeA = moment(a.data_publicacao, DATA);
      const timeB = moment(b.data_publicacao, DATA);
      return timeB.diff(timeA);
    });

    expect(result.current.filteredNews).toEqual(sortedNews);
  });
});
