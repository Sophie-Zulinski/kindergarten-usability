import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp.js';
import { useEffect, useState } from 'react';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, []);

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      style={{ display: isVisible ? 'block' : 'none' }}
      className="btn__up"
      onClick={goTop}
    >
      <KeyboardArrowUpIcon />
    </button>
  );
}

export default ScrollToTopButton;
