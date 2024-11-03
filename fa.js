function setFontVariations(lang){
}
function setLoginTexts(lang) {
    document.getElementById('login').innerText = "ورود";
    document.getElementById('username').placeholder = "نام کاربری";
    document.getElementById('password').placeholder = "رمز عبور";
    document.getElementById('submit').value = "ورود";
    document.getElementById('forget-account').innerText = "فراموشی اطلاعات کاربری";
}
function setRegisterTexts(lang) {
    document.getElementById('register').innerText = "ثبت نام";
    document.getElementById('phone').placeholder = "تلفن";
    document.getElementById('username').placeholder = "نام کاربری";
    document.getElementById('password').placeholder = "رمز عبور";
    document.getElementById('confirm-pass').placeholder = "تایید رمز عبور";
    document.getElementById('submit').value = "ثبت نام";
}
function setStatusTexts(lang) {
    document.getElementById('status').innerText = "وضعیت";
    document.getElementById('sensors').innerText = "سنسور ها";
    document.getElementById('phones').innerText = "تلفن ها";
    document.getElementById('alarms').innerText = "هشدار ها";
    document.getElementById('security').innerText = "امنیت";
    document.getElementById('diagnostics').innerText = "بررسی و چکاپ";
    document.getElementById('general').innerText = "تنظیمات عمومی";

    document.getElementById('dropdown-language').innerText = "زبان";
    document.getElementById('dropdown-user-information').innerText = "اطلاعات کاربری";
    document.getElementById('dropdown-backup-restore').innerText = "پشتیبان گیری و بازیابی";
    document.getElementById('dropdown-update').innerText = "بروزرسانی";
    document.getElementById('dropdown-factory-reset').innerText = "تنظیمات کارخانه";
}