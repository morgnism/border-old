import { NavLink } from '@app-types/nav-link';
import Link from 'next/link';

type HeaderLogoProps = {
  logoLink: NavLink;
};

const HeaderLogo = ({ logoLink }: HeaderLogoProps) => {
  return (
    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
      <div className="hidden sm:ml-6 sm:block">
        <h1 className="uppercase not-italic text-4xl">
          <Link href={logoLink.url}>{logoLink.title}</Link>
        </h1>
      </div>
    </div>
  );
};

export default HeaderLogo;
