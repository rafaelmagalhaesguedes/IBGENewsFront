import { useContext, useState } from 'react';
import { NewsContext } from '../../context/NewsContext';
import {
  NewsListItem,
  NewsItemsCard,
  NewsItemsImage,
  NewsItemsInfos,
  ButtonLoadMore,
  LoadMore,
} from './Styles';

function NewsList() {
  const { filteredNews } = useContext(NewsContext);
  const [itemsToShow, setItemsToShow] = useState(10);

  const loadMore = () => {
    setItemsToShow((prev) => prev + 10);
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
            <NewsItemsInfos>
              <h2>{item.titulo}</h2>
              <p>{item.introducao}</p>
            </NewsItemsInfos>
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

export default NewsList;
