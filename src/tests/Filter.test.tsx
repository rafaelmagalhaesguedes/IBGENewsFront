import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { vi } from 'vitest';
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

  it('3. FilterByFavorites should return an empty array when localStorage is empty', () => {
    localStorage.clear();

    const { result } = renderHook(() => useFilter(news));

    act(() => {
      result.current.filterByFavorites();
    });

    expect(result.current.filteredNews).toEqual([]);
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

describe('Filter hook testing with moment filter by recent news', () => {
  const mock = {
    items: [
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
      {
        id: 38397,
        tipo: 'Notícia',
        titulo: 'IBGE lança o livro “Estatísticas do Século XXI” no Encontro Diálogos IBGE 90 anos',
        introducao: 'O livro “Estatísticas do Século XXI” foi lançado no Encontro Diálogos IBGE 90 anos, realizado nos dias 16 e 17 de novembro na Unidade de Parada Lucas (RJ) - Foto: Licia Rubinstein\\Agência IBGE Notícias O IBGE lançou, nesta quarta-feira (17), o livro “Estatísticas do...',
        data_publicacao: '17/11/2023 20:43:00',
        produto_id: 0,
        produtos: '',
        editorias: 'ibge',
        imagens: '{"image_intro":"images\\/agenciadenoticias\\/ibge\\/2023_11\\/LivroEncerramento_THUMB.jpg","float_intro":"","image_intro_alt":"","image_intro_caption":"","image_fulltext":"images\\/agenciadenoticias\\/ibge\\/2023_11\\/LivroEncerramento_HOME.jpg","float_fulltext":"","image_fulltext_alt":"","image_fulltext_caption":""}',
        produtos_relacionados: '',
        destaque: true,
        link: 'http://agenciadenoticias.ibge.gov.br/agencia-noticias/2012-agencia-de-noticias/noticias/38397-ibge-lanca-o-livro-estatisticas-do-seculo-xxi-no-encontro-dialogos-ibge-90-anos.html',
      },
    ],
  };

  it('1. FilterByOldest should sort news by date in ascending order when ascending is true', () => {
    const { result } = renderHook(() => useFilter(mock.items));
    act(() => {
      result.current.filterByOldest(true);
    });
    expect(result.current.filteredNews).toEqual([mock.items[1], mock.items[0]]);
  });

  it('2. FilterByOldest should sort news by date in descending order when ascending is false', () => {
    const { result } = renderHook(() => useFilter(mock.items));
    act(() => {
      result.current.filterByOldest(false);
    });
    expect(result.current.filteredNews).toEqual([mock.items[0], mock.items[1]]);
  });
});
