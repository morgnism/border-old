import SanityLink from '@components/SanityLink';
import { useRouter } from 'next/router';
import React from 'react';

type CardTitleProps = {
  _type: string;
  title: string;
  slug: string;
  external: string;
};

const CardTitle = ({ _type, title, slug, external }: CardTitleProps) => {
  const { pathname } = useRouter();
  let href = external!;

  if (slug) {
    href = _type === 'post' ? `/posts/${slug}` : `/projects/${slug}`;
  }

  return (
    <h4 className="text-2xl font-semibold hover:text-slate-600 mb-4">
      <SanityLink href={href} isActive={pathname === slug}>
        {title}
      </SanityLink>
    </h4>
  );
};

export default CardTitle;
