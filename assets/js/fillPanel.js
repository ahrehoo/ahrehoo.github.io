const debug = false;

window.addEventListener('DOMContentLoaded', async () => {
    loadPage();
});

async function loadPage(page, bypass = false) {
    if (document.documentElement.getAttribute('wait') == 'true') {
        setTimeout(() => {
            loadPage();
        }, 50);
        return;
    }
    if (bypass) return;
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    page = page == null ? urlParams.get('page') == null ? "dashboard" : urlParams.get('page') : page;
    if (debug && window.location.search != "?page=" + page) {
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set('page', page);
        window.location.search = urlParams;
    }
    let [innerData, pd] = await Promise.all([
        fetch(`pages/${page}.html`).then(response => response.text()),
        fetch(`data/${page}.json`).then(response => response.json())
    ]);
    document.getElementById("container").innerHTML = innerData;
    if (page == "dashboard" || page == "phones" || page == "modules")
        try {
            document.getElementsByClassName("scrolling-page")[0].classList.remove("scrolling-page");
        } catch { }
    document.documentElement.setAttribute("page", page);
    await reloadPage(pd);
}