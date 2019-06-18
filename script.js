const app = {}

app.smoothScroll = function () {
    $('a').smoothScroll({
        autoFocus: false,
        easing: 'swing',
        speed: '400',
    });
}

app.headerClick = function () {
    $('.logo').on('click', function (event) {
        const taglineArray = [
            `and I'm a front-end web developer`,
            `and I've always got snacks`,
            `and I'm a pretty nice human`,
            `and I'm late night reader`,
            `and I'll never turn down coffee`,
            `and I love a good joke`,
            `and I'm always up for a road trip`,
            `and I never met a cup of tea I didn't like`,
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
    $('.hamburger').on('click', function () {
        $('nav').slideToggle('show')
    })

    $('.exit-responsive').on('click', function () {
        $('nav').slideToggle('show')
    })
}

app.random = function randomItem(optionsArray) {
    const index = Math.floor(Math.random() * optionsArray.length);
    return optionsArray[index];
}


//initialize the app
app.init = function () {
    app.headerClick();
    app.smoothScroll();
    app.hamburger();
    app.changeColor();
}

//call the init function after the page loads
$(function () {
    app.init();
})