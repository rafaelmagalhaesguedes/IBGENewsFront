import { FavButton } from './Styles';
import useFavorites from '../../hooks/useFavorites';
import { NewsType } from '../../types/types';
import favorited from '../../assets/images/blackHeartIcon.svg';
import noFavorited from '../../assets/images/whiteHeartIcon.svg';

type FavoriteButtonProps = {
  item: NewsType;
};

function FavoriteButton({ item } : FavoriteButtonProps) {
  const { isFavorited, handleFavoriteClick } = useFavorites(item);

  return (
    <FavButton data-testid="favorite-button" onClick={ handleFavoriteClick }>
      <img
        src={ isFavorited ? favorited : noFavorited }
        alt={ isFavorited ? 'favorited' : 'noFavorited' }
        data-testid="favorite-btn"
      />
    </FavButton>
  );
}

export default FavoriteButton;
