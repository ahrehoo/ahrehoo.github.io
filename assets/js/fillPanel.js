const debug = false;


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
    const pageData = await fetchText(`pages/${page}.html`);
    document.getElementById("container").innerHTML = pageData;
    if (page == "dashboard" || page == "phones" || page == "modules")
        try {
            document.getElementsByClassName("scrolling-page")[0].classList.remove("scrolling-page");
        } catch { }
    document.documentElement.setAttribute("page", page);
    await setPage(page, pageTData);
}