---
title: "[MySQL] 중복 확인 및 중복 제거 query"
subtitle: "JOIN을 통한 중복 제거 활용"
date: "2023-12-20"
---
우리는 개발을 하면서 많은 데이터를 경험한다.<br><br>
같은 테이블에서 중복된 데이터가 있을 경우 중복을 확인하고 중복을 제거하는 query를 생각보다 많이 필요로 하게 되는데, 나는 3개의 컬럼을 기준으로 중복을 확인하고 가장 최근 값만 남겨야 하는 상황이 있었다.<br><br>

### [컬럼 중복 값 확인 query]

```sql
SELECT 컬럼1, 컬럼2, 컬럼3, COUNT(*) AS CNT FROM 테이블명 A
GROUP BY 컬럼1, 컬럼2, 컬럼3
HAVING cnt > 1
ORDER BY cnt DESC;
```
<br/>
중복이 있는지 확인하는 쿼리는 간단하다. 단순히 총 카운트가 1이 넘는 지만 보면 된다.<br><br>

### [컬럼 중복 값 삭제 query]

```sql
DELETE A FROM 테이블명 A
INNER JOIN (
  SELECT 컬럼1, 컬럼2, 컬럼3, MAX(idx) as max_id
  FROM 테이블명
  GROUP BY 컬럼1, 컬럼2, 컬럼3,
) 테이블명 B
ON A.컬럼1 = B.컬럼1
AND A.컬럼2 = B.컬럼2
AND A.컬럼3 = B.컬럼3
AND A.idx < B.max_id;
```
<br>
### A.idx < B.max_id 를 통해 가장 최근 값만 남길 수 있게 됨 (과거의 것은 전부 삭제)