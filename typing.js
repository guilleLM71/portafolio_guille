document.addEventListener("DOMContentLoaded", function () {

    const text = "Desarrollador Web Fullstack";
    const typingElement = document.getElementById("typing");

    let index = 0;
    let isDeleting = false;

    function typeLoop() {
        if (!isDeleting) {
            typingElement.textContent = text.substring(0, index++);
            if (index > text.length) {
                isDeleting = true;
                setTimeout(typeLoop, 1200);
                return;
            }
        } else {
            typingElement.textContent = text.substring(0, index--);
            if (index === 0) {
                isDeleting = false;
            }
        }

        setTimeout(typeLoop, isDeleting ? 40 : 80);
    }

    typeLoop();
});

