function setFontVariations(lang) {
}
function setLoginTexts(lang) {
    document.getElementById('login').innerText = "Login";
    document.getElementById('username').placeholder = "Username";
    document.getElementById('password').placeholder = "Password";
    document.getElementById('submit').value = "Login";
    document.getElementById('forget-account').innerText = "Forget account data";
}
function setRegisterTexts(lang) {
    document.getElementById('register').innerText = "Register";
    document.getElementById('username').placeholder = "Username";
    document.getElementById('password').placeholder = "Password";
    document.getElementById('confirm-pass').placeholder = "Confirm password";
    document.getElementById('phone').placeholder = "Phone";
    document.getElementById('submit').value = "Register";
}
function setStatusTexts(lang) {
    document.getElementById('status').innerText = "Status";
    document.getElementById('sensors').innerText = "Sensors";
    document.getElementById('phones').innerText = "Phones";
    document.getElementById('alarms').innerText = "Alarms";
    document.getElementById('security').innerText = "Security";
    document.getElementById('diagnostics').innerText = "Diagnotics";
    document.getElementById('general').innerText = "General";

    document.getElementById('dropdown-language').innerText = "- Language";
    document.getElementById('dropdown-user-information').innerText = "- User information";
    document.getElementById('dropdown-backup-restore').innerText = "- Backup & Restore";
    document.getElementById('dropdown-update').innerText = "- Update";
    document.getElementById('dropdown-factory-reset').innerText = "- Factory reset";
    
    document.getElementById('quick-setup').innerText = "Quick setup";
    document.getElementById('simple').innerText = "Simple";
    document.getElementById('advanced').innerText = "Advanced";
}