/* eslint-disable react/jsx-max-depth */
import { useContext, useState } from 'react';
import { NewsContext } from '../../context/NewsContext';
import { formatDate } from '../../helpers/formatDate';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import {
  CardNewsContainer,
  NewsItemsCard,
  NewsItemsImage,
  NewsItemsInfos,
  ButtonLoadMore,
  LoadMore,
  ButtonFavorite,
} from './Styles';
import { LinkNews } from '../LatestNews/Styles';

function CardNews() {
  const { filteredNews } = useContext(NewsContext);
  const [itemsToShow, setItemsToShow] = useState(10);

  const loadMore = () => {
    setItemsToShow((prev) => prev + 10);
  };

  return (
    <CardNewsContainer>
      {filteredNews && filteredNews.slice(0, itemsToShow).map((item) => {
        const images = JSON.parse(item.imagens);
        return (
          <NewsItemsCard key={ item.id }>
            <NewsItemsImage
              src={ `https://agenciadenoticias.ibge.gov.br/${images.image_intro}` }
              alt={ item.titulo }
            />
            <h2>{item.titulo}</h2>
            <p>{item.introducao}</p>
            <NewsItemsInfos>
              <span>
                <span>
                  {formatDate(item.data_publicacao)}
                  {' '}
                  atrás
                </span>
              </span>
              <LinkNews>Notícia completa</LinkNews>
            </NewsItemsInfos>
            <ButtonFavorite>
              <FavoriteButton item={ item } />
            </ButtonFavorite>
          </NewsItemsCard>
        );
      })}
      <LoadMore>
        {itemsToShow < filteredNews.length && (
          <ButtonLoadMore onClick={ loadMore }>Mais notícias</ButtonLoadMore>
        ) }
      </LoadMore>
    </CardNewsContainer>
  );
}

export default CardNews;
