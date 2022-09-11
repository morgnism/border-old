import { Language } from 'prism-react-renderer';
import { useState } from 'react';
import Highlight from './Highlight';
// import nightOwl from 'prism-react-renderer/themes/nightOwl';

type CodeBlockProps = {
  className?: string;
  children?: React.ReactNode;
};

const CodeBlock = ({ children, className }: CodeBlockProps) => {
  const [codeString, setCodeString] = useState((children as string).trim());
  const language = className?.replace(/language-/, '') as Language;
  return <Highlight code={codeString} language={language} />;
};

export default CodeBlock;
