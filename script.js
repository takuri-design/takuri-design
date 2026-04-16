document.addEventListener('DOMContentLoaded', () => {
  // 1. スクロールアニメーション（Reveal効果）
  const revealElements = document.querySelectorAll('section, .work-card');
  
  // 要素に一括でクラスを適用
  revealElements.forEach(el => el.classList.add('reveal'));

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach(el => {
      const elTop = el.getBoundingClientRect().top;
      if (elTop < triggerBottom) {
        el.classList.add('active');
      }
    });
  };

  // 2. ヘッダーのスクロールエフェクト
  const header = document.querySelector('header');
  const shrinkHeader = () => {
    if (window.scrollY > 50) {
      header.style.padding = '10px 20px';
      header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.2)';
    } else {
      header.style.padding = '30px 20px';
      header.style.boxShadow = 'none';
    }
  };

  // イベントリスナーの登録
  window.addEventListener('scroll', () => {
    revealOnScroll();
    shrinkHeader();
  });

  // 初回実行
  revealOnScroll();
});
