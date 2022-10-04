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
      <code className={className} style={style}>
        {tokens.map((line, i) => (
          <div key={i} {...getLineProps({ line, key: `line${i}` })}>
            {line.map((token, key) => (
              <span
                key={key}
                {...getTokenProps({ token, key: `line${key}` })}
              />
            ))}
          </div>
        ))}
      </code>
    )}
  </BaseHighlight>
);

export default Highlight;
