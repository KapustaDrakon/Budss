// Открытие/закрытие меню
const menu = document.querySelector('.menu');
const menuBackground = document.querySelector('.menu_background');
const buttonShowMenu = document.querySelector('.header__button-menu');
const buttonCloseMenu = document.querySelector('.menu__button-close');

const closeShowMenu = () => {
    if (menu.classList.contains('menu_display')) {
        menu.classList.remove('menu_display');
        menuBackground.classList.remove('menu_display');
    } else {
        menu.classList.add('menu_display');
        menuBackground.classList.add('menu_display');
    }
}

buttonShowMenu.addEventListener('click', () => closeShowMenu());
buttonCloseMenu.addEventListener('click', () => closeShowMenu());
menuBackground.addEventListener('click', () => closeShowMenu());

// Появление/закрытие куки
const cookies = document.querySelector('.cookies');
const buttonCookiesClose = document.querySelector('.cookies__button-close');
const buttonCookiesAccept = document.querySelector('.cookies__button_accept');
const buttonCookiesDecline = document.querySelector('.cookies__button_decline');

const closeCookiesPopup = () => cookies.classList.remove('cookies_display');

setTimeout(() => {
    cookies.classList.add('cookies_display');
}, 1000);

buttonCookiesClose.addEventListener('click', () => closeCookiesPopup());
buttonCookiesAccept.addEventListener('click', () => closeCookiesPopup());
buttonCookiesDecline.addEventListener('click', () => closeCookiesPopup());

// Открытие/закрытие формы
const done = document.querySelector('.done');
const buttonCloseFormContact = document.querySelector('.form-contact__button-close');
const formContactBackground = document.querySelector('.form-contact_background');
const formContact = document.querySelector('.form-contact');
const showFormContactButtonsArray = [
    document.querySelector('.menu__button-contact'),
    document.querySelector('.hero__button-contact'),
    document.querySelector('.brand__button-contact'),
    document.querySelector('.footer__button-contact'),
    document.querySelector('.header__button-contact')

];
showFormContactButtonsArray.forEach((button) => button.addEventListener('click', () => {
    formContact.style.display = 'flex';
    formContactBackground.style.display = 'block';
    document.querySelector('.header__button-contact').style.display = 'none';
}))
buttonCloseFormContact.addEventListener('click', () => {
    formContact.style.display = 'none';
    formContactBackground.style.display = 'none';
    if (window.innerWidth >= 1440) document.querySelector('.header__button-contact').style.display = 'block';
});
formContactBackground.addEventListener('click', () => {
    done.style.display = 'none';
    formContact.style.display = 'none';
    formContactBackground.style.display = 'none';
    if (window.innerWidth >= 1440) document.querySelector('.header__button-contact').style.display = 'block';
})

// Валидация формы
const doneButton = document.querySelector('.done__button');
const doneButtonClose = document.querySelector('.done__button-close');

doneButton.addEventListener('click', () => {
    done.style.display = 'none';
    formContactBackground.style.display = 'none';
});
doneButtonClose.addEventListener('click', () => {
    done.style.display = 'none';
    formContactBackground.style.display = 'none';
});

formContact.addEventListener('submit', (e) => {
    e.preventDefault();
    if (onSubmitFormContact()) {
        formContact.reset();
        formContact.style.display = 'none';
        done.style.display = 'flex';
    }
});
const onSubmitFormContact = () => {
    const name = document.getElementById('name-contact');
    const email = document.getElementById('email-contact');
    const phoneNumber = document.getElementById('phone-number-contact');
    const company = document.getElementById('company-contact');
    const url = document.getElementById('url-contact');

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const phoneNumberError = document.getElementById('phone-number-error');
    const errorMessage = document.getElementById('form-error-message');

    isValid = true;

    if (name.checkValidity() && name.value === '') {
        nameError.style.display = 'block';
        name.style.border = '1px solid #ec1211';
        isValid = false;
    }
    if (email.value === '') {
        emailError.style.display = 'block';
        email.style.border = '1px solid #ec1211';
        isValid = false;
    }
    if (phoneNumber.value === '') {
        phoneNumberError.style.display = 'block';
        phoneNumber.style.border = '1px solid #ec1211';
        isValid = false;
    }

    if (isValid) {
        errorMessage.style.display = 'none';
        nameError.style.display = 'none';
        emailError.style.display = 'none';
        phoneNumberError.style.display = 'none';
        name.style.border = '1px solid #f1f1f1';
        email.style.border = '1px solid #f1f1f1';
        phoneNumber.style.border = '1px solid #f1f1f1';

        console.log({
            name: name.value,
            email: email.value,
            phoneNumber: phoneNumber.value,
            company: company.value,
            url: url.value
        });
    } else {
        errorMessage.style.display = 'block';
    }
    return isValid;
}

// Маска для телефона input
document.addEventListener("DOMContentLoaded", function () {
    let phoneInput = document.getElementById('phone-number-contact');

    let getInputNumbersValue = function (input) {
        return input.value.replace(/\D/g, '');
    }

    let onPhonePaste = function (e) {
        let input = e.target,
            inputNumbersValue = getInputNumbersValue(input);
            let pasted = e.clipboardData || window.clipboardData;
        if (pasted) {
            let pastedText = pasted.getData('Text');
            if (/\D/g.test(pastedText)) {
                input.value = inputNumbersValue;
                return;
            }
        }
    }

    let onPhoneInput = function (e) {
        let input = e.target,
            inputNumbersValue = getInputNumbersValue(input),
            selectionStart = input.selectionStart,
            formattedInputValue = "";

        if (!inputNumbersValue) {
            return input.value = "";
        }

        if (input.value.length != selectionStart) {
            if (e.data && /\D/g.test(e.data)) {
                input.value = inputNumbersValue;
            }
            return;
        }

        if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
            if (inputNumbersValue[0] == "9") inputNumbersValue = "7" + inputNumbersValue;
            let firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+7";
            formattedInputValue = input.value = firstSymbols + " ";
            if (inputNumbersValue.length > 1) {
                formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
            }
            if (inputNumbersValue.length >= 5) {
                formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
            }
            if (inputNumbersValue.length >= 8) {
                formattedInputValue += ' ' + inputNumbersValue.substring(7, 9);
            }
            if (inputNumbersValue.length >= 10) {
                formattedInputValue += ' ' + inputNumbersValue.substring(9, 11);
            }
        } else {
            formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
        }
        input.value = formattedInputValue;
    }
    let onPhoneKeyDown = function (e) {
        let inputValue = e.target.value.replace(/\D/g, '');
        if (e.keyCode == 8 && inputValue.length == 1) {
            e.target.value = "";
        }
    }
    
    phoneInput.addEventListener('keydown', onPhoneKeyDown);
    phoneInput.addEventListener('input', onPhoneInput, false);
    phoneInput.addEventListener('paste', onPhonePaste, false);
    
})