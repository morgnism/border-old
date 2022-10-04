import React from 'react';

const Article = ({ children }: { children: React.ReactNode }) => {
  return (
    <article className="relative mx-auto max-w-7xl lg:max-w-4xl mb-64 prose prose-slate lg:prose-xl prose-a:text-amber-600 hover:prose-a:text-amber-500 prose-pre:bg-neutral-800 prose-pre:p-0 prose-code:font-mono">
      {children}
    </article>
  );
};

export default Article;
