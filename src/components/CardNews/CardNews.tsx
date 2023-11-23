/* eslint-disable react/jsx-max-depth */
import { useContext, useState } from 'react';
import { NewsContext } from '../../context/NewsContext';
import { formatDate } from '../../helpers/formatDate';
import FavoriteButton from '../ButtonFavorite/ButtonFavorite';
import {
  CardContainer,
  CardItems,
  CardImage,
  CardBody,
  CardTitle,
  CardSection,
  DateAndLink,
  ButtonLoadMore,
  LoadMore,
  NotFoundNews,
  SocialLink,
  CardLinkNews,
  DataFormated,
} from './Styles';
import ButtonSocialMedia from '../ButtonSocialMedia/ButtonSocialMedia';

function CardNews() {
  const { filteredNews } = useContext(NewsContext);
  const [itemsToShow, setItemsToShow] = useState(10);

  // Load data when click on button load more
  const loadMore = () => setItemsToShow((prev) => prev + 10);

  return (
    <>
      <CardContainer>
        {filteredNews && filteredNews.slice(0, itemsToShow).map((item) => {
          const images = JSON.parse(item.imagens);
          return (
            <CardItems key={ item.id } data-testid="news-item">
              <CardImage
                src={ `https://agenciadenoticias.ibge.gov.br/${images.image_intro}` }
                alt={ item.titulo }
              />
              <CardBody>
                <CardTitle>
                  <h2>{item.titulo}</h2>
                  <p>{item.introducao}</p>
                </CardTitle>
                <CardSection>
                  <DateAndLink>
                    <DataFormated>
                      Publicada
                      {' '}
                      {formatDate(item.data_publicacao)}
                      {' '}
                      atrás
                    </DataFormated>
                    <CardLinkNews to={ item.link } target="_blank">
                      Notícia completa
                    </CardLinkNews>
                  </DateAndLink>
                  <SocialLink>
                    <ButtonSocialMedia item={ item } />
                    <FavoriteButton item={ item } />
                  </SocialLink>
                </CardSection>
              </CardBody>
            </CardItems>
          );
        })}
        <LoadMore>
          {filteredNews && itemsToShow < filteredNews.length && (
            <ButtonLoadMore onClick={ loadMore }>Mais notícias</ButtonLoadMore>
          )}
        </LoadMore>
      </CardContainer>

      <NotFoundNews>
        {filteredNews && filteredNews.length === 0 && (
          <h2>Nenhuma notícia encontrada</h2>
        )}
      </NotFoundNews>
    </>
  );
}

export default CardNews;
