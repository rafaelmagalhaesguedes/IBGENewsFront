/* eslint-disable react/jsx-max-depth */
import { useContext, useState } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { formatDistanceToNow, parse } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { NewsContext } from '../../context/NewsContext';
import {
  NewsListItem,
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

  const calculateDaysAgo = (dateString: string) => {
    const date = parse(dateString, 'dd/MM/yyyy HH:mm:ss', new Date());
    return formatDistanceToNow(date, { addSuffix: true, locale: ptBR });
  };

  return (
    <NewsListItem>
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
                <span>{calculateDaysAgo(item.data_publicacao)}</span>
              </span>
              <LinkNews>Notícia completa</LinkNews>
            </NewsItemsInfos>

            <ButtonFavorite>
              <FaRegHeart size={ 25 } />
            </ButtonFavorite>
          </NewsItemsCard>
        );
      })}
      <LoadMore>
        {itemsToShow < filteredNews.length && (
          <ButtonLoadMore onClick={ loadMore }>Mais notícias</ButtonLoadMore>
        ) }
      </LoadMore>
    </NewsListItem>
  );
}

export default CardNews;
