import BaseHighlight, {
  defaultProps,
  Language,
  PrismTheme,
} from 'prism-react-renderer';

type HighlightProps = {
  language: Language;
  code: string;
  theme?: PrismTheme;
};

const Highlight = ({ code, language = 'jsx', theme }: HighlightProps) => (
  <BaseHighlight
    {...defaultProps}
    code={code}
    language={language}
    theme={theme}
  >
    {({ className, style, tokens, getLineProps, getTokenProps }) => (
      <pre className={className} style={style}>
        {tokens.map((line, i) => (
          <div key={i} {...getLineProps({ line, key: i })}>
            {line.map((token, key) => (
              <span key={key} {...getTokenProps({ token, key })} />
            ))}
          </div>
        ))}
      </pre>
    )}
  </BaseHighlight>
);

export default Highlight;
