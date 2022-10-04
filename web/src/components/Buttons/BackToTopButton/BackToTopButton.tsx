import { Icon } from '@components/Icons';
import { animateScroll as scroll } from 'react-scroll';

const BackToTopButton = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <button
      type="button"
      className="position: fixed inline-block text-gray-900 bg-white shadow-md border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 transition duration-150 ease-in-out bottom-5 right-5"
      onClick={scrollToTop}
    >
      <Icon name="chevron-up" color="text-secondary-200" />
    </button>
  );
};

export default BackToTopButton;
