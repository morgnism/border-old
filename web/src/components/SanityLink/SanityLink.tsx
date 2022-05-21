import Link from 'next/link';

type LinkProps = { passHref: boolean } & {
  slug?: string;
  target?: string;
} & Partial<URL>;

const SanityLink = ({
  children,
  slug,
  href = '',
  target,
  ...props
}: React.PropsWithChildren<LinkProps>) => {
  if (slug) {
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    );
  } else {
    return (
      <a href={href} target={target ? `_blank` : undefined} {...props}>
        {children}
      </a>
    );
  }
};

export default SanityLink;
