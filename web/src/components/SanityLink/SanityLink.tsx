import NextLink, { LinkProps as NextLinkProps } from 'next/link';

export type LinkProps = {
  href: string;
  isActive?: boolean;
  className?: string;
} & NextLinkProps;

const isExternal = (href: string): boolean => href.startsWith('http');

const SanityLink = ({
  href,
  children,
  className,
  isActive = false,
  ...props
}: React.PropsWithChildren<LinkProps>) => {
  className = isActive ? `${className} active` : className;

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
