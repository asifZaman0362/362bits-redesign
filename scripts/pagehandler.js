var isScrolling = false;
var isShrunk = false;
var lastScroll = 0;


window.addEventListener(onload, () => function() {document.body.style.overflow = "hidden";})

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
    console.log("aint scroll no mo playa!");
}