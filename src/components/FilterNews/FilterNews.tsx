import { forwardRef, useContext } from 'react';
import { NewsContext } from '../../context/NewsContext';
import { FilterNewsButton, FilterNewsContainer } from './Styles';

const FilterNews = forwardRef<HTMLDivElement>((_, ref) => {
  const {
    filterByRecent,
    filterByRelease,
    filterByNoticia,
  } = useContext(NewsContext);

  return (
    <FilterNewsContainer ref={ ref }>
      <FilterNewsButton>
        <button onClick={ filterByRecent }>
          Mais recentes
        </button>
        <button onClick={ filterByRelease }>
          Release
        </button>
        <button onClick={ filterByNoticia }>
          Notícia
        </button>
        <button>
          Favoritas
        </button>
      </FilterNewsButton>
    </FilterNewsContainer>
  );
});

export default FilterNews;
