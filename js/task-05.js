const inputField = document.getElementById('name-input');
const spanText = document.getElementById('name-output');

inputField.addEventListener('input', (event) => {
    if (!event.currentTarget.value) {
        spanText.textContent = 'Anonymous';
    } else {
        spanText.textContent = event.currentTarget.value;
    }
});