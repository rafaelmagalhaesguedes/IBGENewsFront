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
        <BackToTop onClick={ scrollToTop }>
          <FaArrowUp />
        </BackToTop>
      )}
    </BackToTopSection>
  );
}

export default BackToTopButton;
