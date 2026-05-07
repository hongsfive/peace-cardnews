// 평화자료실 - 카드뉴스 인터랙션 스크립트

let currentCard = 0;
const totalCards = 8;

// 카드 변경 함수
function changeCard(direction) {
    const cards = document.querySelectorAll('.card');
    const indicators = document.querySelectorAll('.indicator');
    
    // 현재 카드 비활성화
    cards[currentCard].classList.remove('active');
    indicators[currentCard].classList.remove('active');
    
    // 새로운 카드 인덱스 계산
    currentCard += direction;
    
    // 범위 체크
    if (currentCard >= totalCards) {
        currentCard = 0;
    } else if (currentCard < 0) {
        currentCard = totalCards - 1;
    }
    
    // 새로운 카드 활성화
    cards[currentCard].classList.add('active');
    indicators[currentCard].classList.add('active');
    
    // 버튼 상태 업데이트
    updateNavigationButtons();
}

// 특정 카드로 이동
function goToCard(cardIndex) {
    if (cardIndex >= 0 && cardIndex < totalCards) {
        const cards = document.querySelectorAll('.card');
        const indicators = document.querySelectorAll('.indicator');
        
        // 현재 카드 비활성화
        cards[currentCard].classList.remove('active');
        indicators[currentCard].classList.remove('active');
        
        // 새로운 카드 활성화
        currentCard = cardIndex;
        cards[currentCard].classList.add('active');
        indicators[currentCard].classList.add('active');
        
        // 버튼 상태 업데이트
        updateNavigationButtons();
    }
}

// 네비게이션 버튼 상태 업데이트
function updateNavigationButtons() {
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    // 첫 번째 카드에서는 이전 버튼 비활성화하지 않음 (순환 구조)
    // 마지막 카드에서는 다음 버튼 비활성화하지 않음 (순환 구조)
    
    // 버튼 항상 활성화 (순환 네비게이션)
    prevBtn.disabled = false;
    nextBtn.disabled = false;
}

// 키보드 네비게이션
function handleKeyPress(event) {
    switch(event.key) {
        case 'ArrowLeft':
            changeCard(-1);
            break;
        case 'ArrowRight':
            changeCard(1);
            break;
        case 'Home':
            goToCard(0);
            break;
        case 'End':
            goToCard(totalCards - 1);
            break;
    }
}

// 터치/스와이프 지원
let startX = 0;
let startY = 0;
let endX = 0;
let endY = 0;

function handleTouchStart(event) {
    startX = event.touches[0].clientX;
    startY = event.touches[0].clientY;
}

function handleTouchEnd(event) {
    endX = event.changedTouches[0].clientX;
    endY = event.changedTouches[0].clientY;
    
    const deltaX = endX - startX;
    const deltaY = endY - startY;
    
    // 수평 스와이프만 감지 (세로 스크롤과 구분)
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
        if (deltaX > 0) {
            changeCard(-1); // 오른쪽 스와이프 = 이전 카드
        } else {
            changeCard(1);  // 왼쪽 스와이프 = 다음 카드
        }
    }
}

// 자동 재생 기능
let autoPlayInterval = null;
const autoPlayDelay = 10000; // 10초

function startAutoPlay() {
    if (autoPlayInterval) return;
    
    autoPlayInterval = setInterval(() => {
        changeCard(1);
    }, autoPlayDelay);
}

function stopAutoPlay() {
    if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
        autoPlayInterval = null;
    }
}

function restartAutoPlay() {
    stopAutoPlay();
    setTimeout(startAutoPlay, 3000); // 3초 후 다시 시작
}

// 공유 기능
function shareKakao() {
    const url = window.location.href;
    const title = '핵잠수함 도입, 우리가 알아야 할 진실';
    const description = '좁은 바다에 당치 큰 잠수함? 8장 카드뉴스로 알아보는 핵잠수함 도입의 진실';
    
    // 카카오톡 공유 (웹 버전)
    const kakaoUrl = `https://sharer.kakao.com/talk/friends/picker/link?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title + ' - ' + description)}`;
    
    try {
        window.open(kakaoUrl, '_blank', 'width=500,height=600');
    } catch (error) {
        copyLink();
        alert('링크가 복사되었습니다. 카카오톡에서 직접 공유해 주세요.');
    }
}

function shareFacebook() {
    const url = window.location.href;
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
    
    window.open(facebookUrl, '_blank', 'width=600,height=400');
}

function shareTwitter() {
    const url = window.location.href;
    const title = '핵잠수함 도입, 우리가 알아야 할 진실';
    const hashtags = '핵잠수함반대,자주국방,한반도평화,평통사';
    
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}&hashtags=${hashtags}`;
    
    window.open(twitterUrl, '_blank', 'width=600,height=400');
}

function copyLink() {
    const url = window.location.href;
    
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(() => {
            showCopyMessage('링크가 복사되었습니다!');
        }).catch(() => {
            fallbackCopyText(url);
        });
    } else {
        fallbackCopyText(url);
    }
}

function fallbackCopyText(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        showCopyMessage('링크가 복사되었습니다!');
    } catch (err) {
        showCopyMessage('링크 복사에 실패했습니다. 직접 복사해 주세요: ' + text);
    }
    
    document.body.removeChild(textArea);
}

function showCopyMessage(message) {
    // 토스트 메시지 표시
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: #2c3e50;
        color: white;
        padding: 12px 24px;
        border-radius: 25px;
        font-size: 14px;
        z-index: 9999;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        animation: fadeInUp 0.3s ease-out;
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'fadeOutDown 0.3s ease-out forwards';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

// 페이지 가시성 API로 자동 재생 제어
function handleVisibilityChange() {
    if (document.hidden) {
        stopAutoPlay();
    } else {
        restartAutoPlay();
    }
}

// 스크롤 위치에 따른 애니메이션
function handleScroll() {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    
    // 카드뉴스 섹션이 보이면 자동 재생 시작
    const cardnewsSection = document.querySelector('.cardnews-section');
    const rect = cardnewsSection.getBoundingClientRect();
    
    if (rect.top < windowHeight && rect.bottom > 0) {
        if (!autoPlayInterval) {
            startAutoPlay();
        }
    } else {
        stopAutoPlay();
    }
}

// 초기화 함수
function initialize() {
    // 키보드 이벤트 리스너
    document.addEventListener('keydown', handleKeyPress);
    
    // 터치 이벤트 리스너
    const slider = document.querySelector('.slider');
    slider.addEventListener('touchstart', handleTouchStart, { passive: true });
    slider.addEventListener('touchend', handleTouchEnd, { passive: true });
    
    // 마우스 호버시 자동 재생 일시 정지
    const sliderContainer = document.querySelector('.slider-container');
    sliderContainer.addEventListener('mouseenter', stopAutoPlay);
    sliderContainer.addEventListener('mouseleave', restartAutoPlay);
    
    // 페이지 가시성 변화 감지
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    // 스크롤 이벤트 (스로틀링 적용)
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(handleScroll, 100);
    }, { passive: true });
    
    // 초기 네비게이션 버튼 상태 설정
    updateNavigationButtons();
    
    // 자동 재생 시작 (3초 후)
    setTimeout(startAutoPlay, 3000);
    
    // 접근성: 포커스 관리
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.setAttribute('tabindex', index === 0 ? '0' : '-1');
        card.setAttribute('role', 'tabpanel');
        card.setAttribute('aria-label', `카드 ${index + 1}/${totalCards}`);
    });
    
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        indicator.setAttribute('tabindex', '0');
        indicator.setAttribute('role', 'button');
        indicator.setAttribute('aria-label', `${index + 1}번째 카드로 이동`);
        
        // 키보드 접근성
        indicator.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                goToCard(index);
            }
        });
    });
    
    console.log('평화자료실 카드뉴스 사이트가 초기화되었습니다.');
}

// CSS 애니메이션 추가
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOutDown {
        to {
            opacity: 0;
            transform: translateX(-50%) translateY(10px);
        }
    }
`;
document.head.appendChild(style);

// DOM 로드 완료 시 초기화
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
} else {
    initialize();
}

// 브라우저 뒤로가기/앞으로가기 지원
window.addEventListener('popstate', (event) => {
    if (event.state && typeof event.state.cardIndex === 'number') {
        goToCard(event.state.cardIndex);
    }
});

// URL 해시로 특정 카드 접근 지원
function handleHashChange() {
    const hash = window.location.hash;
    const cardMatch = hash.match(/^#card-(\d+)$/);
    
    if (cardMatch) {
        const cardIndex = parseInt(cardMatch[1]) - 1;
        if (cardIndex >= 0 && cardIndex < totalCards) {
            goToCard(cardIndex);
        }
    }
}

// 해시 변경 감지
window.addEventListener('hashchange', handleHashChange);

// 페이지 로드시 해시 확인
window.addEventListener('load', handleHashChange);