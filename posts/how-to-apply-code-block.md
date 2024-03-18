---
title: "블로그에 코드블록 적용하기"
subtitle: "react-syntax-highlighter"
date: "2024-03-03"
---
블로그를 만들었는데 코드가 빠지면 안되지..<br>
단순히 md파일만 작성하면 velog 같이(!?) 자동으로 코드블럭이 생기는줄 알았는데.. 크나큰 착각이었다<br><br>

역시 이 세상은 원하는 대로 돌아가지 않는다.<br><br>

다행히 라이브러리의 도움을 받아 원하는 형태로 만들 수 있게 되었다.<br>
~~조금 더 익숙해지면 라이브러리 코드를 좀 뜯어봐야지..~~<br><br>

### 적용방법

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
