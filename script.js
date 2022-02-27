var upper = document.getElementById("upperCase");
var lower = document.getElementById("lowerCase");
var number = document.getElementById("numeral");
var symbol = document.getElementById("symbol");
var _password = document.getElementById("password-tag");
var copyEl = document.getElementById("copy");
var lenght = document.getElementById("len");
var create = document.getElementById("create");

const upperCaseArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseArray = "abcdefghijklmnopqrstuvwxyz";
const numberArray = "9876543210";
const symbolArray = "!-_><#&/*+=#";

function createPassword() {
    const len = lenght.value;

    let password = "";

    if (upper.checked) {
        password += getUppercase();
    }

    if (lower.checked) {
        password += getLowercase();
    }

    if (number.checked) {
        password += getNumber();
    }

    if (symbol.checked) {
        password += getSymbol();
    }

    for (let i = password.length; i < len; i++) {
        const x = createX();
        password += x;
    }

    _password.innerText = password;
}

function createX() {
    const xs = [];
    if (upper.checked) {
        xs.push(getUppercase());
    }

    if (lower.checked) {
        xs.push(getLowercase());
    }

    if (number.checked) {
        xs.push(getNumber());
    }

    if (symbol.checked) {
        xs.push(getSymbol());
    }

    if (xs.length === 0) return "";

    return xs[Math.floor(Math.random() * xs.length)];
}

create.addEventListener("click", createPassword);

copyEl.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const password = _password.innerText;

    if (!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("Copy");
    textarea.remove();
    alert("Password Copied");
});

function getLowercase() {
    return lowerCaseArray[Math.floor(Math.random() * lowerCaseArray.length)];
}

function getUppercase() {
    return upperCaseArray[Math.floor(Math.random() * upperCaseArray.length)];
}

function getNumber() {
    return numberArray[Math.floor(Math.random() * numberArray.length)];
}

function getSymbol() {
    return symbolArray[Math.floor(Math.random() * symbolArray.length)];
}