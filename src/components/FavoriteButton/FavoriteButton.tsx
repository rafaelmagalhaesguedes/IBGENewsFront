import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { FavButton } from './Styles';
import useFavorites from '../../hooks/useFavorites';
import { NewsType } from '../../types/types';

type FavoriteButtonProps = {
  item: NewsType;
};

function FavoriteButton({ item } : FavoriteButtonProps) {
  const { isFavorited, handleFavoriteClick } = useFavorites(item);

  return (
    <FavButton onClick={ handleFavoriteClick }>
      {isFavorited ? <FaHeart size={ 25 } /> : <FaRegHeart size={ 25 } />}
    </FavButton>
  );
}

export default FavoriteButton;
