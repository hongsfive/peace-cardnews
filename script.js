// 평화자료실 카드뉴스 이미지 뷰어
let currentCard = 0;
const totalCards = 8;
const siteTitle = '한국이 ‘핵잠수함’을 도입한다고요?';
const siteDescription = '든든한 방패일지, 위험한 도박일지… 우리가 꼭 알아야 할 5가지 진실';

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

function shareKakao() {
  // 별도 Kakao Developers JavaScript 키 없이 가능한 간단 공유 방식입니다.
  const text = `${siteTitle}\n${siteDescription}`;
  const url = `https://sharer.kakao.com/talk/friends/picker/link?url=${encodeURIComponent(getShareUrl())}&text=${encodeURIComponent(text)}`;
  openPopup(url, 520, 680);
}

function shareTelegram() {
  const url = `https://t.me/share/url?url=${encodeURIComponent(getShareUrl())}&text=${encodeURIComponent(siteTitle + ' - ' + siteDescription)}`;
  openPopup(url, 640, 520);
}

function shareTwitter() {
  const text = `${siteTitle}\n${siteDescription}`;
  const hashtags = '핵잠수함,한반도평화,평통사';
  const url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(getShareUrl())}&text=${encodeURIComponent(text)}&hashtags=${encodeURIComponent(hashtags)}`;
  openPopup(url, 640, 520);
}

function shareFacebook() {
  const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(getShareUrl())}`;
  openPopup(url, 640, 520);
}

async function nativeShare() {
  const shareData = {
    title: siteTitle,
    text: siteDescription,
    url: getShareUrl()
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
      return;
    } catch (error) {
      if (error && error.name === 'AbortError') return;
    }
  }

  copyLink('모바일 공유가 지원되지 않아 링크를 복사했습니다.');
}

function copyLink(customMessage) {
  const url = getShareUrl();
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(url)
      .then(() => showToast(customMessage || '링크가 복사되었습니다.'))
      .catch(() => fallbackCopy(url, customMessage));
  } else {
    fallbackCopy(url, customMessage);
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

function downloadCurrentImage() {
  const cardNumber = String(currentCard + 1).padStart(2, '0');
  const link = document.createElement('a');
  link.href = `images/card${cardNumber}.jpg`;
  link.download = `nuclear-submarine-cardnews-${cardNumber}.jpg`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  showToast(`${currentCard + 1}번 카드 저장을 시작합니다.`);
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
