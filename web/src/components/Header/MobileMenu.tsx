import { NavLink } from '@app-types/Nav-link';
import classNames from 'classnames';
import Link from 'next/link';

type MobileMenuProps = {
  navMenu: NavLink[];
  activeClass: (href: string) => string;
};

const MobileMenu = ({ navMenu, activeClass }: MobileMenuProps) => {
  return (
    // Dropdown menu, show/hide based on menu state.

    // Entering: "transition ease-out duration-100"
    //   From: "transform opacity-0 scale-95"
    //   To: "transform opacity-100 scale-100"
    // Leaving: "transition ease-in duration-75"
    //   From: "transform opacity-100 scale-100"
    //   To: "transform opacity-0 scale-95"
    <div className="sm:hidden" id="mobile-menu">
      <ul className="space-y-1 px-2 pt-2 pb-3">
        {navMenu.map(({ title, url }) => (
          <li
            className={classNames([
              activeClass(url),
              'px-3 py-2 rounded-md text-sm font-medium',
            ])}
            key={url}
          >
            <Link href={url}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
