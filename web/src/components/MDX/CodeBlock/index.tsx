import { CopyButton } from '@components/Buttons';
import { Language } from 'prism-react-renderer';
import { useState } from 'react';
import Highlight from './Highlight';

type CodeBlockProps = {
  className?: string;
  children?: React.ReactNode;
};

const CodeBlock = ({ children, className }: CodeBlockProps) => {
  const [codeString] = useState((children as string).trim());
  const language = className?.replace(/language-/, '') as Language;
  return (
    <>
      <Highlight code={codeString} language={language} />
      <CopyButton
        className="absolute inline top-4 right-4 text-slate-50"
        onClick={() => {
          console.log('copied!');
        }}
      />
    </>
  );
};

export default CodeBlock;
