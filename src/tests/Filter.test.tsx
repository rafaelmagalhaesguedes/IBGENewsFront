import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { NewsType } from '../types/types';
import useFilterNews from '../hooks/useFilter';

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

it('Filter hook testing', () => {
  const { result } = renderHook(() => useFilterNews(news));

  // Teste filterByString
  act(() => {
    result.current.filterByString('Test');
  });
  expect(result.current.filteredNews).toEqual(news);

  // Teste filterByRecent
  act(() => {
    result.current.filterByRecent();
  });
  expect(result.current.filteredNews).toEqual([news[0]]);

  // Teste filterByOldest
  act(() => {
    result.current.filterByOldest();
  });
  expect(result.current.filteredNews).toEqual([news[0]]);

  // Teste filterByNoticia
  act(() => {
    result.current.filterByNoticia();
  });
  expect(result.current.filteredNews).toEqual([news[0]]);

  // Teste filterByRelease
  act(() => {
    result.current.filterByRelease();
  });
  expect(result.current.filteredNews).toEqual([news[0]]);

  // Primeiro, adicione uma notícia aos favoritos
  localStorage.setItem('favorites', JSON.stringify([news[0]]));
  act(() => {
    result.current.filterByFavorites();
  });
  expect(result.current.filteredNews).toEqual([news[0]]);
});

it('FilterByOldest with ascending order testing', () => {
  const { result } = renderHook(() => useFilterNews(news));

  act(() => {
    result.current.filterByOldest(true);
  });

  const sortedNews = [...news].sort((a, b) => {
    return new Date(a.data_publicacao).getTime() - new Date(b.data_publicacao).getTime();
  });

  expect(result.current.filteredNews).toEqual(sortedNews);
});

it('FilterByOldest with descending order testing', () => {
  const { result } = renderHook(() => useFilterNews(news));

  act(() => {
    result.current.filterByOldest(false);
  });

  const sortedNews = [...news].sort((a, b) => {
    return new Date(b.data_publicacao).getTime() - new Date(a.data_publicacao).getTime();
  });

  expect(result.current.filteredNews).toEqual(sortedNews);
});

it('Should sort news by oldest testing', () => {
  const arrayNews: any = [
    { data_publicacao: '02/02/2022 12:00:00', titulo: 'News 1', destaque: false },
    { data_publicacao: '01/01/2022 12:00:00', titulo: 'News 2', destaque: false },
    { data_publicacao: '03/03/2022 12:00:00', titulo: 'News 3', destaque: false },
  ];

  const { result } = renderHook(() => useFilterNews(arrayNews));

  act(() => {
    result.current.filterByOldest();
  });

  expect(result.current.filteredNews[0].titulo).toBe('News 2');
  expect(result.current.filteredNews[1].titulo).toBe('News 1');
  expect(result.current.filteredNews[2].titulo).toBe('News 3');
});
