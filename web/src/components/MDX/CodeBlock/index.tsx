import { CopyButton } from '@components/Buttons';
import { useCopyToClipboard } from '@hooks/use-copy-to-clipboard';
import { Language } from 'prism-react-renderer';
import { useState } from 'react';
import Highlight from './Highlight';

type CodeBlockProps = {
  className?: string;
  children?: React.ReactNode;
};

const CodeBlock = ({ children, className }: CodeBlockProps) => {
  const [codeString] = useState((children as string).trim());
  const [copiedText, copy] = useCopyToClipboard();
  const language = className?.replace(/language-/, '') as Language;
  return (
    <>
      <Highlight code={codeString} language={language} />
      <CopyButton
        className="absolute inline top-4 right-4 text-slate-50"
        isCopied={!!copiedText}
        onClick={() => copy(codeString)}
      />
    </>
  );
};

export default CodeBlock;
