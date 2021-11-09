const inputField = document.getElementById('name-input');
const spanText = document.getElementById('name-output');

inputField.addEventListener('input', (event) => {
    spanText.textContent = event.currentTarget.value;
});