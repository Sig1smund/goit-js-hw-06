const inputField = document.getElementById('validation-input');

inputField.addEventListener('blur', (event) => {
    const almightyArray = [...event.currentTarget.value];
    almightyArray.length === Number(inputField.dataset.length) ? inputField.style.borderColor = '#4caf50' : inputField.style.borderColor = '#f44336';
});