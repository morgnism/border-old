import { Language } from 'prism-react-renderer';
import Highlight from './Highlight';
import nightOwl from 'prism-react-renderer/themes/nightOwl';

type CodeBlockProps = { className: string; children: string };

const CodeBlock = ({ children, className }: CodeBlockProps) => {
  const language = className.replace(/language-/, '') as Language;
  return <Highlight code={children} language={language} theme={nightOwl} />;
};

export default CodeBlock;
