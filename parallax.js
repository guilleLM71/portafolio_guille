
(function () {
    var LOGOS = [
        { src: "Java-logo.png", top: 8, left: 2, speed: 0.22, size: 82, front: false },
        { src: "logohtml.webp", top: 5, left: 92, speed: 0.18, size: 78, front: true },
        { src: "logophp.webp", top: 35, left: 3, speed: 0.28, size: 76, front: false },
        { src: "logosql.png", top: 15, left: 78, speed: 0.2, size: 74, front: false },
        { src: "logo python.webp", top: 55, left: 88, speed: 0.24, size: 80, front: true },
        { src: "Java-logo.png", top: 70, left: 6, speed: 0.16, size: 72, front: false },
        { src: "logohtml.webp", top: 25, left: 15, speed: 0.26, size: 70, front: false },
        { src: "logophp.webp", top: 48, left: 94, speed: 0.2, size: 68, front: true },
        { src: "logosql.png", top: 82, left: 18, speed: 0.3, size: 76, front: false },
        { src: "logo python.webp", top: 12, left: 45, speed: 0.18, size: 72, front: false },
        { src: "Java-logo.png", top: 62, left: 82, speed: 0.24, size: 78, front: false },
        { src: "logohtml.webp", top: 88, left: 8, speed: 0.22, size: 74, front: true },
        { src: "logophp.webp", top: 42, left: 72, speed: 0.16, size: 70, front: false },
        { src: "logosql.png", top: 18, left: 28, speed: 0.28, size: 68, front: false },
        { src: "logo python.webp", top: 75, left: 55, speed: 0.2, size: 82, front: true }
    ];

    function createLogoEl(item) {
        var wrap = document.createElement("div");
        wrap.className = "parallax-logo-wrap";
        wrap.setAttribute("data-speed", item.speed);
        wrap.style.top = item.top + "%";
        wrap.style.left = item.left + "%";
        wrap.style.width = item.size + "px";
        wrap.style.height = item.size + "px";
        var img = document.createElement("img");
        img.className = "parallax-logo";
        img.src = item.src;
        img.alt = "";
        img.width = item.size;
        img.height = item.size;
        wrap.appendChild(img);
        return wrap;
    }

    function initParallax() {
        var containerBack = document.getElementById("parallax-logos");
        var containerFront = document.getElementById("parallax-logos-front");
        if (!containerBack) return;

        LOGOS.forEach(function (item) {
            var el = createLogoEl(item);
            if (item.front && containerFront) {
                containerFront.appendChild(el);
            } else {
                containerBack.appendChild(el);
            }
        });

        var logoWraps = document.querySelectorAll(".parallax-logo-wrap");

        function updateParallax() {
            var scrollY = window.pageYOffset || document.documentElement.scrollTop;

            logoWraps.forEach(function (wrap) {
                var speed = parseFloat(wrap.getAttribute("data-speed")) || 0.2;
                var offsetY = scrollY * speed * 0.5;
                wrap.style.transform = "translate3d(0, " + offsetY + "px, 0)";
            });
        }

        window.addEventListener("scroll", function () {
            requestAnimationFrame(updateParallax);
        }, { passive: true });

        window.addEventListener("resize", function () {
            requestAnimationFrame(updateParallax);
        });

        updateParallax();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initParallax);
    } else {
        initParallax();
    }
})();
