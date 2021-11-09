const inputField = document.getElementById('validation-input');

inputField.addEventListener('blur', (event) => {
    const almightyArray = [...event.currentTarget.value];
    console.log(almightyArray);
    almightyArray.length === 6 ? inputField.style.borderColor = '#4caf50' : inputField.style.borderColor = '#f44336';
});