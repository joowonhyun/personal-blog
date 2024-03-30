---
title: "[Cypress] TypeScript 적용"
subtitle: "cypress에서 타입을 찾는 방법"
date: "2024-03-30"
---
e2e 테스트코드 작성을 진행할 때 쓰이는 cypress에서 TypeScript 적용 꿀팁을 알아보자<br/><br/>

##STEP1. '@types/cypress' 패키지 설치

```javascript
npm install --save-dev @types/cypress
```
<br/>
##STEP2. tsconfig.json 설정 변경<br/><br/>
1) compilerOptions에서 types를 추가해준다.<br/>
2) include에 cypress 하위에서 작성중인 테스트 파일 이름을 넣는다.<br/>
3) .ts 확장자 추가해준다.<br/><br/>

```javascript
  "compilerOptions": {
    //...생략...
    "types": ["cypress"],
    //...생략...
  },
  "include": ["src", "cypress/'폴더이름'", "**/*.ts"],
```
<br/>
이렇게 설정을 해두면 타입스크립트의 장점 중 하나인 메서드 미리보기를 볼 수 있다!