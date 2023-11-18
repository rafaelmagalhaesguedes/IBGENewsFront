import { FilterNewsButton, FilterNewsContainer } from './Styles';

function FilterNews() {
  return (
    <FilterNewsContainer>
      <FilterNewsButton>
        <button>Mais recentes</button>
        <button>Release</button>
        <button>Notícia</button>
        <button>Favoritas</button>
      </FilterNewsButton>
    </FilterNewsContainer>
  );
}

export default FilterNews;
