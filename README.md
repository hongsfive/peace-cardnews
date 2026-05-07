# 평화자료실 카드뉴스 웹사이트

## 배포 URL

- 웹사이트: https://hongsfive.github.io/peace-cardnews/
- GitHub 저장소: https://github.com/hongsfive/peace-cardnews

## 파일 구조

```text
웹사이트/
├── index.html
├── styles.css
├── script.js
├── README.md
├── cardnews-images.zip
└── images/
    ├── card01.jpg
    ├── card02.jpg
    ├── card03.jpg
    ├── card04.jpg
    ├── card05.jpg
    ├── card06.jpg
    ├── card07.jpg
    └── card08.jpg
```

## 내용

코코딩이 업로드한 원본 카드뉴스 이미지 8장을 중심으로 만든 GitHub Pages용 정적 웹사이트입니다.

- 주제: 한국 핵잠수함 도입 문제
- 카드 수: 8장
- 이미지 크기: 1280×1280
- 카드뉴스 출처 표기: 대전/보령 평화와통일을여는사람들

## 기능

- 모바일/데스크톱 반응형 카드뉴스 뷰어
- 좌우 버튼 이동
- 모바일 스와이프 이동
- 키보드 이동: ← / → / Home / End
- 카드 번호와 점 인디케이터
- 평통사 회원가입 링크
- 공유 버튼
  - 텔레그램 공유
  - 카톡/문자 공유: 모바일 기본 공유 시트
  - 공유문구 복사
- 이미지 저장
  - 전체 카드뉴스 ZIP 다운로드
- SNS 공유용 Open Graph 이미지 설정

## 주요 링크

- 평통사 회원가입: https://www.spark946.org/about/join
- 평통사 홈페이지: https://www.spark946.org
- 핵추진잠수함 도입의 문제점 자세히 알아보기: https://www.spark946.org/notice/comment?tpf=board/view&board_code=6&code=28303

## 조회수 확인

현재 별도 추적 스크립트는 넣지 않았습니다. 방문자 통계는 GitHub 저장소에서 확인합니다.

1. GitHub 저장소 접속: https://github.com/hongsfive/peace-cardnews
2. 상단 `Insights` 클릭
3. 왼쪽 `Traffic` 클릭
4. 확인 가능한 항목
   - Views: 페이지 조회수
   - Unique visitors: 순방문자 수
   - Referring sites: 유입 사이트
   - Popular content: 많이 본 경로

주의:

- GitHub Traffic 통계는 저장소 소유자/권한 있는 사용자에게만 보입니다.
- 보통 최근 14일 중심으로 보여줍니다.
- 더 정확한 장기 통계가 필요하면 GoatCounter, Cloudflare Web Analytics, Plausible, Google Analytics 중 하나를 붙이는 방식이 필요합니다.
- 시민단체 홍보물에는 쿠키 없는 가벼운 통계 도구인 GoatCounter 또는 Cloudflare Web Analytics가 비교적 적합합니다.

## hongsfive URL 노출 관련

현재 GitHub Pages 구조상 주소에 GitHub 계정명 `hongsfive`가 들어갑니다.

해결 방법:

- 단기: 현재 URL 그대로 사용하거나 단축 URL 사용
- 중기: 중립 GitHub 계정/조직으로 저장소 이전
- 장기: 커스텀 도메인 연결
  - 예: `cardnews.spark946.org`
  - 평통사 도메인 DNS 설정 권한이 필요합니다.

## 배포 방식

- GitHub Pages
- Branch: `main`
- Path: `/`
