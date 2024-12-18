function updateContent(langData) {
    document.querySelectorAll('[utext]').forEach(element => {
        const key = element.getAttribute('utext');
        if (
            element.type == "text" ||
            element.type == "email" ||
            element.type == "tel" ||
            element.type == "username" ||
            element.type == "password" ||
            element.type == "address") {
            element.placeholder = langData[key];
        }
        else if (element.type == "submit") {
            element.value = langData[key];
        } else {
            element.innerHTML = langData[key];
        }
    });
}

async function fetchData(url) {
    const response = await fetch(url);
    return response.json();
}

async function getSetting(key){
    const settings= await fetchData('user-setting.json');
    return settings[key];
}

window.addEventListener('DOMContentLoaded', async () => {
    const lang = await getSetting('lang');
    const dir = lang == 'fa' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', dir);
    const page = document.getElementById("page-title").innerHTML;
    const langData = await fetchData(`assets/language/${lang}/${page}.json`);
    updateContent(langData);
});