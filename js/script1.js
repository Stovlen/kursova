function addPrefix(input) {
    if (!input.value.startsWith("+38 ")) {
        input.value = "+38 " + input.value;
    }
}

function validateForm() {
    var nameValue = document.getElementById('name').value;
    var phoneValue = document.getElementById('phone').value;
    var problemValue = document.getElementById('problem').value;

    var nameRegex = /^[а-яА-ЯІіЇїЄєҐґ']+$/; // Регулярний вираз для кирилиці

    var nameWarning = document.getElementById('name-warning');
    var phoneWarning = document.getElementById('phone-warning');
    var problemWarning = document.getElementById('problem-warning');

    if (nameValue === "") {
        nameWarning.innerText = "Будь ласка, введіть своє ім'я!";
    } else if (!nameRegex.test(nameValue)) {
        nameWarning.innerText = "Будь ласка, введіть лише кирилицю!";
    } else {
        nameWarning.innerText = "";
    }

    if (!phoneValue.startsWith("+38 ") || !/^\+38 \d{10}$/.test(phoneValue)) {
        phoneWarning.innerText = "Будь ласка, введіть правильний номер телефону!";
    } else {
        phoneWarning.innerText = "";
    }

    if (problemValue === "") {
        problemWarning.innerText = "Будь ласка, заповніть це поле!";
    } else {
        problemWarning.innerText = "";
    }

    // Перевірка, чи є попередження
    var warnings = [nameWarning, phoneWarning, problemWarning];
    var hasWarnings = warnings.some(function (warning) {
        return warning.innerText !== "";
    });

    // Зміна висоти контейнера в залежності від наявних попереджень
    var formContainer = document.querySelector('.form-container');
    formContainer.style.height = hasWarnings ? '650px' : '550px';

    if (!hasWarnings && nameRegex.test(nameValue) && phoneValue.startsWith("+38 ") && /^\+38 \d{10}$/.test(phoneValue) && problemValue !== "") {
        // Всі поля заповнені та відповідають вимогам, перенаправлення на result.html
        window.location.href = "result.html";
    }
}

