import { useContext } from 'react';
import { NewsContext } from '../../context/NewsContext';
import { LatestNewsImage, LatestNewsInfos, LatestNewsItem } from './Styles';

function LatestNews() {
  const { news } = useContext(NewsContext);
  const item = news && news[0];
  const images = item && JSON.parse(item.imagens);

  return (
    <LatestNewsItem>
      {item && (
        <>
          <LatestNewsImage>
            <img
              src={ `https://agenciadenoticias.ibge.gov.br/${images.image_intro}` }
              alt={ item.titulo }
            />
          </LatestNewsImage>
          <LatestNewsInfos>
            <h1>Últimas notícias</h1>
            <h2>{item.titulo}</h2>
            <p>{item.introducao}</p>
          </LatestNewsInfos>
        </>
      )}
    </LatestNewsItem>
  );
}

export default LatestNews;
