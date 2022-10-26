import SanityLink from '@components/SanityLink';
import { useRouter } from 'next/router';
import React from 'react';

type CardTitleProps = {
  title: string;
  slug: string;
  external: string;
};

const CardTitle = ({ title, slug, external }: CardTitleProps) => {
  const { pathname } = useRouter();

  return (
    <h4 className="text-2xl font-semibold hover:text-slate-600 mb-4">
      <SanityLink
        href={slug ? `/posts/${slug}` : external!}
        isActive={pathname === slug}
      >
        {title}
      </SanityLink>
    </h4>
  );
};

export default CardTitle;
