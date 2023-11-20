import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { BackToTop, BackToTopSection } from './Styles';

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <BackToTopSection>
      {isVisible && (
        <BackToTop data-testid="button-to-top" onClick={ scrollToTop }>
          <FaArrowUp size={ 25 } />
        </BackToTop>
      )}
    </BackToTopSection>
  );
}

export default BackToTopButton;
