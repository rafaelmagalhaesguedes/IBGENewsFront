import { forwardRef, useContext, useState } from 'react';
import { NewsContext } from '../../context/NewsContext';
import { ButtonFilter, FilterNewsButton, FilterNewsContainer } from './Styles';

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
          <ButtonFilter
            onClick={ () => handleClick(filterByRecent, 'recent') }
            className={ activeButton === 'recent' ? 'active' : '' }
          >
            Mais recentes
          </ButtonFilter>
          <ButtonFilter
            onClick={ () => handleClick(filterByRelease, 'release') }
            className={ activeButton === 'release' ? 'active' : '' }
          >
            Release
          </ButtonFilter>
          <ButtonFilter
            onClick={ () => handleClick(filterByNoticia, 'noticia') }
            className={ activeButton === 'noticia' ? 'active' : '' }
          >
            Notícia
          </ButtonFilter>
          <ButtonFilter
            onClick={ () => handleClick(filterByFavorites, 'favorites') }
            className={ activeButton === 'favorites' ? 'active' : '' }
          >
            Favoritas
          </ButtonFilter>
        </FilterNewsButton>
      </FilterNewsContainer>
    </nav>
  );
});

export default FilterNews;
