import { FavButton } from './Styles';
import { NewsType } from '../../types/types';
import useFavorites from '../../hooks/useFavorites';
import favorited from '../../assets/icons/blackHeartIcon.svg';
import noFavorited from '../../assets/icons/whiteHeartIcon.svg';

type FavoriteButtonProps = {
  item: NewsType;
};

function FavoriteButton({ item } : FavoriteButtonProps) {
  const { isFavorited, handleFavoriteClick } = useFavorites(item);

  return (
    <FavButton data-testid="favorite-btn" onClick={ handleFavoriteClick }>
      <img
        src={ isFavorited ? favorited : noFavorited }
        alt={ isFavorited ? 'favorited' : 'noFavorited' }
      />
    </FavButton>
  );
}

export default FavoriteButton;
