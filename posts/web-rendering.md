---
title: "HTML+CSS+JS vs React.js vs Next.js 차이점"
subtitle: "랜더링 변쳔사 한눈에 보기"
date: "2024-04-08"
---

## 1. HTML + CSS + Vanilla JS:<br/><br/>

가장 기본기로서 작은 프로젝트나 간단한 웹 페이지 만들기에 적합  
결과물 : HTML + CSS + JS  
장점 : 가장 빠르다  
단점 : 단일 페이지 애플리케이션(SPA)을 구축하기 어려움 <br/><br/>

---

<br/><br/>

## 2. React<br/><br/>

SPA (Single Page Application)의 일종으로 유사하게 Angular, Vue, Svelte 등이 있다.  
페이스북에서 만든 JavaScript 라이브러리  
언제 사용 ? : SEO 상관없는 인터렉션이 많은 모든 웹 (admin, B2B 페이지, Gmail, 지도 앱)  
결과물 : JS 정적 파일 (+html, css)  
장점 : 웹에서 앱처럼 UI상호작용이 가능한 웹사이트 개발 가능,  
단점 : SEO 불리 및 초기 JS로딩이 느리다. (첫 로딩시 빈 화면 보임 )<br/><br/>

---

<br/><br/>

## 3. Next.js<br/><br/>

MPA ( Mutiple Page Application )  
React 기반의 서버 사이드 렌더링(SSR) 및 정적 사이트 생성(Static Site Generation, SSG)을 지원하는 프레임워크입니다.  
언제사용 ? : SEO 최적화 또는 초기 로딩 속도 향상이 필요할 때, 즉 소비자와 직접적인 상호작용이 이루어지는 페이지 (B2C 형태)  
결과물 : 서버 Application ( + html 정적 파일)  
장점 : Full-Stack이 가능하도록 많은 기능이 탑재 (서버 API, DB 조회 등)  
단점: 이에 따른 웹 + 서버 전반의 지식 필요
