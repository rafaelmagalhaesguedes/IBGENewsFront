import { FaFacebookSquare, FaWhatsappSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { SocialIcon } from './Styles';
import { NewsType } from '../../types/types';

function ButtonSocialMedia({ item } : { item: NewsType }) {
  const whatsAppLink = `https://wa.me/?text=${encodeURIComponent(item.link)}`;
  const facebookLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(item.link)}`;
  const twitterLink = `https://twitter.com/intent/tweet?url=${encodeURIComponent(item.link)}`;

  return (
    <SocialIcon>
      <Link to={ whatsAppLink } target="_blank" rel="noopener noreferrer">
        <FaWhatsappSquare size={ 30 } />
      </Link>
      <Link to={ facebookLink } target="_blank" rel="noopener noreferrer">
        <FaFacebookSquare size={ 30 } />
      </Link>
      <Link to={ twitterLink } target="_blank" rel="noopener noreferrer">
        <FaSquareXTwitter size={ 30 } />
      </Link>
    </SocialIcon>
  );
}

export default ButtonSocialMedia;
