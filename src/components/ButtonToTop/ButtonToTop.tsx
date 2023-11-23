import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { ButtonToTop, ButtonToTopContainer } from './Styles';

function ToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Handle scroll
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ButtonToTopContainer>
      {isVisible && (
        <ButtonToTop data-testid="button-to-top" onClick={ scrollToTop }>
          <FaArrowUp size={ 25 } />
        </ButtonToTop>
      )}
    </ButtonToTopContainer>
  );
}

export default ToTopButton;
