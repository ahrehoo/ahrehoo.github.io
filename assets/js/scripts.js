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
    setTimeout(function () {
        document.querySelector('.white-container').style.opacity = 1;
        document.querySelector('.element-container').style.transform = "translateY(0vh)";
        document.querySelector('.loading-container').style.opacity = 0;
        document.querySelector('.background-image-top-left').style.width = "100%";
        document.querySelector('.background-image-top-right').style.width = "100%";
        document.querySelector('.background-image-bottom-left').style.width = "100%";
        document.querySelector('.background-image-bottom-right').style.width = "100%";
    }, 0);
    setTimeout(function () {
        const element = document.getElementById("loading-element");
        element.remove(element);
    }, 750);
}


function pageTransition() {
    document.querySelector('.big-container').style.opacity = 1;
    document.querySelector('.back-container').style.transform = "translateY(5vh)";
}


function delayed(URL) {
    setTimeout(function () { window.location = URL }, 100);
}

function getTimeSptamp() {
    return Date.now();
}