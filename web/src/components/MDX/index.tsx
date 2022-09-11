import SanityLink from '@components/SanityLink';
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
  // h2: (props) => <></>,
  // h3: (props) => <></>,
  // h4: (props) => <></>,
  // hr: (props) => <></>,
  // strong: (props) => <></>,
  code: CodeBlock,
  a: ({ href, children }: MDXLinkProps) => (
    <SanityLink href={href!}>{children}</SanityLink>
  ),
  Callout,
};

export default MDXComponents;
