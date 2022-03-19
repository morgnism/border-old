import { NavLink } from '@app-types/nav-link';
import Link from 'next/link';
import React from 'react';

const headerNavMenu: NavLink[] = [
  { title: 'Home', url: '/' },
  { title: 'About', url: '/about' },
  // { title: 'Projects', url: '/projects'},
];

const Header = () => (
  <header className="col-span-5 h-20 mt-4 inline-grid grid-cols-5">
    <h1 className="col-span-1 uppercase not-italic text-4xl">BORDER DEV</h1>
    <nav className="col-span-4">
      <ul className="flex justify-end content-between">
        {headerNavMenu.map(({ title, url }) => (
          <li className="px-3" key={url}>
            <Link href={url}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Header;
