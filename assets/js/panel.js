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