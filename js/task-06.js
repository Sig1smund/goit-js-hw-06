const inputField = document.getElementById('validation-input');

inputField.addEventListener('blur', (event) => {
    const almightyArray = [...event.currentTarget.value];
    if (almightyArray.length === Number(inputField.dataset.length)) {
        inputField.classList.add('valid')
    } else {
        inputField.classList.add('invalid')
    }
});