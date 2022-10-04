import SanityLink from '@components/SanityLink';
import idify from '@utils/idify';
import React from 'react';
import Callout from './Callout';
import CodeBlock from './CodeBlock';

type MDXGenerticProps = { children?: React.ReactNode };

type MDXLinkProps = MDXGenerticProps & {
  href?: string;
};

const MDXComponents = {
  h1: ({ children }: MDXGenerticProps) => (
    <h1 className="text-center uppercase">{children}</h1>
  ),
  h2: ({ children }: MDXGenerticProps) => {
    const id = idify(children as string);
    return <h2 id={id}>{children}</h2>;
  },
  h3: ({ children }: MDXGenerticProps) => {
    const id = idify(children as string);
    return <h3 id={id}>{children}</h3>;
  },
  h4: ({ children }: MDXGenerticProps) => {
    const id = idify(children as string);
    return <h4 id={id}>{children}</h4>;
  },
  code: CodeBlock,
  pre: ({ children }: MDXGenerticProps) => (
    <pre className="relative">{children}</pre>
  ),
  a: ({ href, children }: MDXLinkProps) => {
    return <SanityLink href={href!}>{children}</SanityLink>;
  },
  Callout,
};

export default MDXComponents;
