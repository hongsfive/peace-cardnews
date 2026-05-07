// 평화자료실 카드뉴스 이미지 뷰어
let currentCard = 0;
const totalCards = 8;
const siteTitle = '한국이 ‘핵잠수함’을 도입한다고요?';
const siteDescription = '든든한 방패일지, 위험한 도박일지… 우리가 꼭 알아야 할 5가지 진실';
const joinUrl = 'https://www.spark946.org/about/join';

function getShareMessage({ includePageUrl = true } = {}) {
  const pageUrl = getShareUrl();
  const pageUrlBlock = includePageUrl ? `\n\n👆 웹에서 자세히 보기: ${pageUrl}` : '';

  return `🚢 핵잠수함 도입, 과연 누구를 위한 것일까요?

카드로 알아보는 핵잠수함 도입의 진실
- 좁은 한반도 바다에 적합하지 않은 핵잠수함
- 자주국방이 아닌 미국 의존 심화
- 170조원의 막대한 혈세 낭비
- 대만분쟁 시 미중간 전쟁에 끌려갈 위험${pageUrlBlock}

진짜 자주국방과 한반도 평화를 위해
평화와통일을여는사람들과 함께해 주세요.

🤝 회원가입: ${joinUrl}

#핵잠수함반대 #자주국방 #한반도평화 #평통사`;
}

function getCards() {
  return Array.from(document.querySelectorAll('.card-frame'));
}

function getDots() {
  return Array.from(document.querySelectorAll('.dot'));
}

function getShareUrl() {
  return window.location.origin + window.location.pathname;
}

function updateCard() {
  const cards = getCards();
  const dots = getDots();
  cards.forEach((card, index) => card.classList.toggle('active', index === currentCard));
  dots.forEach((dot, index) => dot.classList.toggle('active', index === currentCard));
  const counter = document.getElementById('cardCounter');
  if (counter) counter.textContent = `${currentCard + 1} / ${totalCards}`;
}

function changeCard(direction) {
  currentCard = (currentCard + direction + totalCards) % totalCards;
  updateCard();
}

function goToCard(index) {
  if (index < 0 || index >= totalCards) return;
  currentCard = index;
  updateCard();
}

function openPopup(url, width = 640, height = 640) {
  window.open(url, '_blank', `noopener,noreferrer,width=${width},height=${height}`);
}

function shareTelegram() {
  const url = `https://t.me/share/url?url=${encodeURIComponent(getShareUrl())}&text=${encodeURIComponent(getShareMessage({ includePageUrl: false }))}`;
  openPopup(url, 640, 520);
}

async function nativeShare() {
  const shareData = {
    title: siteTitle,
    text: getShareMessage()
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
      return;
    } catch (error) {
      if (error && error.name === 'AbortError') return;
    }
  }

  copyShareMessage('카톡/문자 공유가 지원되지 않아 공유문구를 복사했습니다.');
}

function copyShareMessage(customMessage) {
  const text = getShareMessage();
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text)
      .then(() => showToast(customMessage || '공유문구가 복사되었습니다.'))
      .catch(() => fallbackCopy(text, customMessage || '공유문구가 복사되었습니다.'));
  } else {
    fallbackCopy(text, customMessage || '공유문구가 복사되었습니다.');
  }
}

function fallbackCopy(text, customMessage) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.left = '-9999px';
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand('copy');
    showToast(customMessage || '링크가 복사되었습니다.');
  } catch (error) {
    showToast('복사에 실패했습니다. 주소창의 링크를 복사해 주세요.');
  }
  document.body.removeChild(textarea);
}

function showToast(message) {
  const oldToast = document.querySelector('.toast');
  if (oldToast) oldToast.remove();
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2400);
}

let touchStartX = 0;
let touchStartY = 0;

function handleTouchStart(event) {
  const touch = event.touches[0];
  touchStartX = touch.clientX;
  touchStartY = touch.clientY;
}

function handleTouchEnd(event) {
  const touch = event.changedTouches[0];
  const dx = touch.clientX - touchStartX;
  const dy = touch.clientY - touchStartY;
  if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 42) {
    changeCard(dx > 0 ? -1 : 1);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  updateCard();

  const stage = document.getElementById('cardStage');
  if (stage) {
    stage.addEventListener('touchstart', handleTouchStart, { passive: true });
    stage.addEventListener('touchend', handleTouchEnd, { passive: true });
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') changeCard(-1);
    if (event.key === 'ArrowRight') changeCard(1);
    if (event.key === 'Home') goToCard(0);
    if (event.key === 'End') goToCard(totalCards - 1);
  });
});
