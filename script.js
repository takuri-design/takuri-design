document.addEventListener('DOMContentLoaded', () => {
    // 1. スクロール監視（スクロールに合わせて要素を表示）
    const observerOptions = {
        threshold: 0.2 // 20%見えたら発火
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    // 全ての.revealクラスを監視対象にする
    const targets = document.querySelectorAll('.reveal');
    targets.forEach(target => observer.observe(target));

    // 2. ヘッダーのスクロールエフェクト
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.padding = '20px 20px';
            header.style.background = 'rgba(17, 17, 17, 0.95)';
        } else {
            header.style.padding = '40px 20px';
            header.style.background = '#111111';
        }
    });
});
