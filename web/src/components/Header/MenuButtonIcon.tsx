import classNames from 'classnames';

type MenuButtonIconProps = {
  isMenuOpen: boolean;
};

export const MenuButtonOpenIcon = ({ isMenuOpen }: MenuButtonIconProps) => {
  return (
    <svg
      className={classNames([isMenuOpen ? 'hidden' : 'block', 'h-6 w-6'])}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
};

export const MenuButtonCloseIcon = ({ isMenuOpen }: MenuButtonIconProps) => {
  return (
    <svg
      className={classNames([isMenuOpen ? 'block' : 'hidden', 'h-6 w-6'])}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};
