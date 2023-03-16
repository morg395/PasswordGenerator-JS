const password = document.querySelector('.password');
const easyLevel = document.querySelector('.easyLevel');
const middleLevel = document.querySelector('.middleLevel');
const hardLevel = document.querySelector('.hardLevel');
const generate = document.querySelector('.generate');
const symbols = document.querySelector('.symbols');
const copy = document.querySelector('.copyPassword');

function generatePassword() {
    let password = '';

    if (easyLevel.checked) {
        levelDifficulty = 50;
        L = 8;
    } if (middleLevel.checked) {
        levelDifficulty = 60;
        L = 16;
    } if (hardLevel.checked) {
        levelDifficulty = 66;
        L = 24;
    }

    if (symbols.value > 3) {
        L = symbols.value;
    }

    let randomChar = function() {
        let number = Math.floor(Math.random() * levelDifficulty);
        if (number < 10) return number;
        if (number < 36) return String.fromCharCode(number + 55);
        return String.fromCharCode(number + 61);
    }

    while (password.length < L) password += randomChar();
    return password
}

generate.addEventListener('click', function() {
    password.value = generatePassword();
})

copy.addEventListener('click', function() {
    const passwordValue = password.value;
    if (passwordValue) {
        navigator.clipboard.writeText(passwordValue)
            .then(() => {
                password.value = '';
            })
    }
});