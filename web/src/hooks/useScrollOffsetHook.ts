import { useEffect, useState } from 'react';

export const useScrollOffsetHook = (offset = 300) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > offset) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, [offset]);

  return showButton;
};
