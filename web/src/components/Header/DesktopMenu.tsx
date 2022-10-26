import { NavLink } from '@app-types/nav-link';
import classNames from 'classnames';
import Link from 'next/link';

type DesktopMenuProps = {
  navMenu: NavLink[];
  activeClass: (href: string) => string;
};

const DesktopMenu = ({ navMenu, activeClass }: DesktopMenuProps) => {
  return (
    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">
      <div className="hidden sm:ml-6 sm:block">
        <ul className="flex space-x-4">
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
    </div>
  );
};

export default DesktopMenu;
