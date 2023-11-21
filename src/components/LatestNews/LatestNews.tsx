/* eslint-disable react/jsx-max-depth */
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { formatDate } from '../../helpers/formatDate';
import { NewsContext } from '../../context/NewsContext';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import {
  LatestNewsDate,
  LatestNewsImage,
  LatestNewsInfos,
  LatestNewsItem,
  LatestNewsSocial,
  LatestNewsTitle,
  LinkNews,
  SocialIcon,
} from './Styles';

function LatestNews() {
  const { dataNews } = useContext(NewsContext);
  const item = dataNews && dataNews[0];
  const images = item && JSON.parse(item.imagens);

  return (
    <LatestNewsItem>
      {item && (
        <>
          <LatestNewsImage>
            <Link to={ item.link }>
              <img
                src={ `https://agenciadenoticias.ibge.gov.br/${images.image_intro}` }
                alt={ item.titulo }
              />
            </Link>
          </LatestNewsImage>
          <LatestNewsInfos>
            <LatestNewsDate>
              <div className="box-title">
                <h1>Última notícia</h1>
                <span>
                  Publicada
                  {' '}
                  {formatDate(item.data_publicacao)}
                </span>
              </div>
              <div className="box-icon">
                <FavoriteButton item={ item } />
              </div>
            </LatestNewsDate>
            <LatestNewsTitle>
              <h2>{item.titulo}</h2>
              <p>{item.introducao}</p>
            </LatestNewsTitle>
            <LatestNewsSocial>
              <SocialIcon>
                <Link to="https://wa.me/" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp size={ 25 } />
                </Link>
                <Link to="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={ 25 } />
                </Link>
                <Link to="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                  <FaFacebook size={ 25 } />
                </Link>
                <Link to="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                  <FaTwitter size={ 25 } />
                </Link>
              </SocialIcon>
              <LinkNews>
                <Link to={ item.link } target="_blank">Notícia completa</Link>
              </LinkNews>
            </LatestNewsSocial>
          </LatestNewsInfos>
        </>
      )}
    </LatestNewsItem>
  );
}

export default LatestNews;
