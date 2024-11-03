function transitionToPage(href) {
    document.querySelector('body').style.transition = "0.3s"
    document.querySelector('body').style.opacity = 0
    setTimeout(function () {
        window.location = href
    }, 500)
}
document.addEventListener('load', function (event) {
    document.querySelector('body').style.opacity = 1
})

function loading() {
    document.body.style.opacity = 1;
    setTimeout(function () {
        document.querySelector('.back-container').style.transform="translateY(5vh)";
        document.querySelector('.loading-container').style.opacity=0;
    }, 500);
    setTimeout(function () {
        const element = document.getElementById("loading-element");
        element.remove(element);
    }, 1250);
}


function pageTransition() {
    document.querySelector('body').style.opacity = 1;
    document.querySelector('.back-container').style.transform = "translateY(5vh)";
}


function delay(URL) {
    setTimeout(function () { window.location = URL }, 100);
}

function getTimeSptamp() {
    return Date.now();
}