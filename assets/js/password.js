const passHolder = document.querySelectorAll(".pass-holder");

passHolder.forEach(element => {
    const passField = element.querySelector(".password-input");
    const passEye = element.querySelector(".eye");
    passEye.addEventListener("click", function () {
        passField.type =
            passField.type === "password" ?
                "text" : "password";
        passEye.src =
            passField.type === "password" ?
                "assets/image/close-eye.svg" : "assets/image/open-eye.svg";
    });
});

