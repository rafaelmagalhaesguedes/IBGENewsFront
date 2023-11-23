import { NewsType } from '../types/types';
//
// Função que recebe um objeto com os dados de uma notícia
// e retorna a URL da imagem formatada
//
export const formatImage = (data: NewsType) => {
  const images = data && JSON.parse(data.imagens || '{}');
  const url = `https://agenciadenoticias.ibge.gov.br/${images.image_intro}`;
  return url;
};
