document.addEventListener('DOMContentLoaded', () => {
    // 1. 포트폴리오 네비게이션 스크롤 효과
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('py-0', 'bg-[#08080A]/80');
            navbar.classList.remove('bg-[#08080A]/60');
        } else {
            navbar.classList.remove('py-0', 'bg-[#08080A]/80');
            navbar.classList.add('bg-[#08080A]/60');
        }
    });

    // 2. 스크롤 등장 애니메이션 (Observer)
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // 한 번 등장하면 다시 트리거되지 않도록 해제
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);
    
    // .fade-in-up 클래스를 가진 모든 요소 추적
    document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));

    // 3. 텍스트 에어리어의 코드를 읽어 아이프레임에 주입 (데스크탑)
    const desktopIframe = document.getElementById('desktop-prototype-iframe');
    const desktopCode = document.getElementById('desktop-prototype-code');
    if (desktopIframe && desktopCode) {
        desktopIframe.srcdoc = desktopCode.value;
    }

    // 4. 텍스트 에어리어의 코드를 읽어 아이프레임에 주입 (모바일/태블릿 반응형)
    const responsiveIframes = document.querySelectorAll('.prototype-iframe-responsive');
    const responsiveCode = document.getElementById('responsive-prototype-code');
    if (responsiveIframes.length > 0 && responsiveCode) {
        responsiveIframes.forEach(iframe => {
            iframe.srcdoc = responsiveCode.value;
        });
    }
});
