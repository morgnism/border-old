import { NavLink } from '@app-types/nav-link';
import Link from 'next/link';
import React from 'react';

const headerNavMenu: NavLink[] = [
  { title: 'Home', url: '/' },
  { title: 'About', url: '/about' },
  // { title: 'Projects', url: '/projects'},
];

const Header = () => (
  <header className="col-span-12 grid grid-cols-12 px-6 py-8">
    <h1 className="col-span-4 uppercase not-italic text-4xl">BORDER DEV</h1>
    <nav className="col-span-8">
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
