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

개인정보 친화적인 가벼운 통계 도구인 GoatCounter 스크립트를 삽입했습니다.

- 집계 대시보드: https://peace-cardnews.goatcounter.com/
- 집계 스크립트: `https://peace-cardnews.goatcounter.com/count`

주의:

- 실제 집계를 시작하려면 GoatCounter에 `peace-cardnews` 사이트 코드가 생성되어 있어야 합니다.
- 추적 스크립트가 붙은 이후 방문부터 집계됩니다. 과거 방문은 소급 집계되지 않습니다.
- GitHub 저장소 기본 Traffic도 보조적으로 확인할 수 있습니다.
  1. GitHub 저장소 접속: https://github.com/hongsfive/peace-cardnews
  2. 상단 `Insights` 클릭
  3. 왼쪽 `Traffic` 클릭
  4. Views, Unique visitors, Referring sites, Popular content 확인

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
