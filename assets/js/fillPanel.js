const debug = true;


window.addEventListener('DOMContentLoaded', async () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    loadPage(urlParams.get('page'));
});

async function loadPage(page) {
    page = page == null ? "dashboard" : page;
    if (debug && window.location.search != "?page=" + page) {
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set('page', page);
        window.location.search = urlParams;
    }
    const lang = await getSetting('lang');
    const pageTData = await fetchJSON(`assets/language/${lang}/${page}.json`);
    const pageData = await fetchPage(`pages/${page}.html`);
    document.getElementById("container").innerHTML = pageData;
    document.documentElement.setAttribute("page", page);
    setPage(page,pageTData);
}


async function fetchPage(url) {
    var response = await fetch(url);
    if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
    return await response.text();
}