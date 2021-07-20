/////////////////////////////////////////////////////////////
const colorPrimary = '#EFE6D5';

const hide = 'hide';

const crawlUp = 'up';
const crawlDown = 'down';
const scaleUp = 'scale-up';
const fadeIn = 'fade-in';
const slideIn = 'slide-in';




////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
// STARTUP ANIMATION :
////////////////////////////////////////////////////////////
function introAnimation() {
    const splashScreen = document.querySelectorAll('.splash-screen')[0];
    const topBar = document.querySelectorAll('.top-bar')[0];
    const HeaderLoader = document.querySelectorAll('header .loader')[0];

    // STEPS :

    // 1. display splash
    setTimeout(function() {
        splashScreen.classList.add(fadeIn)
    }, 500);
    setTimeout(function() {
        const blockLogo = document.querySelectorAll('.splash-screen h1')[0];
        blockLogo.style.letterSpacing = 0;
    }, 1000);


    // 2. slide loader
    setTimeout(function() {
        const bottomBar = document.querySelectorAll('.bottom-bar')[0];

        for (let i = 1; i < 5; i++) {
            const loaderBar = document.querySelectorAll('header .loader .bar:nth-child(' + i + ')')[0];
            loaderBar.classList.add(slideIn);
        }

        topBar.classList.remove(hide);
        bottomBar.classList.remove(hide);
    }, 3000);


    // 3. animate header element
    setTimeout(function() {
        const topBarLogo = document.querySelectorAll('.top-bar .block-logo h4')[0];

        topBarLogo.classList.add(fadeIn);
    }, 4500);
    setTimeout(function() {
        const topBarGallery = document.querySelectorAll('.top-bar .left-nav')[0];
        const topBarNav = document.querySelectorAll('.top-bar .right-nav')[0];


        const bottomBarScroll = document.querySelectorAll('.bottom-bar .center-bar')[0];
        const bottomBarNav = document.querySelectorAll('.bottom-bar .right-nav')[0];
        topBarGallery.classList.add(fadeIn);
        topBarNav.classList.add(fadeIn);
        bottomBarScroll.classList.add(fadeIn);
        bottomBarNav.classList.add(fadeIn);
    }, 4600);
    setTimeout(function() {
        HeaderLoader.style.display = 'none';
        splashScreen.classList.add(hide);
        const headerh1SpanOne = document.querySelectorAll('header h1 .crawl-down')[0];
        const headerh1SpanTwo = document.querySelectorAll('header h1 .crawl-up')[0];
        const headerP = document.querySelectorAll('header .fade')[0];

        headerh1SpanOne.classList.add(crawlDown);
        headerh1SpanTwo.classList.add(crawlUp);
        headerP.classList.add(fadeIn);
    }, 4700);
    setTimeout(function() {
        const headerBlockGallery = document.querySelectorAll('header .block-gallery')[0];
        headerBlockGallery.classList.add(fadeIn);

        for (let i = 1; i < 6; i++) {
            const headerImg = document.querySelectorAll('header .block-gallery .wrapper .img:nth-child(' + i + ')')[0];
            headerImg.classList.add(fadeIn);
            headerImg.classList.add(scaleUp);
        }

        topBar.style.backgroundColor = colorPrimary;
    }, 5000);

    setTimeout(function() {
        const headerBlockGallery = document.querySelectorAll('header .block-gallery')[0];
        headerBlockGallery.classList.remove(hide);

        for (let i = 1; i < 6; i++) {
            const headerImg = document.querySelectorAll('header .block-gallery .wrapper .img:nth-child(' + i + ')')[0];
            headerImg.classList.add(scaleUp);
        }
    }, 5500);

    // 4. display main
    setTimeout(function() {
        const main = document.querySelectorAll('main')[0];
        main.style.display = 'block';
        const eleImage = document.querySelectorAll('.img')[0];
        eleImage.style.transitionDelay = 0;
    }, 6200);
}




////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
// EVENT HANDLERS :
window.onload = new function() {
    introAnimation();
}


window.addEventListener("scroll", function(event) {
    // store scrollY value
    let scrollTopVal = this.scrollY;

    // smoothScrollMain(scrollTopVal);
});




////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
// FUNCTION DECLARATIONS :

// CHECK IF ELEMENT VISIBLE : Get an element and verify if it is in viewport
function isElementVisible(el) {
    var rect = el.getBoundingClientRect(),
        vWidth = window.innerWidth || document.documentElement.clientWidth,
        vHeight = window.innerHeight || document.documentElement.clientHeight,
        efp = function(x, y) { return document.elementFromPoint(x, y) };

    // Return false if it's not in the viewport
    if (rect.right < 0 || rect.bottom < 0 ||
        rect.left > vWidth || rect.top > vHeight)
        return false;

    // Return true if any of its four corners are visible
    return (
        el.contains(efp(rect.left, rect.top)) ||
        el.contains(efp(rect.right, rect.top)) ||
        el.contains(efp(rect.right, rect.bottom)) ||
        el.contains(efp(rect.left, rect.bottom))
    );
}

// SCROLL DELAY CALCULATION : Calculate delay for scroll
function calcScrollVal(scrollYVal) {
    let newScrollVal = (scrollYVal / 2 * 3);
    return newScrollVal;
}

// SCROLL DELAY ANIMATION : Delay effect on scrolling
function smoothScrollMain(scrollYVal) {
    let delay = (scrollYVal / 2 * 2);

    const header = document.querySelectorAll('header')[0];
    const main = document.querySelectorAll('main')[0];
    header.style.transform = "translate3d(0,-" + delay + "px, 0)";
    main.style.transform = "translate3d(0,-" + delay + "px, 0)";
}