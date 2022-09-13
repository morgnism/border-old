import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { Link, animateScroll as scroll } from 'react-scroll';

export type LinkProps = {
  href: string;
  isActive?: boolean;
  className?: string;
} & NextLinkProps;

const isExternal = (href: string): boolean => href.startsWith('http');

const isToc = (href: string): boolean => href.startsWith('#');
const getTocLink = (href: string) => `${new RegExp(/[^|#].+$/).exec(href)}`;

const SanityLink = ({
  href,
  children,
  className,
  isActive = false,
  ...props
}: React.PropsWithChildren<LinkProps>) => {
  className = isActive ? `${className} active` : className;

  if (isToc(href)) {
    return (
      <Link
        aria-current={isActive ? 'page' : 'false'}
        to={getTocLink(href)}
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
      >
        {children}
      </Link>
    );
  }

  if (isExternal(href)) {
    return (
      <a
        className={className}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-current={isActive ? 'page' : 'false'}
        {...props}
      >
        {children}
      </a>
    );
  } else {
    return (
      <NextLink href={href} {...props} passHref>
        <a
          className={className}
          aria-current={isActive ? 'page' : 'false'}
          {...props}
        >
          {children}
        </a>
      </NextLink>
    );
  }
};

export default SanityLink;
