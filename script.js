const app = {}

app.slideImages = function () {
    // for app performance
    function debounce(func, wait = 20, immediate = true) {
        var timeout;
        return function () {
            var context = this, args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }

    const sliderImages = document.querySelectorAll('.slide-in');

    function checkSlide (e) {
        sliderImages.forEach(sliderImage => {
            const slideInAt = (window.scrollY + window.innerHeight);

            const imageBottom = sliderImage.offsetTop + sliderImage.height;

            const isHalfShown = slideInAt > sliderImage.offsetTop;

            const isNotScrolledPast = window.scrollY < imageBottom;

            if (isHalfShown && isNotScrolledPast) {
                sliderImage.classList.add('active');
            } 
        });
    }

    window.addEventListener('scroll', debounce(checkSlide));
}




app.smoothScroll = function () {
    $('a').smoothScroll({
        autoFocus: false,
        easing: 'swing',
        speed: '400',
    });
}

app.random = function randomItem(optionsArray) {
    const index = Math.floor(Math.random() * optionsArray.length);
    return optionsArray[index];
}

app.headerClick = function () {
    $('.logo').on('click', function (event) {
        const taglineArray = [
            `and I'm a front-end web developer`,
            `and I've always got snacks`,
            `and I'm late night reader`,
            `and I'm always up for a challenge`,
            `and I'll never turn down coffee`,
            `and I'm always up for a road trip`,
        ]
        const LineToDisplay = app.random(taglineArray);
        $('.tagline').text(LineToDisplay);


        const headerBackground = document.getElementById("header-background");
        headerBackground.classList.toggle("secondary-header-background");

        const smallTriangle = document.getElementById("small-triangle");
        smallTriangle.classList.toggle("secondary-small-triangle");

        const guillotineTriangle = document.getElementById("guillotine-triangle");
        guillotineTriangle.classList.toggle("secondary-guillotine-triangle");
    })
}

app.changeColor = function () {
    $('.bars').on('click', function (event) {
        const headerBackground = document.getElementById("header-background");
        headerBackground.classList.toggle("secondary-header-background");

        const smallTriangle = document.getElementById("small-triangle");
        smallTriangle.classList.toggle("secondary-small-triangle");

        const guillotineTriangle = document.getElementById("guillotine-triangle");
        guillotineTriangle.classList.toggle("secondary-guillotine-triangle");
    })

}

app.hamburger = function () {
    $('.hamburger').click(function () {
        $(this).toggleClass('active');
        $('nav').toggleClass('show');

    });
}







//initialize the app
app.init = function () {
    app.headerClick();
    app.smoothScroll();
    app.hamburger();
    app.changeColor();
    app.slideImages();
}

//call the init function after the page loads
$(function () {
    app.init();
})
