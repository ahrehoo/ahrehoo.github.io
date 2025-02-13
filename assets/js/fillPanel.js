window.addEventListener('DOMContentLoaded', async () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    loadPage(urlParams.get('page'));
});

async function loadPage(page) {
    page = page == null ? "dashboard" : page;
    const pageData = await fetchPage(`pages/${page}.html`);
    document.getElementById("container").innerHTML = pageData;
    document.documentElement.setAttribute("page", page);
    reloadPage();
}


async function fetchPage(url) {
    var response = await fetch(url);
    if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
    return await response.text();
}