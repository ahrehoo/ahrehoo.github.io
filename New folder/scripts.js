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

function pageLoad() {
    document.querySelector('body').style.opacity = 1
    setTimeout(function () {
        document.querySelector('.loadingDiv').style.opacity = 0
        document.querySelector('table').style.transform = "translateY(5vh)"
    }, 500);
    setTimeout(function () {
        const element = document.getElementById("loadingDiv");
        element.remove();
    }, 1250);
}

function pageTransition() {
    document.querySelector('body').style.opacity = 1
    setTimeout(function () {
        document.querySelector('table').style.transform = "translateY(5vh)"
    }, 250);
}


function delay(URL) {
    setTimeout(function () { window.location = URL }, 100);
}

function getTimeSptamp(){
    return Date.now();
}