//
// Função que recebe um objeto com os dados de uma notícia
// e retorna a URL da imagem formatada
//
export const formatImage = (data: any) => {
  const images = data && JSON.parse(data.imagens || '{}');
  const url = `https://agenciadenoticias.ibge.gov.br/${images.image_intro}`;
  return url;
};
