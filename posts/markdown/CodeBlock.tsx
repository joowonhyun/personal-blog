import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const CodeBlock = ({ children, className }: { children: string, className: string}) => {
  const language = className.replace('lang-', '');
  return (
    <SyntaxHighlighter language={language} style={coldarkDark}>
      {children}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;