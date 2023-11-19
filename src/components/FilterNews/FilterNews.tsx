import { forwardRef, useContext, useState } from 'react';
import { NewsContext } from '../../context/NewsContext';
import { FilterNewsButton, FilterNewsContainer } from './Styles';

const FilterNews = forwardRef<HTMLDivElement>((_, ref) => {
  const {
    filterByRecent,
    filterByRelease,
    filterByNoticia,
    filterByFavorites,
  } = useContext(NewsContext);

  const [activeButton, setActiveButton] = useState('recent');

  const handleClick = (filterFunction: any, buttonName: any) => {
    filterFunction();
    setActiveButton(buttonName);
  };

  return (
    <nav>
      <FilterNewsContainer ref={ ref }>
        <FilterNewsButton>
          <button
            onClick={ () => handleClick(filterByRecent, 'recent') }
            className={ activeButton === 'recent' ? 'active' : '' }
          >
            Mais recentes
          </button>
          <button
            onClick={ () => handleClick(filterByRelease, 'release') }
            className={ activeButton === 'release' ? 'active' : '' }
          >
            Release
          </button>
          <button
            onClick={ () => handleClick(filterByNoticia, 'noticia') }
            className={ activeButton === 'noticia' ? 'active' : '' }
          >
            Notícia
          </button>
          <button
            onClick={ () => handleClick(filterByFavorites, 'favorites') }
            className={ activeButton === 'favorites' ? 'active' : '' }
          >
            Favoritas
          </button>
        </FilterNewsButton>
      </FilterNewsContainer>
    </nav>
  );
});

export default FilterNews;
