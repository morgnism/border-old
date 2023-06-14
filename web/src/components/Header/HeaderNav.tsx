import { NavLink } from '@app-types/nav-link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import DesktopMenu from './DesktopMenu';
import HeaderLogo from './HeaderLogo';
import MenuButton from './MenuButton';
import MobileMenu from './MobileMenu';

const navMenu: NavLink[] = [
  { title: 'Home', url: '/' },
  // { title: 'About', url: '/about' },
  { title: 'Projects', url: '/projects' },
];

const HeaderNav = () => {
  const router = useRouter();
  const activeClass = (href: string) =>
    router.asPath === href
      ? 'bg-gray-900 text-white'
      : 'text-black hover:bg-gray-700 hover:text-white';

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logoLink = { title: 'BORDER', url: '/' };

  return (
    <nav className="mx-auto max-w-screen-2xl">
      <div className="relative flex py-9 lg:py-12 items-center justify-between">
        <MenuButton {...{ isMenuOpen, setIsMenuOpen }} />
        <HeaderLogo {...{ logoLink }} />
        <DesktopMenu {...{ navMenu, activeClass }} />
      </div>
      {isMenuOpen && <MobileMenu {...{ navMenu, activeClass }} />}
    </nav>
  );
};

export default HeaderNav;
