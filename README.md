## Tech Stack
- Next 14 (App Router), TypeScript
  
## FILE TREE
- app : 파일 페이지 구성
- components : 페이지별 컴포넌트 구성
- posts : 블로그 리스트
```bash
app
 ┣ about
 ┃ ┣ about.module.css
 ┃ ┗ page.tsx
 ┣ posts
 ┃ ┣ [slug]
 ┃ ┃ ┣ page.tsx
 ┃ ┃ ┗ post.module.css
 ┃ ┣ page.tsx
 ┃ ┗ posts.module.css
 ┣ favicon.ico
 ┣ globals.css
 ┣ layout.tsx
 ┣ main.module.css
 ┗ page.tsx

components
 ┣ Banner
 ┃ ┣ Banner.module.css
 ┃ ┗ Banner.tsx
 ┣ Footer
 ┃ ┣ Footer.module.css
 ┃ ┗ Footer.tsx
 ┣ Header
 ┃ ┣ Header.module.css
 ┃ ┗ Header.tsx
 ┣ NavBar
 ┃ ┣ _component
 ┃ ┃ ┗ Mode.tsx
 ┃ ┣ NavBar.module.css
 ┃ ┗ NavBar.tsx
 ┗ Post
 ┃ ┣ PostPreview.module.css
 ┃ ┣ getPostMetadata.tsx
 ┃ ┗ previewPost.tsx
```

## CONTENTS
1. 자기소개 및 블로그 포스팅
2. 다크모드 및 반응형 구성
