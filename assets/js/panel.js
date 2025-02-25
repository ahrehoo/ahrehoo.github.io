function phonesAllCheckedChanged(checked) {
    document.querySelectorAll(".checkbox-cell div input").forEach(element => {
        element.checked = checked;
    });
}