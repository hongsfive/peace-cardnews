# 평화자료실 카드뉴스 웹사이트 GitHub Pages 배포 가이드

## 📋 완성된 파일 구조

```
평통사홍보도우미/30_카드뉴스/웹사이트/
├── index.html      (메인 페이지)
├── styles.css      (스타일시트)
├── script.js       (인터랙션 스크립트)
└── README.md       (이 가이드)
```

## 🚀 GitHub Pages 배포 단계

### 1. GitHub 계정 생성 (익명 권장)
- 계정명 예시: `peace-archive-kr` 또는 `korea-peace-docs`
- 이메일: 임시 이메일 사용 권장
- 프로필 정보: 최소한만 입력

### 2. 저장소 생성
```
저장소명: peace-cardnews
설명: Peace Archive for Korean Peninsula - Card News
Public 저장소로 설정
README.md 포함하여 생성
```

### 3. 파일 업로드 방법

#### 옵션 A: 웹 인터페이스 (간단)
1. GitHub에서 "Upload files" 클릭
2. 위 4개 파일을 드래그앤드롭
3. Commit message: "Initial card news website"
4. "Commit new files" 클릭

#### 옵션 B: Git 명령어 (고급)
```bash
git clone https://github.com/[계정명]/peace-cardnews.git
cd peace-cardnews
# 파일들 복사
git add .
git commit -m "Initial card news website"
git push origin main
```

### 4. GitHub Pages 활성화
1. 저장소 Settings 탭 이동
2. 왼쪽 사이드바 "Pages" 클릭
3. Source: "Deploy from a branch" 선택
4. Branch: "main" 선택
5. Folder: "/ (root)" 선택
6. "Save" 클릭

### 5. 도메인 접속
- 약 5-10분 후 접속 가능
- URL: `https://[계정명].github.io/peace-cardnews`
- 예시: `https://peace-archive-kr.github.io/peace-cardnews`

## 🔧 커스터마이징 가능 사항

### 이미지 추가 시
```html
<!-- index.html에서 placeholder-image 부분을 실제 이미지로 교체 -->
<div class="card-image">
    <img src="images/card1.jpg" alt="카드 1 이미지" 
         style="max-width: 100%; height: auto; border-radius: 10px;">
</div>
```

### 로고 추가 시
```html
<!-- header 부분에 로고 이미지 추가 -->
<div class="logo">
    <img src="images/logo.png" alt="평통사 로고" style="height: 50px;">
    <h1>평화자료실</h1>
</div>
```

### 도메인 연결 (선택사항)
```
평통사 기존 도메인의 서브도메인 사용 가능
예: cardnews.spark946.org
GitHub Pages Settings에서 Custom domain 설정
```

## 📱 기능 설명

### 완성된 기능들
- ✅ **반응형 디자인**: 모바일/태블릿/데스크톱 최적화
- ✅ **카드 네비게이션**: 클릭, 키보드, 스와이프 지원
- ✅ **자동 재생**: 10초마다 자동 넘김 (호버시 일시정지)
- ✅ **소셜 공유**: 카카오톡, 페이스북, 트위터, 링크복사
- ✅ **접근성**: 스크린 리더, 키보드 네비게이션 지원
- ✅ **SEO 최적화**: 메타태그, 구조화된 제목
- ✅ **평통사 회원가입 연결**: 실제 링크 적용됨

### 향후 추가 가능 기능
- 📊 Google Analytics 연동
- 🖼️ 실제 카드뉴스 이미지 적용
- 📧 이메일 구독 기능
- 🔍 검색 기능
- 📱 PWA (프로그레시브 웹앱) 변환

## 🎯 URL 및 링크 정보

### 회원가입 링크
- 실제 연결: `https://www.spark946.org/about/join`
- 버튼 위치: 하단 액션 섹션

### 공유 기능
- 카카오톡: 웹 버전 공유
- 페이스북: 직접 공유
- 트위터: 해시태그 포함
- 링크복사: 클립보드 복사

## 🔒 보안 및 익명성

### GitHub 익명성 보장
```
✅ 조직/중립 계정명 사용
✅ 개인정보 최소화
✅ 임시 이메일 사용
✅ 프로필 사진 없음
✅ 커밋시 익명 설정 가능
```

### Git 익명 설정
```bash
git config user.name "Peace Archive"
git config user.email "noreply@users.noreply.github.com"
```

## 📈 성과 측정

### GitHub에서 확인 가능한 지표
- 페이지 조회수 (Insights > Traffic)
- 방문자 수와 접속 경로
- 인기 페이지 분석

### 추가 분석 도구
```html
<!-- Google Analytics 추가시 (선택사항) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
```

## 🚨 주의사항

1. **콘텐츠 저작권**: 평통사 공식 자료 확인 필요
2. **링크 유지**: spark946.org 주소 변경시 업데이트 필요  
3. **정기 점검**: GitHub Pages 상태 확인
4. **백업**: 소스코드 로컬 백업 권장

## 📞 기술 지원

배포 과정에서 문제 발생시:
1. GitHub Pages 상태 확인: [GitHub Status](https://www.githubstatus.com/)
2. 브라우저 캐시 삭제 후 재접속
3. 소스코드 문법 오류 점검
4. 추가 도움 필요시 연락

**지금 바로 시작할 수 있습니다!** 위 4개 파일을 GitHub에 업로드하시면 됩니다.