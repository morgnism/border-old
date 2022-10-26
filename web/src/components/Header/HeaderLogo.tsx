import { NavLink } from '@app-types/nav-link';
import SanityLink from '@components/SanityLink';

type HeaderLogoProps = {
  logoLink: NavLink;
};

const HeaderLogo = ({ logoLink }: HeaderLogoProps) => {
  return (
    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
      <div className="hidden sm:ml-6 sm:block">
        <h1 className="uppercase not-italic text-4xl">
          <SanityLink href={logoLink.url}>
            <span className="font-bold">Border</span>.Dev
          </SanityLink>
        </h1>
      </div>
    </div>
  );
};

export default HeaderLogo;
