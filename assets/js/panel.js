function phonesAllCheckedChanged(checked) {
    document.querySelectorAll(".checkbox-cell div input").forEach(element => {
        element.checked = checked;
    });
}

function runPageScript(page) {
    switch (page) {
        case "phones":
            var t = document.getElementById("phones-table");
            var trs = t.getElementsByTagName("tr");
            var tds = null;

            for (var i = 0; i < trs.length; i++) {
                tds = trs[i].getElementsByTagName("td");
                console.log("tds[n].innerHTML");
                for (var n = 0; n < tds.length; n++) {
                }
            }
            break;
    }
}

function selectClick(select) {
    let parent = select.closest(".select-holder");
    if (select.classList.contains("select-item")) {
        let header = parent.querySelector(".select-header");
        header.innerHTML = select.innerHTML;
    }
    let box = parent.querySelector(".select-items-box");
    if (box.style.opacity == 0)
        box.style.zIndex = 4;
    setTimeout(
        function () {
            box.style.opacity = box.style.opacity == 0 ? 1 : 0;
            box.style.zIndex = box.style.opacity == 0 ? -2 : 4;
        }, 50);
}

async function addNewPhone() {
    const pageData = await fetchText(`pages/phone-add-dialogue.html`);
    document.getElementById("body").insertAdjacentHTML('afterend', pageData);
    translateDialogue();
}

function closeDialogue() {
    document.querySelector(".dialogue-white-container").style.animation = "dialogue-out 0.5s 0s forwards";
    document.querySelector(".dialogue-container").style.animation = "dialogue-blur-out 0.5s 0s forwards";
    setTimeout(() => {
        document.getElementById("dialogue-container").remove();
    }, 700);
}

function submitNewPhone() {
    closeDialogue();
}

async function removePhone(id) {
    const pageData = await fetchText(`pages/phone-remove-dialogue.html`);
    document.getElementById("body").insertAdjacentHTML('afterend', pageData);
    translateDialogue();
}

async function editPhone(id) {
    const pageData = await fetchText(`pages/phone-edit-dialogue.html`);
    document.getElementById("body").insertAdjacentHTML('afterend', pageData);
    translateDialogue();
}

async function smsChange(id) {
    showNotification("sms-ok", "sms-change", "green", "/assets/image/success.svg");
    //showNotification("sms-ok1", "sms-change1", "red", "/assets/image/fail.svg");
    //showNotification("sms-ok2", "sms-change2", "yellow", "/assets/image/error.svg");
}

async function showNotification(header, message, color, img) {
    const pageData = await fetchText(`pages/notification.html`);
    document.getElementById("notification-container").innerHTML = pageData;
    document.getElementById("notification-container").querySelector(".notification-icon").setAttribute("src", img);
    document.getElementById("notification-container").querySelector(".notification-message").setAttribute("utext", message);
    document.getElementById("notification-container").querySelector(".notification-header").setAttribute("utext", header);
    setNotificationColors(color);
    translateNotification();
}

function notificationClick(notification) {
    notification.style.animation = "notification-out 0.5s 0s forwards";
}

function setNotificationColors(color) {
    switch (color) {
        case "green":
            document.querySelector(".notification-box").style["color"] = "rgb(from var(--clr-green4) r g b / .5)";
            document.querySelector(".notification-background").classList.add('notification-background-green');
            break;
        case "red":
            document.querySelector(".notification-box").style["color"] = "rgb(from var(--clr-red5) r g b / .2)";
            document.querySelector(".notification-background").classList.add('notification-background-red');
            break;
        case "yellow":
            document.querySelector(".notification-box").style["color"] = "rgb(from var(--clr-yellow5) r g b / .5)";
            document.querySelector(".notification-background").classList.add('notification-background-yellow');
            break;
    }
}