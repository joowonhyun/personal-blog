---
title: "블로그에 코드블록 적용하기"
subtitle: "react-syntax-highlighter"
date: "2024-03-03"
---
첫 번째 줄<br>
두 번째 줄


### Create an account

```javascript
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
```

