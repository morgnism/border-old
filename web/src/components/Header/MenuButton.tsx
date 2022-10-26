import { Dispatch, SetStateAction } from 'react';
import { MenuButtonCloseIcon, MenuButtonOpenIcon } from './MenuButtonIcon';

type MenuButtonProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
};

const MenuButton = ({ isMenuOpen, setIsMenuOpen }: MenuButtonProps) => {
  return (
    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
      <button
        type="button"
        className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
        aria-controls="mobile-menu"
        aria-expanded="false"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <span className="sr-only">Open main menu</span>
        <MenuButtonOpenIcon isMenuOpen={isMenuOpen} />
        <MenuButtonCloseIcon isMenuOpen={isMenuOpen} />
      </button>
    </div>
  );
};

export default MenuButton;
