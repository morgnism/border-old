import NextLink from 'next/link';

type LinkProps = {
  className?: string;
  slug?: string;
  target?: string;
} & Partial<URL>;

const SanityLink = ({
  className,
  children,
  slug,
  href = '',
  target,
  ...props
}: React.PropsWithChildren<LinkProps>) => {
  if (slug) {
    return (
      <NextLink href={href} {...props}>
        <a
          className={className}
          href={href}
          target={target ? `_blank` : undefined}
          {...props}
        >
          {children}
        </a>
      </NextLink>
    );
  } else {
    return (
      <a
        className={className}
        href={href}
        target={target ? `_blank` : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }
};

export default SanityLink;
