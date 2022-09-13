import { NavLink } from '@app-types/nav-link';
import Link from 'next/link';
import React from 'react';

const headerNavMenu: NavLink[] = [
  { title: 'Home', url: '/' },
  { title: 'About', url: '/about' },
  // { title: 'Projects', url: '/projects'},
];

const MainNav = () => (
  <header className="mx-auto max-w-screen-2xl px-12 py-9 lg:py-12">
    <nav className="flex items-center justify-between">
      <h1 className="uppercase not-italic text-4xl">BORDER</h1>
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

export default MainNav;
