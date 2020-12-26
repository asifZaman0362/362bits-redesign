var isScrolling = false;
var isShrunk = false;
var lastScroll = 0;


window.addEventListener(onload, onPageLoad);

function scrollDown() {
    if (isShrunk || isScrolling) return;
    else {
        isShrunk = true;
        isScrolling = true;
        document.getElementById("splash_container").classList.add('collapsed');
        document.body.style.overflow = "auto";
        setTimeout(resetScroll, 2000);
    }
}

function scrollUp() {
    if (!isShrunk || isScrolling) return;
    else {
        isShrunk = false;
        isScrolling = true;
        document.body.style.overflow = "hidden";
        scrollTo(0, 0);
        document.getElementById("splash_container").classList.remove('collapsed');
        setTimeout(resetScroll, 2000);
    }
}

function resetScroll() {
    isScrolling = false;
}

function onPageLoad() {
    document.body.style.overflow = "hidden";
    scrollTo(0, 0);
}
