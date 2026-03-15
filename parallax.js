
(function () {
    /* ── Fuentes de logos (se repiten para tener más en pantalla) ── */
    var LOGO_SOURCES = [
        "Java-logo.png",
        "logohtml.webp",
        "logophp.webp",
        "logosql.png",
        "logo python.webp",
        "Java-logo.png",
        "logohtml.webp",
        "logophp.webp",
        "logosql.png",
        "logo python.webp",
        "Java-logo.png",
        "logohtml.webp",
        "logophp.webp",
        "logosql.png",
        "logo python.webp"
    ];

    /* ── Helpers ── */
    function rand(min, max) {
        return Math.random() * (max - min) + min;
    }

    /* Evitar que los logos se encimen demasiado */
    function isTooClose(top, left, placed, minDist) {
        for (var i = 0; i < placed.length; i++) {
            var dx = left - placed[i].left;
            var dy = top - placed[i].top;
            if (Math.sqrt(dx * dx + dy * dy) < minDist) return true;
        }
        return false;
    }

    /* ── Generar posiciones aleatorias (solo en los bordes) ── */
    function generateLogos() {
        var logos = [];
        var placed = [];
        var MIN_DIST = 10; // distancia mínima en % entre logos

        LOGO_SOURCES.forEach(function (src, idx) {
            var top, left, attempts = 0;

            /* Alternar entre borde izquierdo y derecho */
            var isLeft = idx % 2 === 0;

            do {
                top = rand(2, 92);
                left = isLeft ? rand(0, 12) : rand(88, 98);
                attempts++;
            } while (isTooClose(top, left, placed, MIN_DIST) && attempts < 60);

            placed.push({ top: top, left: left });

            logos.push({
                src: src,
                top: top,
                left: left,
                speed: rand(0.14, 0.3),
                size: Math.round(rand(80, 115)),
                front: Math.random() < 0.25
            });
        });

        return logos;
    }

    function createLogoEl(item) {
        var wrap = document.createElement("div");
        wrap.className = "parallax-logo-wrap";
        wrap.setAttribute("data-speed", item.speed.toFixed(3));
        wrap.style.top = item.top.toFixed(2) + "%";
        wrap.style.left = item.left.toFixed(2) + "%";
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

        /* Generar logos con posiciones random en cada refresh */
        var LOGOS = generateLogos();

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

