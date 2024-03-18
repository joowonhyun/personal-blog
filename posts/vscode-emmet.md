---
title: "[vscode] emmet 설정"
subtitle: "jsx, tsx에서 emmet 사용하기"
date: "2024-01-01"
---
HTML을 처음 배울 때 EMMET이라는 것을 배웠는데 JSX에서도 동일한 문법을 사용할 수 있다. 매번 설정할 때마다 까먹어서 기록한다.<br><br>
emmet이란 html을 조금 더 빠르게 생성할 수 있도록 하는 것으로 예를 들어서<br><br>

```html
h1>p*5.dump
```
이렇게 입력하고 tab을 누르면 h1태그 아래 p태그 5개 만드는데 각 p태그의 class는 dump class를 붙여줘라는 뜻!<br><br>

### STEP1. Open workspace Setting (JSON)를 찾는다.
### STEP2. 아래 코드를 복사 붙여넣기 한다!<br>

```javascript
"emmet.includeLanguages": {
  "javascript": "javascriptreact",
  "typescript": "typescriptreact"
}
```
<br/>
간단 그 자체!