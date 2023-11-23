/* eslint-disable react/jsx-max-depth */
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../../helpers/formatDate';
import { formatImage } from '../../helpers/formatImage';
import { NewsContext } from '../../context/NewsContext';
import ButtonFavorite from '../ButtonFavorite/ButtonFavorite';
import ButtonSocialMedia from '../ButtonSocialMedia/ButtonSocialMedia';
import {
  LatestNewsContainer,
  LinkNews,
  NewsContent,
  NewsHeader,
  NewsImage,
  NewsSocial,
  NewsTitle,
} from './Styles';

function LatestNews() {
  const { dataNews } = useContext(NewsContext);
  const news = dataNews && dataNews[0];

  return (
    <LatestNewsContainer>
      {news && (
        <>
          {/* News Image */}
          <NewsImage>
            <Link to={ news.link }>
              <img src={ formatImage(news) } alt={ news.titulo } />
            </Link>
          </NewsImage>

          {/* News Content */}
          <NewsContent>
            <NewsHeader>
              <div className="box-title">
                <h1>Última notícia</h1>
                <span>
                  Publicada
                  {' '}
                  {formatDate(news.data_publicacao)}
                </span>
              </div>
              <div className="box-icon">
                <ButtonFavorite item={ news } />
              </div>
            </NewsHeader>

            <NewsTitle>
              <h2>{news.titulo}</h2>
              <p>{news.introducao}</p>
            </NewsTitle>

            <NewsSocial>
              <ButtonSocialMedia item={ news } />
              <LinkNews to={ news.link } target="_blank">
                Notícia completa
              </LinkNews>
            </NewsSocial>
          </NewsContent>
        </>
      )}
    </LatestNewsContainer>
  );
}

export default LatestNews;
