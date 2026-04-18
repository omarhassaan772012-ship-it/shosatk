document.addEventListener('DOMContentLoaded', function () {
    var lazyImages = [].slice.call(document.querySelectorAll('img[loading="lazy"], img[data-src]'));
    var lazyBackgrounds = [].slice.call(document.querySelectorAll('[data-bg]'));

    if ('IntersectionObserver' in window) {
        var lazyImageObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    var img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    img.classList.remove('lazyload');
                    lazyImageObserver.unobserve(img);
                }
            });
        }, {
            rootMargin: '0px 0px 200px 0px',
            threshold: 0.01
        });

        lazyImages.forEach(function (img) {
            if (img.dataset.src) {
                lazyImageObserver.observe(img);
            }
        });

        var lazyBackgroundObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    var el = entry.target;
                    el.style.backgroundImage = 'url(' + el.dataset.bg + ')';
                    el.removeAttribute('data-bg');
                    lazyBackgroundObserver.unobserve(el);
                }
            });
        }, {
            rootMargin: '0px 0px 200px 0px',
            threshold: 0.01
        });

        lazyBackgrounds.forEach(function (bg) {
            lazyBackgroundObserver.observe(bg);
        });
    }
});