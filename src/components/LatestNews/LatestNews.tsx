/* eslint-disable react/jsx-max-depth */
import { useContext } from 'react';
import { FaWhatsapp, FaRegHeart,
  FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { NewsContext } from '../../context/NewsContext';
import {
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
            <LatestNewsTitle>
              <h1>Última notícia</h1>
              <FaRegHeart size={ 20 } />
            </LatestNewsTitle>
            <Link to={ item.link }>
              <h2>{item.titulo}</h2>
            </Link>
            <Link to={ item.link }>
              <p>{item.introducao}</p>
            </Link>
            <LatestNewsSocial>
              <SocialIcon>
                <Link to="https://wa.me/" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp size={ 20 } />
                </Link>
                <Link to="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={ 20 } />
                </Link>
                <Link to="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                  <FaFacebook size={ 20 } />
                </Link>
                <Link to="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                  <FaTwitter size={ 20 } />
                </Link>
              </SocialIcon>
              <LinkNews>
                <Link to={ item.link }>Notícia completa</Link>
              </LinkNews>
            </LatestNewsSocial>
          </LatestNewsInfos>
        </>
      )}
    </LatestNewsItem>
  );
}

export default LatestNews;
