const undef = {
    "en": "Undefined",
    "fa": "تعریف نشده"
}

let lang;
let page;
let translatedContent;
let data;
let keywords;
let timespanWords;
let commonData;
let pageData;
let dir;

function translatePage() {
    document.querySelectorAll('[utext]').forEach(element => {
        translateContent(element);
    });
}

function translateContent(element) {
    const key = element.getAttribute('utext');
    if (translatedContent[key] != null) {
        const translatedWord =
            translatedContent[key] == null ?
                undef[lang] : translatedContent[key];
        if (
            element.type == "text" ||
            element.type == "email" ||
            element.type == "tel" ||
            element.type == "username" ||
            element.type == "password" ||
            element.type == "address") {
            element.placeholder = translatedWord;
        }
        else if (element.type == "submit")
            element.value = translatedWord;
        else
            element.innerHTML = translatedWord;
    }
    if (element.hasAttribute("data")) {
        fillElementData(element);
        replaceKeywords(element);
    }
}

function replaceKeywords(element) {
    var text = element.innerHTML;
    var sIndex = 0;
    var pIndex = -1;
    while ((sIndex = text.indexOf("[")) > pIndex) {
        var eIndex = text.indexOf("]");
        var key = text.substring(sIndex + 1, eIndex);
        if (keywords[key] == null) pIndex = sIndex;
        text = text.replace("[" + key + "]", keywords[key]);
        element.innerHTML = text;
    }
}

function fillElementData(element) {
    var elementText = element.innerHTML;
    const dataKeys = JSON.parse(element.getAttribute('data').replace(/\'/g, '"'));
    dataKeys.forEach(dataKeyInformation => {
        const dataKey = dataKeyInformation[0];
        const dataType = dataKeyInformation[1];
        var valueToReplace = data[dataKey];
        if (dataType == "checkbox") {
            element.checked = ["on", "active", "1", 1, "true", "[on]", "[active]", "[1]", 1, "[true]"].includes(data[dataKey]);
        }
        if (dataType == "datetime")
            valueToReplace = translateDate(data[dataKey]);
        if (dataType == "table") {
            elementText = fillTable(element, dataKeyInformation);
        }
        elementText = elementText.replace(dataKey, valueToReplace);
    });
    element.innerHTML = elementText;
}

function translateTimespan(timespan) {
    timespanWords["words"].forEach(word => {
        timespan = timespan.replace(word["key"], word["value"]);
    });
    return timespan;
}

function getTimespanFromMilliseconds(milliseconds) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const week = day * 7;
    const month = week * 4;
    const year = month * 12;

    if (milliseconds / year >= 1)
        return Math.round(milliseconds / year).toString() + " years ago";
    else if (milliseconds / month >= 1)
        return Math.round(milliseconds / month).toString() + " month ago";
    else if (milliseconds / year >= 1)
        return Math.round(milliseconds / week).toString() + " week ago";
    else if (milliseconds / year >= 1)
        return Math.round(milliseconds / day).toString() + " day ago";
    else if (milliseconds / year >= 1)
        return Math.round(milliseconds / hour).toString() + " hour ago";
    else if (milliseconds / year >= 1)
        return Math.round(milliseconds / minute).toString() + " minute ago";
    else if (milliseconds / second >= 1)
        return Math.round(milliseconds / second).toString() + " second ago";
}

function fillTable(element, dataKeyInformation) {
    var elementText = "";
    data[dataKeyInformation[0]].forEach(row => {
        elementText += "<tr>";
        dataKeyInformation[2].forEach(colm => {
            elementText += "<td>";
            colm.split('^').forEach(key => {
                if (key == "module-uptime")
                    if (row[key] == -1)
                        elementText += keywords["disconnected"];
                    else {
                        var timespan = getTimespanFromMilliseconds(Date.now() - Date.parse(row[key]));
                        elementText += translateTimespan(timespan);
                    }
                else
                    if (row[key] == -1)
                        elementText += keywords["disconnected"];
                    else {
                        elementText += row[key] == null ? key : row[key];
                        if (key == "module-battery")
                            elementText += "%"
                    }
            });
            elementText += "</td>";
        })
        elementText += "</tr>";
    });
    return elementText;
}

function translateDate(dateData) {
    if (dateData == null) return keywords["never"];
    const date = new Date(dateData);
    if (lang == "fa")
        return date.toLocaleString("fa", {
            weekday: "long",
            day: "numeric",
        }).replace("م", "") + " " +
            date.toLocaleDateString("fa", {
                month: "long"
            }) + " " +
            date.toLocaleDateString("fa", {
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                hour12: true
            });
    else
        return date.toLocaleString("en", {
            weekday: "long",
            day: "numeric",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: false
        });
}

async function fetchData(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const textData = await response.text();
    const jsonData = JSON.parse(textData);
    return jsonData;
}

async function getSetting(key) {
    const settings = await fetchData('user-setting.json');
    return settings[key];
}

async function reloadPage() {
    const cPage = document.documentElement.getAttribute("page");
    const cLang = await getSetting('lang');
    if (cLang != lang) {
        pageData = await fetchData(`assets/language/${cLang}/${cPage}.json`);
        commonData = await fetchData(`assets/language/${cLang}/common.json`);
        keywords = await fetchData(`assets/language/${cLang}/keywords.json`);
        timespanWords = await fetchData(`assets/language/${cLang}/timespanWords.json`);
    }
    if (cPage != page) {
        pageData = await fetchData(`assets/language/${cLang}/${cPage}.json`);
    }
    translatedContent = { ...commonData, ...pageData };
    dir = lang == 'fa' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', dir);
    lang = cLang;
    page = cPage;
    reloadData();
}

async function reloadData() {
    if (document.documentElement.getAttribute("hasData") == "true")
        data = await fetchData(`data/${page}.json`);
    translatePage();
    if (dir == "rtl") fixDir();
}

function fixDir() {
    document.querySelectorAll(".fix-dir").forEach(element => { element.style.direction = 'rtl'; });
}