document.addEventListener('DOMContentLoaded', function () {
    var revealElements = document.querySelectorAll('.scroll-reveal');
    if (!revealElements.length) return;

    var observerOptions = {
        root: null,
        rootMargin: '0px 0px 80px 0px',
        threshold: 0.05
    };

    var revealOnScroll = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealElements.forEach(function (el) {
        revealOnScroll.observe(el);
    });
});
